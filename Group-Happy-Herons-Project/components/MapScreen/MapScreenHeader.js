import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const MapScreenHeader = () => {
  return (
    
      <View className=" h-[70] flex-row items-start justify-start mr-[150]">
        <FontAwesome5 name="map-marked-alt" size={28} color="black" />
        <Text className="left-2 text-[24px] font-bold ">Clothing Recycling</Text>

      </View>
   
  );
};

export default MapScreenHeader;
