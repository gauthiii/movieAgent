import 'dotenv/config';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OMDb_API_KEY = process.env.OMDb_API_KEY;


export async function geminiIntro() {

    const axios = (await import('axios')).default;
  
    const prompt = `
      I need you to introduce yourself as an AI Agent
      Respond strictly in clean JSON format like:
      {
        "agent": "Gemini API",
        "service": "Real Time",
      }
      No explanations. No markdown. Only raw JSON.
    `;
  
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [{ role: 'user', parts: [{ text: prompt }] }]
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
    } catch (err) {
      console.error('Gemini API Error:', err?.response?.data || err.message);
      throw err;
    }
  }






export async function geminiLeo(movieName) {
  const axios = (await import('axios')).default;

  const prompt = `
    I need you to introduce yourself as an AI Agent.
    Then give me:
    - The movie name (the exact name of "${movieName}")
    - A one-line synopsis for the movie "${movieName}"
    - The Director name
    - The Main Cast (2-3 names)
    - Release Date
    - Final Verdict (Blockbuster / Hit / Average / Flop)

    Respond strictly in clean JSON format like:
    {
      "agent": "Gemini API",
      "title": "<the exact title>",
      "synopsis": "<one line synopsis>",
      "director": "<director name>",
      "cast": "<actor name1> and <actor name2>",
      "releaseDate": "<release date>",
      "verdict": "<verdict>"
    }
    No explanations. No markdown. Only raw JSON.
  `;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{ role: 'user', parts: [{ text: prompt }] }]
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    console.log(response.data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}');

    return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}';

  } catch (err) {
    console.error('Gemini API Error:', err?.response?.data || err.message);
    throw err;
  }
}

export async function getMoviePoster(movieName) {

  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${OMDb_API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.Response === "True" && data.Poster && data.Poster !== "N/A") {
      return data.Poster;  // ✅
    } else {
      console.error("Can't find URL");
      return "https://m.media-amazon.com/images/I/7103d-g1quL.jpg"; // fallback poster
    }
  } catch (error) {
    console.error("OMDb fetch error:", error);
    return "https://m.media-amazon.com/images/I/7103d-g1quL.jpg"; // fallback
  }
}



