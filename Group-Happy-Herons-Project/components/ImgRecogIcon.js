import React from 'react';
import { View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';


function ImgRecogIcon({color, size}) {
    return (
        <View className="bg-[#233B29] rounded-full w-16 h-16 items-center justify-center">
            <FontAwesome6 name="recycle" size={size} color={color} />
        </View>
    );
}


export default ImgRecogIcon;