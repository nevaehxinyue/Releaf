import axios from "axios";


// const express = require("express");
// const axios = require("axios");
// const router = express.Router();
// require('dotenv').config();

async function sendImageToOpenAI(imageBase64) {
  if (!imageBase64) {
    throw new Error("No image provided");
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}` 
  };

  const payload = {
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Based on the lates rules to get rid of rubbish in New Zealand, please list the steps to get rid of this item in the picture with only three short and concise bullet points. Don't give the source of your answer.",
          },
          {
            type: "image_url",
            image_url: {
                "url": `data:image/jpeg;base64,${imageBase64}`,
                "detail": "low"
            }
          }
        ],
      },
    ],
    max_tokens: 100
  };

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', payload, { headers });
    return response.data;
    
  } catch (error) {
    console.log(error)
    console.log('Error communicating with openAI', error.message);
    throw error;
    
  };

};

export default sendImageToOpenAI;

