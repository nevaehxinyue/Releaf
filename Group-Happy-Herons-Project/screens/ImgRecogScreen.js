import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import { useState, useEffect } from "react";
import { predictImage } from "../util/predict";
import SendAIImageButton from "../components/ImgRecognition/SendAIImageButton";
import LoadingOverlay from "../components/ImgRecognition/ui/LoadingOverlay";
import React from "react";
import Header from "../components/ImgRecognition/Header";
import ImagePreview from "../components/ImgRecognition/ImagePreview";
import UploadOptions from "../components/ImgRecognition/UploadOptions";
import LoadingAnimation from "../components/ImgRecognition/LoadingAnimation";
import AIResponse from "../components/ImgRecognition/AIResponse";

function ImgRecogScreen({ model }) {
  const [imageUri, setImageUri] = useState("");
  const [imageBase, setImageBase] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [response, setResponse] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isPredicting, setIsPredicting] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log(`NetState: ${state.isConnected}`)
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isFocused) {
      clearStates();
    }
  }, [isFocused]);

  const clearStates = () => {
    setImageUri("");
    setImageBase("");
    setPrediction(null);
    setResponse("");
   
  };

  function takeImageHandler(imageUri, imageBase) {
    setImageUri(imageUri);
    setImageBase(imageBase);
  }

  function clearPredictionHandler() {
    setPrediction(null);
    setResponse("");
  }

  async function handlePredicting() {
    if (!imageUri) {
      Alert.alert("Error", "Please pick an image before submitting.");
      return;
    }
    setIsPredicting(true);
    try {
      const predictionResult = await predictImage(
        model,
        imageUri,
        setPrediction
      );
    } catch (error) {
      Alert.alert("Error", "Failed to make prediction.");
      console.error(error);
    }
    setIsPredicting(false);
  }
  console.log(`isConnected: ${isConnected}`)

  return (
    <SafeAreaView className="flex-1 bg-[#FBF6EE]">
      <ScrollView className="flex-grow">
        {/* //Header */}
        <Header onNetworkChange={setIsConnected} />
        {/* //Image upload options and preview box */}
        <View className="flex-1 items-center justify-center top-10">
          <UploadOptions
            onTakeImage={takeImageHandler}
            onClearPrediction={clearPredictionHandler}
          />
          <ImagePreview imageUri={imageUri} />
          <View className="w-[250] flex-1 items-end justify-end top-4 ">
            <SendAIImageButton
              isConnected={isConnected}
              imageBase64={imageBase}
              setResponse={setResponse}
              isPredicting={isPredicting}
              setIsPredicting={setIsPredicting}
              onPress={handlePredicting}
            />
          </View>
        </View>
        {/* //Submit button */}

        <View className="flex-1 items-center justify-center top-[90px]">
    
          {/* <LoadingAnimation /> */}

          <AIResponse
            isPredicting={isPredicting}
            isConnected={isConnected}
            response={response}
            prediciton={prediction}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default ImgRecogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF6EE",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  networkSimulator: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  fullscreen: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
});
