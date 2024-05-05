import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const CircleItem = () => {
  const opacity = useSharedValue(0.7);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(1, { duration: 1500, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    //Ms.Bin
    <ScrollView>
      <View className="mr-[70] items-end mt-16 ">
        <Animated.View className="mr-[200]" style={animatedCircleStyle}>
          <LinearGradient
            colors={["#FFFFFF", "#FFFFFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="absolute w-[240] h-[240] rounded-full"
          />
        </Animated.View>
        <Animated.View style={animatedCircleStyle} className="left-[10]">
        <LinearGradient
          colors={["#c2d9ff", "#b3a3f7", "#c672ed"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="w-[65] h-[65] rounded-full items-center justify-center mt-[50] mr-[60]"
        >
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={24}
            color="white"
          />
          <Text className="text-[#FBF6EE] font-semibold text-[20px]">1</Text>
        </LinearGradient>
        </Animated.View>
        <Text className="text-black font-semibold text-[24px] mt-4 mr-[15]">
          Ms.Machine
        </Text>
      </View>

      {/* //Mr.Map */}
      <View className="mr-[190] items-end mt-[50] ">
        <Animated.View className="mr-[200]" style={animatedCircleStyle}>
          <LinearGradient
            colors={["#f2d4b8f","#f5bb84","#f59f4e"]}

            className="absolute w-[240] h-[240] rounded-full"
          />
        </Animated.View>
        <View className="w-[65] h-[65] rounded-full bg-black items-center justify-center mt-[50] mr-[60]">
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={24}
            color="white"
          />
          <Text className="text-[#FBF6EE] font-semibold text-[20px]">1</Text>
        </View>
        <Text className="text-black font-semibold text-[24px] mt-4 mr-[55]">
          Mr.Map
        </Text>
      </View>

      {/* //Ms.Policy */}
      <View className="mr-[70] items-end mt-12 ">
        <Animated.View className="mr-[200]" style={animatedCircleStyle}>
          <LinearGradient
            colors={["#f0ba99", "#f59153", "#f57322"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="absolute w-[240] h-[240] rounded-full"
          />
        </Animated.View>
        <View className="w-[65] h-[65] rounded-full bg-black items-center justify-center mt-[50] mr-[60]">
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={24}
            color="white"
          />
          <Text className="text-[#FBF6EE] font-semibold text-[20px]">1</Text>
        </View>
        <Text className="text-black font-semibold text-[24px] mt-4 mr-[55]">
          Ms.Bin
        </Text>
      </View>

      {/* //Mr.EcoStore */}
      <View className="border-2 mr-[190] items-end mt-[50] ">
        <Animated.View className="mr-[200]" style={animatedCircleStyle}>
          <LinearGradient
            colors={["#d4e4ff", "#dcd4ff", "#f2d4ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="absolute w-[240] h-[240] rounded-full"
          />
        </Animated.View>
        <View className="w-[65] h-[65] rounded-full bg-black items-center justify-center mt-[50] mr-[60]">
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={24}
            color="white"
          />
          <Text className="text-[#FBF6EE] font-semibold text-[20px]">1</Text>
        </View>
        <Text className="text-black font-semibold text-[24px] mt-4 mr-[55]">
          Ms.Bin
        </Text>
      </View>
    </ScrollView>
  );
};

export default CircleItem;
