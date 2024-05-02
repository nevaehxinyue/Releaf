import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";

function Header(props) {
  const [fontsLoaded] = Font.useFonts({
    "LobsterTwo-Italic": require("../../assets/fonts/LobsterTwo-Italic.ttf"),
  });

  return (
    <View className="flex-1 top-12 bg-[#FBF6EE]">
      <View className="flex-row items-start justify-start p-4 ">
        <MaterialCommunityIcons
          name="robot-happy-outline"
          size={32}
          color="black"
        />
        <Text className="left-2 text-2xl font-bold ">Mr.Bin</Text>
      </View>

      <Text className="text-lg p-4" style={{ fontFamily: "LobsterTwo-Italic" }}>
        Hi there! Just upload a picture of your item. I will happily show you
        the best way to recycle or dispose of it.
      </Text>
    </View>
  );
}

export default Header;
