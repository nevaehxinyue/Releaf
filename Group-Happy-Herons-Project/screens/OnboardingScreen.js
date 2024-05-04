import React, { useCallback, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import BackImage from "../components/OnboardingScreen/BackImage";
import { BackgroundImages } from "../components/ImageData";

function OnboardingScreen({ navigation }) {
  const { width } = useWindowDimensions();
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(1, { duration: 1300, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  const animationStyle = useCallback(
    (value) => {
      "worklet";
      const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
      const translateX = interpolate(value, [-2, 0, 1], [-width, 0, width]);
      return {
        transform: [{ translateX: isNaN(translateX) ? 0 : translateX }],
        zIndex,
      };
    },
    [width]
  );

  //Define text animation

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  // Use font
  const [fontsLoaded] = Font.useFonts({
    "LobsterTwo-Italic": require("../assets/fonts/LobsterTwo-Italic.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View className="flex-1 bg-[#FBF6EE] items-center justify-center">
      <View className="flex-1 top-36">
        <Carousel
          loop={true}
          autoPlay={true}
          style={{ width: width, height: (3 / 4) * width }}
          width={width}
          data={BackgroundImages}
          renderItem={({ index, animationValue }) => {
            return (
              <BackImage
                key={index}
                index={index}
                animationValue={animationValue}
                width={width}
              />
            );
          }}
          customAnimation={animationStyle}
          scrollAnimationDuration={1200}
        />
      </View>
      <View className="flex-1 items-center justify-center top-24">
        <Text
          className="text-[26px] text-[#233B29]"
          style={{ fontFamily: "LobsterTwo-Italic" }}
        >
          We simplify eco-caring for you
        </Text>
      </View>
      {/* <View className=" flex-1 items-center justify-center top-40">
        <Animated.Text
          className="text-[#233B29] text-lg font-semibold"
          style={animatedTextStyle}
          onPress={() => navigation.replace("AppNavigator")}
        >
          {" "}
          Tab to start{" "}
        </Animated.Text>
      </View> */}

      <View className="flex-1 items-center justify-center">
        <TouchableOpacity
          className="rounded-full items-center justify-center  h-[80] w-[80] bg-[#233B29] "
          onPress={() => navigation.replace("AppNavigator")}
        >
          <Animated.Text
            style={animatedTextStyle}
            className="text-[#FBF6EE] text-lg font-semibold"
          >
            Start
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OnboardingScreen;
