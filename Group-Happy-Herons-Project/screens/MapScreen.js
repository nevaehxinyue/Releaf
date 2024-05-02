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
    <SafeAreaView className="flex-1 mt-5">
      {/* toggle button */}
      <View className="flex-row items-center justify-center mt-8 mb-8 rounded-lg shadow-xl">
        <TouchableOpacity
          onPress={toggleOption}
          className={`rounded-lg px-2 py-4 w-[150px] items-center justify-center ${
            selectedOption === "ClothingBins" ? "bg-[#FBF6EE]" : ""
          }`}
        >
          <Text
            className={`font-bold ${
              selectedOption === "ClothingBins" ? "text-[#233B29]" : ""
            }`}
          >
            Clothing Bins
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleOption}
          className={`rounded-lg px-2 py-4 w-[150px] items-center justify-center ${
            selectedOption === "ClothingBins" ? "" : "bg-[#FBF6EE]"
          }`}
        >
          <Text
            className={`font-bold ${
              selectedOption === "ClothingBins" ? "" : "text-[#233B29]"
            }`}
          >
            Charity Donations
          </Text>
        </TouchableOpacity>
      </View>

      {/* map display */}
      <MapView
        className="w-full h-[500px]"
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={onRegionChange}
      >
        {/* {showingLocationsOfClothingBins()}
        {showLocationsOfDonations()} */}
        {showLocations()}
      </MapView>

      {/* notes for the user */}
      <View className="items-start justify-center space-y-2">
        <TouchableOpacity className="flex-row items-center justify-center space-x-2">
          <Feather name="info" size={24} color="black" />
          <Text className="font-semibold text-[#233B29]">
            Clothing Bins: run by private businesses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-center space-x-2">
          <Feather name="info" size={24} color="black" />
          <Text className="font-semibold text-[#233B29]">
            Charity Donations: run by charitable trusts
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
