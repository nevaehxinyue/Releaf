import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Image } from "react-native";

function ImagePreview({ imageUri }) {
  return (
    <View className="flex-1 items-center justify-center">
      <LinearGradient
        // [ '#f8f7ff', '#feeafa', '#dee2ff']
        // [ '#d5f7dd', '#9fe0af', '#88cf9a'] light green
        // [ '#60a171', '#3f754e', '#233B29'] dark green
        //[ '#efebfc', '#ddd4fc', '#c6b6fb'] light purple
        //[ '#d4e4ff', '#dcd4ff', '#f2d4ff'] blue & purple
        colors={["#d4e4ff", "#dcd4ff", "#f2d4ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-[250] h-[250] items-center justify-center rounded-2xl"
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
