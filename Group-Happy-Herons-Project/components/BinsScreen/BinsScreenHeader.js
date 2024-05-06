import { View, Text, Platform } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

const BinsScreenHeader = () => {

  return (
    <View className=" h-[70px] w-full flex-row items-center justify-start ml-12" style={{ paddingTop: Platform.OS === 'ios' ? 0 : 40, marginLeft:Platform.OS === 'ios' ? 45 : 2}}>
   <FontAwesome6 name="trash" size={28} color="black" />
    <Text className="left-2 text-[22px] font-bold ">Recycling Tips</Text>
  </View>
  )
}

export default BinsScreenHeader