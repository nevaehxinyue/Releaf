import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EcoStoreHeader = () => {
  return (
    <View className=" h-[70] w-full flex-row items-start justify-start ml-4 mt-4">
<MaterialCommunityIcons name="cart-heart" size={30} color="black" />
    <Text className="left-2 text-2xl font-bold ">Mr.EcoStore</Text>
    <Text className="text-[17px] font-bold mt-2 ml-[120]">
    Green Goods
  </Text>
  </View>
  )
}

export default EcoStoreHeader