import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import {geminiIntro, geminiLeo, getMoviePoster } from './gemini.js';

dotenv.config();

const app = express();
const port = 3001;

// For ES modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Serve static files from frontend/
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Serve the frontend/index.html on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

function cleanJSON(text) {
  return text.replace(/```json|```/g, '').trim();
}

// ========================= GEMINI-BASED APIs =========================

//hello
app.post('/hello', async (req, res) => {
    try {
      const { companyName } = req.body;
      if (!companyName) {
        return res.status(400).json({ error: 'companyName is required' });
      }
      const result = await geminiIntro();
      const cleanedResult = cleanJSON(result);
      res.json({ company: companyName, todayPrediction: JSON.parse(cleanedResult) });
    } catch (err) {
      console.error('Prediction Error:', err.message);
      res.status(500).json({ error: 'Failed to generate prediction.' });
    }
  });


  //hello
app.post('/leo', async (req, res) => {
    try {
      const { movieName } = req.body;
      if (!movieName) {
        return res.status(400).json({ error: 'movieName is required' });
      }
      const result = await geminiLeo(movieName);
      const cleanedResult = cleanJSON(result);

      const parsed = JSON.parse(cleanedResult);

      // Add poster
      const posterURL = await getMoviePoster(parsed.title);
      parsed.url = posterURL;
  
      res.json({ movieName: parsed.title, movieResult: parsed });

      // res.json({ movieName: movieName, movieResult: JSON.parse(cleanedResult) });
    } catch (err) {
      console.error('Prediction Error:', err.message);
      res.status(500).json({ error: 'Failed to generate prediction.' });
    }
  });


// ========================= Server Listen =========================
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
