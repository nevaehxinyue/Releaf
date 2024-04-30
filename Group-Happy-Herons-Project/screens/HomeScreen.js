import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  useWindowDimensions,
} from "react-native";
import React from "react";
import LeftImageSection from "../components/HomePage/LeftImageSection";
import RightImageSection from "../components/HomePage/RightImageSection";
import * as Font from "expo-font";

const HomeScreen = ({navigation}) => {
  const { width } = useWindowDimensions();
  const [fontsLoaded] = Font.useFonts({
    "LobsterTwo-Italic": require("../assets/fonts/LobsterTwo-Italic.ttf"),
  });

  return (
    <SafeAreaView className="bg-[#FBF6EE] flex-1">
      {/* // For first image */}
      <LeftImageSection
        title=" Recycling Robot Assistant"
        bgColor="#C6B6FB"
        imageName="robot"
        width="180px"
        topPosition="24"
        onPress={() => navigation.navigate('Chuck it in the bin') }
      />

      {/* // For second image */}
      <RightImageSection
        title="Clothing Recycle & Donation Map"
        bgColor="#D9EEF2"
        width="230"
        imageName="map"
        topPosition={120}
        rightPosition={6}
        onPress={() => navigation.navigate('RecycleMap')}
      />

      <View className="flex-1 items-center justify-center top-2">
        <Text style={{ fontFamily: "LobsterTwo-Italic" }} className="text-[#233B29] font-extrabold text-2xl" >Together, we can explore </Text>
      </View>

      {/* // For third image */}
      <LeftImageSection
        bgColor="#C3F7D2"
        title="Recycling Policy"
        imageName="policy"
        width="150"
        onPress={() => navigation.navigate('RecyclePolicy')}
      />

      {/* // For fourth image */}
      <RightImageSection
        title="Eco-friendly Products"
        bgColor="#FAD0D6"
        width="190px"
        imageName="products"
        topPosition={32}
        rightPosition={100}
        onPress={() => navigation.navigate('Service')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
