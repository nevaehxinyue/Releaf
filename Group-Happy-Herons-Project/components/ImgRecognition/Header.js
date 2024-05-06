import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NetworkSimulator } from "./NetworkSimulator";

function Header({ onNetworkChange }) {

  return (
    <View className="flex-1 bg-[#FBF6EE] justify-between" style={{paddingTop: Platform.OS === 'ios' ? 0 : 50 }}>
      <View className='flex-1 flex-row items-center justify-between' >
        <View className="flex-row items-start justify-start p-4 ">
          <MaterialCommunityIcons
            name="robot-happy-outline"
            size={32}
            color="black"
          />
          <Text className="left-2 text-[22px] font-bold ">Trash Bin Decision</Text>
        </View>
        <View className="right-4">
          <NetworkSimulator onNetworkChange={onNetworkChange} />
        </View>
      </View>
      {/* style={{ fontFamily: "LobsterTwo-Italic" }} */}
      <View className="w-[400] ml-[14] justify-center items-center">
      <Text className="text-[22px] font-bold p-4" >
      Snap Your Item
      </Text>
      </View>

    </View>
  );
}

export default Header;
