import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  locationsOfClothingBins,
  locationsOfDonations,
} from "../api/markerLocations";
import { Feather } from "@expo/vector-icons";
import MapScreenHeader from "../components/MapScreen/MapScreenHeader"
import { MaterialCommunityIcons } from '@expo/vector-icons';


const MapScreen = () => {
  // default region
  const [region, setRegion] = useState({
    latitude: -36.856331419193694,
    latitudeDelta: 0.5496386844501089,
    longitude: 174.7978861257434,
    longitudeDelta: 0.5907618999481201,
  });

  // log geoinformation of the map
  const onRegionChange = (newRegion) => {
    // console.log(newRegion);
    setRegion(newRegion);
  };

  // display markers for clothing bins
  const showingLocationsOfClothingBins = () => {
    return locationsOfClothingBins.map((item) => {
      return (
        <Marker
          key={item.id}
          coordinate={item.location}
          title={item.title}
          description={item.description}
          testData={`${item.id}`}
        />
      );
    });
  };
  // display markers for charity donations
  const showLocationsOfDonations = () => {
    return locationsOfDonations.map((item) => {
      return (
        <Marker
          key={item.id}
          coordinate={item.location}
          title={item.title}
          description={item.description}
          testData={`${item.id}`}
        />
      );
    });
  };

  // toggle between clothing bins and charity donations
  const [selectedOption, setSelectedOption] = useState("ClothingBins");

  const toggleOption = () => {
    setSelectedOption(
      selectedOption === "ClothingBins" ? "Donations" : "ClothingBins"
    );
  };

  const showLocations = () => {
    return selectedOption === "ClothingBins"
      ? showingLocationsOfClothingBins()
      : showLocationsOfDonations();
  };

  return (
    <SafeAreaView className="flex-1 mt-5 bg-[#FBF6EE] items-center">
      {/* //Header */}
      <MapScreenHeader />

       {/* toggle button */}
       <View className="flex-row items-center justify-center mt-4 mb-8 rounded-lg shadow-xl">
        <TouchableOpacity
          onPress={toggleOption}
          className={`rounded-3xl px-2 py-4 w-[190px] items-center justify-center ${
            selectedOption === "ClothingBins" ? "bg-[#233B29]" : ""
          }`}
        >
          <Text
            className={`font-bold text-[16px] ${
              selectedOption === "ClothingBins" ? "text-[#f5f3f0]" : ""
            }`}
          >
            Clothing Bins
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleOption}
          className={`rounded-3xl px-2 py-4 w-[190px] items-center justify-center ${
            selectedOption === "ClothingBins" ? "" : "bg-[#233B29]"
          }`}
        >
          <Text
            className={`font-bold text-[16px] ${
              selectedOption === "ClothingBins" ? "" : "text-[#f5f3f0]"
            }`}
          >
            Charity Donations
          </Text>
        </TouchableOpacity>
      </View>


      
      {/* map display */}
      <View className="border-2 border-gray-300 w-[380] h-[450] rounded-3xl overflow-hidden shadow-lg">
      <MapView
        className="w-full h-full"
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={onRegionChange}
      >
        {/* {showingLocationsOfClothingBins()}
        {showLocationsOfDonations()} */}
        {showLocations()}
      </MapView>
      </View>

       {/* notes for the user */}
       <View className="items-start justify-center space-y-2 mb-4 mt-4 mr-14">
        <TouchableOpacity className="flex-row items-center justify-center space-x-2">
        <MaterialCommunityIcons name="map-marker-check-outline" size={22} color="black" />
          <Text className="font-semibold text-[#233B29]">
            Clothing Bins: run by private businesses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-center space-x-2">
        <MaterialCommunityIcons name="map-marker-check-outline" size={22} color="black" />
          <Text className="font-semibold text-[#233B29]">
            Charity Donations: run by charitable trusts
          </Text>
        </TouchableOpacity>
      </View>
     

      

     
    </SafeAreaView>
  );
};

export default MapScreen;
