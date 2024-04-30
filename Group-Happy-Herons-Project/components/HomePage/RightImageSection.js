import React from 'react';

import { View, Text, Image } from 'react-native';
import { HomePageImages } from '../ImageData';

function RightImageSection({bgColor, title, imageName, width, topPosition, rightPosition, onPress}) {
    const imageSource = HomePageImages[imageName]
    return (
        <View className="flex-1 flex-row justify-end">
        <Image
          className="h-[130] w-[130] rounded-l-2xl absolute "
          source={imageSource}
        />
        <View className={`w-[${width}] h-[33] p-2 rounded-3xl items-center justify-center]`} style={{backgroundColor: bgColor, top: topPosition, right: rightPosition}}>
        <Text className="text-xs font-semibold" onPress={onPress}> {title}</Text>
        </View>     
      </View>
    );
}

export default RightImageSection;