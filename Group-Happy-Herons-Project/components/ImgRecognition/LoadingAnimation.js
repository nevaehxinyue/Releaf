import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function LoadingAnimation() {
  return (
    <View className="flex-1 items-center top-20">
      <LottieView
        source={require("../../assets/loadingAnimation.json")}
        autoPlay
        loop
        style={{
          width: 50,
          height: 50,
        }}
      />
    </View>
  );
}
