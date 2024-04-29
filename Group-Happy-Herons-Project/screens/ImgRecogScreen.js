import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Switch,
} from "react-native";

import NetInfo from "@react-native-community/netinfo";
import { useState, useEffect } from "react";
import ImagePicker from "../components/ImgRecognition/ImagePicker";
import { useModel } from "../hooks/useModel";
import { predictImage } from "../util/predict";
import SendAIImageButton from "../components/ImgRecognition/SendAIImageButton";
import { NetworkSimulator } from "../components/ImgRecognition/NetworkSimulator";
import LoadingOverlay from "../components/ImgRecognition/ui/LoadingOverlay";
import React from "react";

function ImgRecogScreen() {
  const [imageUri, setImageUri] = useState("");
  const [imageBase, setImageBase] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [response, setResponse] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isPredicting, setIsPredicting] = useState(false);

  const model = useModel();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  async function takeImageHandler(imageUri, imageBase) {
    setImageUri(imageUri);
    setImageBase(imageBase);
    setIsPredicting(true);
    try {
      if (!isConnected) {
        const predictionRC = await predictImage(model, imageUri, setPrediction);
        console.log(predictionRC);
      }
    } catch (error) {
      console.error(error);
    }
    setIsPredicting(false);
  }

  function clearPredictionHandler() {
    setPrediction(null);
    setResponse("");
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
        contentContainerStyle={styles.contentContainer} // Adjust content layout here
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

          {isConnected && (
            <SendAIImageButton
              name="submit"
              imageBase64={imageBase}
              setResponse={setResponse}
              setIsPredicting={setIsPredicting}
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

      {isPredicting && (
        <LoadingOverlay style={styles.overlay} /> // This will be positioned over your ScrollView content
      )}
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
