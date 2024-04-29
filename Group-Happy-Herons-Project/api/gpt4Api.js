import axios from "axios";


// const express = require("express");
// const axios = require("axios");
// const router = express.Router();
// require('dotenv').config();

async function sendImageToOpenAI(imageBased64) {
  
  if (!imageBased64) {
    return res.send("No image provided").status(400);
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
                "url": `data:image/jpeg;base64,${imageBased64}`,
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
    res.json(response.data);
    
  } catch (error) {
    console.log(error)
    console.log('Error communicating with openAI', error.message);
    res.status(500).json({ error: error.message, message: "Failed to process the image with Open AI."})
    
  };


}

// router.post("/", async (req, res) => {
//   const { image } = req.body;
//   console.log(image);
  
//   console.log(process.env.OPEN_AI_API_KEY)
//   if (!image) {
//     return res.send("No image provided").status(400);
//   };

//   const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}` 
//   };

//   const payload = {
//     model: "gpt-4-turbo",
//     messages: [
//       {
//         role: "user",
//         content: [
//           {
//             type: "text",
//             text: "Based on the lates rules to get rid of rubbish in New Zealand, please list the steps to get rid of this item in the picture with only three short and concise bullet points. Don't give the source of your answer.",
//           },
//           {
//             type: "image_url",
//             image_url: {
//                 "url": `data:image/jpeg;base64,${image}`,
//                 "detail": "low"
//             }
//           }
//         ],
//       },
//     ],
//     max_tokens: 100
//   };

//   try {
//     const response = await axios.post('https://api.openai.com/v1/chat/completions', payload, { headers });
//     res.json(response.data);
    
//   } catch (error) {
//     console.log(error)
//     console.log('Error communicating with openAI', error.message);
//     res.status(500).json({ error: error.message, message: "Failed to process the image with Open AI."})
    
//   };

// });

// module.exports = router;


export default sendImageToOpenAI;