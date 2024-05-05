import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

const BinsScreenHeader = () => {
    
  return (
    <View className=" h-[70] w-full flex-row items-center justify-start ml-6 ">
   <FontAwesome6 name="trash" size={28} color="black" />
    <Text className="left-2 text-2xl font-bold ">Recycling Tips</Text>
  </View>
  )
}

export default BinsScreenHeader