import React from "react";
import { Alert, TouchableOpacity, Text } from "react-native";
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
      const message = openAIResponse.choices[0].message.content;
      const reformatedMessage = message.split('\*', 2) // split by *
      // console.log(reformatedMessage[0]);
      setResponse(reformatedMessage);
      setIsPredicting(false);
    } catch (error) {
      console.log("Error sending image to gpt", error);
      setResponse(`Error sending image: ${error.message}`);
      setIsPredicting(false);
    }
  };

  if (isConnected) {
    return (
      <TouchableOpacity
        className="bg-[#233B29] rounded-3xl w-[250] py-4 items-center justify-center"
        onPress={sendImagToGpt4}
        disabled={isPredicting}
      >
        <Text className="text-[#FBF6EE] text-[16px] font-bold">Submit</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
    className="bg-[#233B29] rounded-3xl w-[250] py-4 items-center justify-center"
    onPress={onPress}
    disabled={isPredicting}
  >
    <Text className="text-[#FBF6EE] text-[16px] font-bold">Submit</Text>
  </TouchableOpacity>
    
  );
}

export default SendAIImageButton;
