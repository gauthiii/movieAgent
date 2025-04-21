import 'dotenv/config';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


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
      And then tell me the synopsis of the movie "${movieName}"in 1 line.
      And give the following details.
      For the url part, give the publicly available url of poster of the movie. This must be able to be used as a direct html img tag.
      This is an example url: https://en.wikipedia.org/wiki/Avengers:_Endgame
      I need it exactly like this for all the movies. Find me any open source image links. Directly to be used. Use the google search too.
      Respond strictly in clean JSON format like:
      {
        "agent": "Gemini API",
        "synopsis": <one line synopsis>,
        "director": <director name>,
        "cast": <actor name1> and <actorname2>,
        "releaseDate": <release date>,
        "verdict": <blockbuster, hit or lame>,
        "url": <https link>
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

