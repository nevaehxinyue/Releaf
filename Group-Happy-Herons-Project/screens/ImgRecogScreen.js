import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Switch,
  Button,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import { useState, useEffect } from "react";
import ImagePicker from "../components/ImgRecognition/ImagePicker";
import { predictImage } from "../util/predict";
import SendAIImageButton from "../components/ImgRecognition/SendAIImageButton";
import { NetworkSimulator } from "../components/ImgRecognition/NetworkSimulator";
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

  let imagePreview = "";

  imagePreview = (
    <>
      <Image
        className="w-[200] h-[200] object-contain"
        source={{ uri: imageUri }}
      />
      <Text>{prediction}</Text>
    </>
  );

  return (
    <ScrollView
      className="flex-1 bg-[#FBF6EE]"

      // style={styles.container}
      // contentContainerStyle={styles.contentContainer}
    >
      <Header />
      {/* //ImagePicker */}

      <UploadOptions onTakeImage={takeImageHandler} onClearPrediction={clearPredictionHandler} />

        {/* <ImagePicker
          onTakeImage={takeImageHandler}
          onClearPrediction={clearPredictionHandler}
        /> */}
   
        <ImagePreview imageUri={imageUri} />
        {isPredicting ? (
          <Text>Please Waiting~ It is Recognizing...🧐</Text>
        ) : null}

        <Text>{prediction}</Text>

        {isConnected ? (
          <SendAIImageButton
            name="submit"
            imageBase64={imageBase}
            setResponse={setResponse}
            setIsPredicting={setIsPredicting}
          />
        ) : (
          <Button
            title="Submit"
            onPress={handlePredicting}
            disabled={isPredicting}
          />
        )}
 

      {isConnected ? (
        <View className="items-center rounded-md border-2 border-gray-200 bg-gray-100 w-80 h-52">
          {response ? <Text>{response}</Text> : null}
        </View>
      ) : null}

      <NetworkSimulator onNetworkChange={setIsConnected} />
      {isPredicting && <LoadingOverlay style={styles.overlay} />}
    </ScrollView>
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
