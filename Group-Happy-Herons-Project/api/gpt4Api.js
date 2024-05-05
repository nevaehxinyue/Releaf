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
            text: "You are a recycling AI assistant. Please provide disposal instructions for the item shown in the picture according to the latest recycling rules in New Zealand. Format your response in two parts, separated by '*'. The first part should contain only the name of the appropriate disposal method, chosen from 'Rubbish Bin', 'Recycling Bin', 'Kitchen Bin', or other specific options such as 'Special Recycling' or 'Donation Centers'. The second part should include very brief instructions, not exceeding 25 words, on how to properly dispose of the item using the selected method. Separate each sentence in the second part with a new line",
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

