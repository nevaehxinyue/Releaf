import * as FileSystem from "expo-file-system";
import * as tf from "@tensorflow/tfjs";

import classNames from "../constants/classNname.json";
import { Alert } from "react-native";
import { decodeJpeg } from "@tensorflow/tfjs-react-native";

function processImage(imageTensor) {
  return imageTensor
    .expandDims(0)
    .resizeBilinear([224, 224]) // Resize to model expected dimensions
    .div(tf.scalar(255.0)) // Normalize pixel values to [0,1]
    .sub(tf.tensor1d([0.485, 0.456, 0.406])) // Subtract mean
    .div(tf.tensor1d([0.229, 0.224, 0.225])) // Divide by std deviation
    .transpose([0, 3, 1, 2]); // Change from [batch, height, width, channels] to [batch, channels, height, width]
}

export async function predictImage(model, uri, setPrediction) {
  try {
    if (!model) {
      console.log("Model not loaded yet.");
      return;
    }
    // Read the image file into a base64 string, then convert this to a Tensor
    const imgB64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
    const rawImageData = new Uint8Array(imgBuffer);

    // Decode the image to a tensor
    const imageTensor = decodeJpeg(rawImageData);
    const processedImage = processImage(imageTensor);

    // Make a prediction
    const predictions = await model.predict(processedImage);
    const predIndex = predictions.argMax(-1).dataSync()[0];
    let predLabel = "";
    const imageLabel = classNames[predIndex];
    console.log(imageLabel);
    if (imageLabel === "General") {
      predLabel = "Rubbish Bin";
    } else if (imageLabel === "Recycle") {
      predLabel = "Recycling Bin";
    } else {
      predLabel = imageLabel + " " + "Bin";
    }
    setPrediction(predLabel);
    console.log(predIndex);
    console.log("Predicted:", predLabel);
  } catch (error) {
    console.error("Error predicting image:", error);
    Alert.alert("Error predicting image:", "Sorry, Not able to Predict");
  }
}
