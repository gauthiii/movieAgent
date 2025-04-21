
# 🎬 Movie AI Agent

Welcome to the **Movie AI Agent**!  
Built using **Gemini AI** to pull live details like synopsis, cast, director, verdict, and poster image from just a movie name input 🚀.  
A beautiful, interactive frontend. A strong AI-powered backend.

---

## 🌟 Features

- 🎥 Get **Synopsis**, **Director**, **Cast**, **Verdict**, **Release Date**, and **Poster** from just a movie name.
- ⚡ Real-time, AI-generated responses via **Google Gemini API**.
- 🎨 Stunning **TailwindCSS** + **Animate.css** based frontend UI.
- 🌀 Beautiful loading spinners while fetching.
- 📜 Clean JSON parsing and User-Friendly Display (no ugly JSON dumps!).
- 📸 Poster images displayed inside cards for a cinematic feel.

---

## 📂 Project Structure

```
/backend
  ├── server.js          # Express backend server
  ├── gemini.js           # Gemini API request functions
/frontend
  ├── index.html          # Main Frontend Page
  ├── script.js           # Fetch movie details + update UI dynamically
  ├── styles.css          # (Optional) Extra custom styles
.env                       # Environment variables for API keys
```

---

## 🚀 How It Works

1. User enters a **Movie Name** 🎬
2. Frontend sends a **POST request** to `/leo` API endpoint.
3. Server calls **Gemini AI** with a smart prompt.
4. Gemini responds with clean JSON:  
   ```json
   {
     "agent": "Gemini 1.5 Pro",
     "synopsis": "A thrilling story of a vigilante...",
     "director": "Lokesh Kanagaraj",
     "cast": "Vijay, Trisha, Sanjay Dutt",
     "verdict": "Blockbuster",
     "releaseDate": "2023-10-19",
     "url": "https://link-to-movie-poster.jpg"
   }
   ```
5. Frontend dynamically shows all this **in a cool glassy card** with the poster image!

---

## 🛠️ Technologies Used

| Tool | Purpose |
|:-----|:--------|
| Node.js | Backend Server |
| Express.js | API Routing |
| Google Gemini API | AI Agent (for movie info) |
| TailwindCSS | Beautiful UI Styling |
| Animate.css | Smooth Animations |
| Vanilla JS | Frontend scripting |

---

## 🎯 Quick Setup

1. Clone this repo:
   ```bash
   git clone https://github.com/your-username/movie-ai-agent.git
   cd movie-ai-agent
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Create `.env` file inside `/backend`:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open `http://localhost:3000` 🎬

---

## 👑 Authors

- **Gautham Vijayaraj**
- **Mohana Krishnan Karthiyen**

Built with 💙 to celebrate movies, tech, and creativity!

---

## 📸 Sneak Peek

> "I am **Gemini Agent**!  
> Here’s everything you need to know about **your favorite movie**..." 🎥

_(Poster image beautifully displayed here)_

---

# 🛸 Special Thanks

- Google DeepMind for Gemini
- Tailwind Labs
- All amazing movie buffs and AI enthusiasts worldwide 🌎

---

# License

This project is licensed under the MIT License.

---

# 🎬 Enjoy Your Movie Journey!
