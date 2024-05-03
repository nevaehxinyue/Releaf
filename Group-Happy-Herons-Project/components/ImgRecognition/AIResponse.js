import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from '@expo/vector-icons';

const AIResponse = ({ isConnected, isPredicting, response, prediciton }) => {
    const [ resultShown, setResultShown] = useState(false);
    const responseTitile = response[0];
    const responseDetails = response[1]
  if (isPredicting)
    return (
      <ActivityIndicator size={"large"} color={"#233B29"} className="top-[6]" />
    );

  return (

    <View className="items-center justify-start rounded-lg border-[#C6B6FB] w-[250] h-[250]">  
      {isConnected ? (
        <View className="top-12"> 
          <View className="justify-center items-center">
            <Text className="text-[22px] font-bold">{responseTitile}</Text>
          </View>
          <Text>{}</Text>
           <Text className="text-[16px] top-2">{responseDetails}</Text>
        </View>
      ) : (
        <Text className="text-[22px] font-bold top-20">{prediciton}</Text>
      )}
    </View>
    // <FontAwesome6 name="trash" size={24} color={"#49d16b"} />

    
  );
};

export default AIResponse;
