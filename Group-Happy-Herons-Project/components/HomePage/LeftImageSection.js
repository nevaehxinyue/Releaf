import React from "react";
import { HomePageImages } from "../ImageData";
import { View, Image, Text } from "react-native";

function LeftImageSection({
  bgColor,
  title,
  imageName,
  width,
  topPosition,
  onPress,
}) {
  const imageSource = HomePageImages[imageName];
  return (
    <View className="flex-1 top-6">
      <Image
        className="h-[130] w-[130] absolute rounded-r-2xl left-[-1]"
        source={imageSource}
      />
      <View
        className={`w-[${width}] h-[33] p-2 rounded-3xl items-center justify-center left-28 top-${topPosition}`}
        style={{ backgroundColor: bgColor }}
      >
        <Text className=" text-xs font-semibold" onPress={onPress}>{title}</Text>
      </View>
    </View>
  );
}

export default LeftImageSection;
