import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
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
    imagePreview = "";
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

  return (
    <SafeAreaView className="flex-1 bg-[#FBF6EE]">
      <ScrollView className="flex-grow">
        {/* //Header */}
        <Header />
        {/* //Image upload options and preview box */}
        <View className="flex-1 items-center justify-center top-10">
          <UploadOptions
            onTakeImage={takeImageHandler}
            onClearPrediction={clearPredictionHandler}
            onNetworkChange={setIsConnected}
          />
          <ImagePreview imageUri={imageUri} />
          <View className="w-[230] flex-1 items-end justify-end top-4 ">
          <SendAIImageButton
            imageBase64={imageBase}
            setResponse={setResponse}
            isPredicting={isPredicting}
            setIsPredicting={setIsPredicting}
            onPress={handlePredicting}
          />
        </View>
        </View>
        {/* //Submit button */}
        

        {isPredicting ? (
          <Text>Please Waiting~ It is Recognizing...🧐</Text>
        ) : null}

        <Text>{prediction}</Text>

        {isConnected ? (
          <View className="items-center rounded-md border-2 border-gray-200 bg-gray-100 w-80 h-52">
            {response ? <Text>{response}</Text> : null}
          </View>
        ) : null}

        {/* <NetworkSimulator onNetworkChange={setIsConnected} /> */}
        {isPredicting && <LoadingOverlay style={styles.overlay} />}
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
