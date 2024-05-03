import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { NetworkSimulator } from "./NetworkSimulator";

function Header({ onNetworkChange }) {
  const [fontsLoaded] = Font.useFonts({
    "LobsterTwo-Italic": require("../../assets/fonts/LobsterTwo-Italic.ttf"),
  });

  return (
    <View className="flex-1 bg-[#FBF6EE] justify-between">
      <View className='flex-1 flex-row items-center justify-between'>
        <View className="flex-row items-start justify-start p-4 ">
          <MaterialCommunityIcons
            name="robot-happy-outline"
            size={32}
            color="black"
          />
          <Text className="left-2 text-2xl font-bold ">Mr.Bin</Text>
        </View>
        <View className="right-2">
          <NetworkSimulator onNetworkChange={onNetworkChange} />
        </View>
      </View>
      {/* style={{ fontFamily: "LobsterTwo-Italic" }} */}
      <View className="w-[400] h-[50] ml-[14] justify-center items-center">
      <Text className="text-[22px] font-bold p-4 text-[#233B29]" >
      Snap Your Item
      </Text>
      </View>

    </View>
  );
}

export default Header;
