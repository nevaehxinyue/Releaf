import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {  View, Image,  } from "react-native";

function ImagePreview({ imageUri }) {
  return (
    <View className="flex-1 items-center justify-center">
    <LinearGradient
        colors={[ '#f8f7ff', '#feeafa', '#dee2ff']}
        start={{ x: 0, y: 0}}
        end={{ x: 1, y: 1}}
        className="w-[230] h-[230] items-center justify-center rounded-2xl"
    >
      {imageUri && (
        <>
          <Image
            className="w-full h-full object-contain"
            source={{ uri: imageUri }}
          />
        </>
      )}
      </LinearGradient>
    </View>
  );
}

export default ImagePreview;
