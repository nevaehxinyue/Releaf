import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Font from "expo-font";
import { HomePageImages } from "../components/ImageData";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = Font.useFonts({
    "LobsterTwo-Italic": require("../assets/fonts/LobsterTwo-Italic.ttf"),
  });

  return (
    <SafeAreaView className="bg-[#FBF6EE] flex-1">
      {/* // For first image */}
      <View className="flex-1 top-6">
        <Image
          className="h-[130] w-[130] absolute rounded-r-2xl left-[-1]"
          source={HomePageImages["robot"]}
        />
        <TouchableOpacity
          className="w-[170] bg-[#C6B6FB] h-[33] p-2 rounded-3xl items-center justify-center left-24 top-[90]"
          onPress={() => navigation.navigate("Mr.Bin")}
        >
          <Text className=" text-xs font-semibold">
            Mr.Bin AI Bot
          </Text>
        </TouchableOpacity>
      </View>

      {/* // For second image */}
      <View className="flex-1 flex-row justify-end">
        <Image
          className="h-[130] w-[130] rounded-l-2xl absolute "
          source={HomePageImages["map"]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("RecycleMap")}
          className="w-[240] h-[33] bg-[#D9EEF2] p-2 rounded-3xl items-center justify-center top-[120] right-2"
        >
          <Text className="text-xs font-semibold">
            Clothing Recycle & Donation Map
          </Text>
        </TouchableOpacity>
      </View>

      {/* //Slogan */}
      <View className="flex-1 items-center justify-center top-2">
        <Text
          style={{ fontFamily: "LobsterTwo-Italic" }}
          className="text-[#233B29] font-extrabold text-2xl"
        >
          Together, we can explore{" "}
        </Text>
      </View>

      {/* // For third image */}
      <View className="flex-1 top-6">
        <Image
          className="h-[130] w-[130] absolute rounded-r-2xl left-[-1]"
          source={HomePageImages["policy"]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("RecyclePolicy")}
          className="w-[170] bg-[#C3F7D2] h-[33] p-2 rounded-3xl items-center justify-center left-24 top-[10]"
        >
          <Text className=" text-xs font-semibold">Latest Recycling Policy</Text>
        </TouchableOpacity>
      </View>

      {/* // For fourth image */}
      <View className="flex-1 flex-row justify-end">
        <Image
          className="h-[130] w-[130] rounded-l-2xl absolute "
          source={HomePageImages["products"]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Service")}
          className="w-[160] h-[33] bg-[#FAD0D6] p-2 rounded-3xl items-center justify-center top-[28] right-[100]"
        >
          <Text className="text-xs font-semibold">Eco-friendly Products</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
