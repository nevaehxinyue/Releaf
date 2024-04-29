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
      <Image style={styles.image} source={{ uri: imageUri }} />
      <Text>{prediction}</Text>
    </>
  );

  return (
    <View style={styles.fullscreen}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.viewContainer}>
          {imageUri ? (
            <View style={styles.imagePreview}>{imagePreview}</View>
          ) : null}

          {isPredicting ? (
            <Text>Please Waiting~ It is Recognizing...🧐</Text>
          ) : null}

          <ImagePicker
            onTakeImage={takeImageHandler}
            onClearPrediction={clearPredictionHandler}
          />

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
        </View>

        {isConnected ? (
          <View className="items-center rounded-md border-2 border-gray-200 bg-gray-100 w-80 h-52">
            {response ? <Text>{response}</Text> : null}
          </View>
        ) : null}

        <NetworkSimulator onNetworkChange={setIsConnected} />
      </ScrollView>
      {isPredicting && <LoadingOverlay style={styles.overlay} />}
    </View>
  );
}

export default ImgRecogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
