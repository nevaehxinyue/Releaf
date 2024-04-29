import React from "react";
import { Alert } from "react-native";
import Button from "./Button";
import axios from "axios";
import { BASEURL } from "@env";
import sendImageToOpenAI from "../../api/gpt4Api";

function SendAIImageButton({
  name,
  imageBase64,
  setResponse,
  setIsPredicting,
}) {
  const sendImagToGpt4 = async () => {
    if (!imageBase64) {
      Alert.alert("Please upload an image first.");
    }
    setIsPredicting(true);
    try {
      // const result = await axios.post(
      //   `${BASEURL}/send-image`,
      //   { image: imageBase64 },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      const openAIResponse = await sendImageToOpenAI(imageBase64);
      
      const message = openAIResponse.choices[0].message.content;
     
      setResponse(message);
      setIsPredicting(false);
    } catch (error) {
      console.log("Error sending image to gpt", error);
      setResponse(`Error sending image: ${error.message}`);
      setIsPredicting(false);
    }
  };

  return <Button name={name} onPress={sendImagToGpt4} />;
}

export default SendAIImageButton;
