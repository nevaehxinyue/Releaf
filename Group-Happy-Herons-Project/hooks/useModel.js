import { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import { bundleResourceIO } from "@tensorflow/tfjs-react-native";

export const useModel = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    async function loadModel() {
      try {
        await tf.ready();
        console.log("TF ready");
        const modelJson = require("../assets/model/model.json");
        const modelWeights = [
          require("../assets/model/group1-shard1of11.bin"),
          require("../assets/model/group1-shard2of11.bin"),
          require("../assets/model/group1-shard3of11.bin"),
          require("../assets/model/group1-shard4of11.bin"),
          require("../assets/model/group1-shard5of11.bin"),
          require("../assets/model/group1-shard6of11.bin"),
          require("../assets/model/group1-shard7of11.bin"),
          require("../assets/model/group1-shard8of11.bin"),
          require("../assets/model/group1-shard9of11.bin"),
          require("../assets/model/group1-shard10of11.bin"),
          require("../assets/model/group1-shard11of11.bin"),
        ];
        const loadedModel = await tf.loadGraphModel(
          bundleResourceIO(modelJson, modelWeights)
        );
        setModel(loadedModel);
        console.log("Model loaded successfully.");
      } catch (error) {
        console.error("Failed to load the model:", error);
      }
    }
    loadModel();
  }, []);

  return model;
};
