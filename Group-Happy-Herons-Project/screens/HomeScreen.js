import { View, Text, ScrollView, SafeAreaView, TouchableWithoutFeedback } from "react-native";
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

import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = ({navigation}) => {
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
    <SafeAreaView className="bg-[#FBF6EE] flex-1">
     <ScrollView >
        <View className="bottom-14">
          {/* //Trash Bin Decision */}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Trash Bin Decision')}>
      <View className="mr-[70] items-end mt-20 ">
        <View className="mr-[200]">
          <LinearGradient
            colors={["#c2d9ff", "#b3a3f7", "#c672ed"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="absolute w-[240] h-[240] rounded-full"
          />
        </View>
        <View className="left-[10]">
          <View className="w-[65] h-[65] rounded-full bg-black items-center justify-center mt-[50] mr-[55]">
            <MaterialCommunityIcons
              name="robot-happy-outline"
              size={32}
              color="white"
            />
          </View>
        </View>
        <Text className="text-black font-semibold text-[20px] mt-4">
          Trash Bin Decision
        </Text>
      </View>
      </TouchableWithoutFeedback>

      {/* //Recyling Map */}
      <TouchableWithoutFeedback onPress={() => navigation.navigate('RecycleMap')}>
      <View className="mr-[190] items-end mt-[20] ">
        <Animated.View className="mr-[200]" style={animatedCircleStyle}>
          <LinearGradient
            colors={["#ceddf5", "#a2c4fa", "#4e80f5"]}
            className="absolute w-[240] h-[240] rounded-full"
          />
        </Animated.View>
        <View className="w-[65] h-[65] rounded-full bg-black items-center justify-center mt-[50] mr-[50]">
        <FontAwesome5 name="map-marked-alt" size={28} color="white" />
        </View>
        <Text className="text-black font-semibold text-[20px] mt-4 mr-[-16]">
          Clothing Recycling
        </Text>
      </View>
      </TouchableWithoutFeedback>

      {/* //Recyling Tips */}
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Recycling Tips')}>
      <View className="mr-[70] items-end mt-[20] ">
        <Animated.View className="mr-[200]" style={animatedCircleStyle}>
          {/* ["#f5b782", "#f5923b", "#fa5007"] */}
          <LinearGradient
            colors={["#ace6b9", "#6aa377", "#233b29"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="absolute w-[240] h-[240] rounded-full"
          />
        </Animated.View>
        <View className="w-[65] h-[65] rounded-full bg-black items-center justify-center mt-[50] mr-[50]">
        <FontAwesome6 name="trash" size={28} color="white" />
        </View>
        <Text className="text-black font-semibold text-[20px] mt-4">
          Recycling Tips
        </Text>
      </View>
    </TouchableWithoutFeedback>

      {/* //Eco Store */}
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Store')}>
      <View className="mr-[200] items-end mt-[10] ">
        <Animated.View  style={animatedCircleStyle} className="mr-[200]">
          <LinearGradient
            colors={["#f5b782", "#f5923b", "#fa5007"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="absolute w-[240] h-[240] rounded-full"
          />
        </Animated.View>
        <View className="w-[65] h-[65] rounded-full bg-black items-center justify-center mt-[50] mr-[50]">
        <MaterialCommunityIcons name="cart-heart" size={30} color="white" />
        </View>
    
        <Text className="text-black font-semibold text-[20px] mt-4 mr-[15]">
          Green Goods
        </Text>
      </View>
      </TouchableWithoutFeedback>

      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen