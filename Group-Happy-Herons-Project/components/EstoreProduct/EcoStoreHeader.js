import { View, Text, Platform } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EcoStoreHeader = () => {
  return (
    <View className=" h-[70] w-full flex-row items-start justify-start ml-4 mt-4" style={{paddingTop: Platform.OS === 'ios' ? 0 : 40}}>
      <MaterialCommunityIcons name="cart-heart" size={30} color="black" />
      <Text className="left-2 text-[22px] font-bold ">Green Goods</Text>
    </View>
  );
};

export default EcoStoreHeader;
