import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";
import { BackgroundImages } from "../ImageData";

function BackImage({ index, animationValue, width }) {
  const maskStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ["rgba(0, 0, 0, 0.5)", "transparent", "rgba(0, 0, 0, 0.5)"]
    );
    const scale = interpolate(animationValue.value, [-1, 0, 1], [1, 1, 1]);
    const opacity = interpolate(animationValue.value, [-1, 0, 1], [0.5, 1, 1]);
    return {
      backgroundColor,
      opacity,
      transform: [{ scale }],
    };
  }, [animationValue]);

  return (
    <Animated.Image
      source={BackgroundImages[index].image}
      style={[
        {
          width: width,
          height: width,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        maskStyle,
      ]}
      resizeMode="cover"
    />
  );
}

export default BackImage;
