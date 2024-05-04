import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


function ImgRecogIcon({color, size}) {
    return (
        <View className="bg-[#233B29] rounded-full w-16 h-16 items-center justify-center">
            <MaterialCommunityIcons
            name="robot-happy-outline"
            size={32}
            color="#FBF6EE"
          />
        </View>
    );
}


export default ImgRecogIcon;