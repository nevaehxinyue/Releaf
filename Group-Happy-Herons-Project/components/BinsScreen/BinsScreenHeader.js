import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const BinsScreenHeader = () => {
  return (
    <View className=" h-[70] w-full flex-row items-start justify-start ml-6 mt-4">
    <Entypo name="trash" size={30} color="black" />
    <Text className="left-2 text-2xl font-bold ">Mr.Policy</Text>
    <Text className="text-[17px] font-bold mt-2 ml-[140]">
    Green Bin rules
  </Text>
  </View>
  )
}

export default BinsScreenHeader