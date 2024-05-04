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
      <View className="flex-1 top-10">
        <Image
          className="h-[140] w-[150] absolute rounded-r-2xl left-[-1]"
          source={HomePageImages["robot"]}
        />
        <TouchableOpacity
          className="w-[160] bg-[#C6B6FB] h-[35] p-2 rounded-3xl items-center justify-center left-24 top-[90]"
          onPress={() => navigation.navigate("Mr.Bin")}
        >
          <Text className=" text-[18px] font-bold">
            Ms.Bin
          </Text>
        </TouchableOpacity>
      </View>

      {/* // For second image */}
      <View className="flex-1 flex-row justify-end">
        <Image
          className="h-[140] w-[150] rounded-l-2xl absolute "
          source={HomePageImages["map"]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("RecycleMap")}
          className="w-[160] h-[35] bg-[#D9EEF2] p-2 rounded-3xl items-center justify-center top-[120] right-[80]"
        >
          <Text className="text-[18px] font-bold">
            Mr.Map
          </Text>
        </TouchableOpacity>
      </View>

      {/* //Slogan */}
      <View className="flex-1 items-center justify-center top-2">
        <Text
          style={{ fontFamily: "LobsterTwo-Italic" }}
          className="text-[#233B29] font-extrabold text-2xl"
        >
          Here We Go{" "}
        </Text>
      </View>

      {/* // For third image */}
      <View className="flex-1 top-2">
        <Image
          className="h-[140] w-[150] absolute rounded-r-2xl left-[-1]"
          source={HomePageImages["policy"]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("RecyclePolicy")}
          className="w-[160] bg-[#C3F7D2] h-[35] p-2 rounded-3xl items-center justify-center left-24 top-[14]"
        >
          <Text className="text-[18px] font-bold">Ms.Policy</Text>
        </TouchableOpacity>
      </View>

      {/* // For fourth image */}
      <View className="flex-1 flex-row justify-end">
        <Image
          className="h-[140] w-[150] rounded-l-2xl absolute "
          source={HomePageImages["products"]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Service")}
          className="w-[160] h-[35] bg-[#FAD0D6] p-2 rounded-3xl items-center justify-center top-[28] right-[100]"
        >
          <Text className="text-[18px] font-bold">Mr.EcoStore</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
