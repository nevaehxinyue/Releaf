import React from "react";
import { Alert, TouchableOpacity, Text, View } from "react-native";
import Button from "./Button";
import sendImageToOpenAI from "../../api/gpt4Api";

function SendAIImageButton({
  imageBase64,
  setResponse,
  isPredicting,
  setIsPredicting,
  isConnected,
  onPress,
}) {
  const sendImagToGpt4 = async () => {
    if (!imageBase64) {
      Alert.alert("Please upload an image first.");
      return;
    }
    setIsPredicting(true);
    try {
      const openAIResponse = await sendImageToOpenAI(imageBase64);
      console.log(openAIResponse);
      const message = openAIResponse.choices[0].message.content;
      setResponse(message);
      setIsPredicting(false);
    } catch (error) {
      console.log("Error sending image to gpt", error);
      setResponse(`Error sending image: ${error.message}`);
      setIsPredicting(false);
    }
  };
  return (
    <TouchableOpacity
      className="bg-[#233B29] rounded-2xl w-[75] h-[30] items-center justify-center"
      onPress={isConnected ? sendImagToGpt4 : onPress}
      disabled={isPredicting}
    >
      <Text className="text-[#FBF6EE] text-[16px] font-semibold">Submit</Text>
    </TouchableOpacity>
  );
}

export default SendAIImageButton;
