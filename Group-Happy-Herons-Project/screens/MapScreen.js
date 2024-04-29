import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";


// markers for clothing bins
let locationsOfClothingBins = [
  {
    title: "Four Square Torbay Clothing Bin",
    location: {
      latitude: -36.69473414226194,
      latitudeDelta: 0.0005376657853233269,
      longitude: 174.750632327086,
      longitudeDelta: 0.0005766714823494112,
    },
    description: "985B Beach Road, Torbay, Auckland 0630",
  },
  {
    title: "Northcross Clothing Bin",
    location: {
      latitude: -36.70950981648601,
      latitudeDelta: 0.00026878309644473575,
      longitude: 174.7280821357895,
      longitudeDelta: 0.00028833760256929963,
    },
    description: "855 East Coast Road, Northcross, Auckland 0630",
  },
  {
    title: "Westfield Albany Clothing Bin",
    location: {
      latitude: -36.72906971273598,
      latitudeDelta: 0.0002687146624609227,
      longitude: 174.7066108788614,
      longitudeDelta: 0.00028833760262614305,
    },
    description: "219 Don McKinnon Drive, Albany, Auckland 0632",
  },
  {
    title: "Wairu Park Clothing Bin",
    location: {
      latitude: -36.768616,
      latitudeDelta: 0.0005360219231675956,
      longitude: 174.737109,
      longitudeDelta: 0.0005766711124692847,
    },
    description: "Wairau Valley, Auckland 0627",
  },
  {
    title: "King Cnut Clothing Bin",
    location: {
      latitude: -36.863280710024,
      latitudeDelta: 0.0010729770240232028,
      longitude: 174.78087266443873,
      longitudeDelta: 0.0011533504103624637,
    },
    description: "Suite 3/532 Parnell Road, Parnell, Auckland 1052",
  },
  {
    title: "St Helier Clothing Bin",
    location: {
      latitude: -36.870599542732656,
      latitudeDelta: 0.0010728743324648349,
      longitude: 174.846074067792,
      longitudeDelta: 0.0011533505042962133,
    },
    description: "St Heliers, Auckland 1071",
  },
  {
    title: "All Seasons Recycled Clothing Bin",
    location: {
      latitude: -36.92385685671638,
      latitudeDelta: 0.0005360594507592964,
      longitude: 174.79206456120705,
      longitudeDelta: 0.0005766714823778329,
    },
    description: "60 Victoria Street, Onehunga, Auckland 1061",
  },
  {
    title: "Botany Clothing Bin",
    location: {
      latitude: -36.92914524852632,
      latitudeDelta: 0.0005360219231675956,
      longitude: 174.91155980177493,
      longitudeDelta: 0.0005766711124692847,
    },
    description: "475 Ti Rakau Drive, Huntington Park, Auckland 2013",
  },
  {
    title: "Papakura Recycled Clothing Bin",
    location: {
      latitude: -37.063093220944894,
      latitudeDelta: 0.0005360219231675956,
      longitude: 174.9415558376872,
      longitudeDelta: 0.0005766711124692847,
    },
    description: "20a East Street, Papakura, Auckland 2110",
  },
];
// markers for charity donations
let locationsOfDonations = [
  {
    title: "Auckland City Mission Good Stuff",
    location: {
      latitude: -36.861655672995456,
      latitudeDelta: 0.0005376657853233269,
      longitude: 174.7615004552574,
      longitudeDelta: 0.0005766714823494112,
    },
    description: "127 Symonds Street, Eden Terrace, Auckland 1010",
  },
  {
    title: "Salvation Army Mt Eden Family Store",
    location: {
      latitude: -36.87520551411327,
      latitudeDelta: 0.0002682025535136745,
      longitude: 174.75151229436942,
      longitudeDelta: 0.0002883376025408779,
    },
    description: "200 Dominion Road, Mount Eden, Auckland 1024",
  },
  {
    title: "Salvation Army Glen Innes Family Store",
    location: {
      latitude: -36.87793221663127,
      latitudeDelta: 0.0005363825157260749,
      longitude: 174.85579835679958,
      longitudeDelta: 0.0005766714823494112,
    },
    description: "49 Mayfair Place, Glen Innes, Auckland 1072",
  },
  {
    title: "Salvation Army New Lynn Family Store",
    location: {
      latitude: -36.91170239210409,
      latitudeDelta: 0.00026807417752650053,
      longitude: 174.67645597338264,
      longitudeDelta: 0.0002883376024840345,
    },
    description: "8/2 Margan Avenue, New Lynn, Auckland 0600",
  },
  {
    title: "Salvation Army Botany Family Store",
    location: {
      latitude: -36.92381594744566,
      latitudeDelta: 0.00026803152211130055,
      longitude: 174.9125628763186,
      longitudeDelta: 0.0002883376025124562,
    },
    description: "287 Botany Road, Golflands, Auckland 2013",
  },
  {
    title: "Salvation Army Glenfield Family Store",
    location: {
      latitude: -36.78115200918815,
      latitudeDelta: 0.0002685324502138542,
      longitude: 174.72168938551907,
      longitudeDelta: 0.0002883376025408779,
    },
    description: "407 Glenfield Road, Glenfield, Auckland 0629",
  },
  {
    title: "Salvation Army Onehunga Family Store",
    location: {
      latitude: -36.91888692150462,
      latitudeDelta: 0.0005360950239889917,
      longitude: 174.78450179291042,
      longitudeDelta: 0.0005766714823778329,
    },
    description: "310 Onehunga Mall, Onehunga, Auckland 1061",
  },
  {
    title: "Salvation Army Papatoetoe Family Store",
    location: {
      latitude: -36.97259225411171,
      latitudeDelta: 0.0002678601955850013,
      longitude: 174.86378392282026,
      longitudeDelta: 0.0002883376025408779,
    },
    description: "308 Great South Road, Papatoetoe, Auckland 2025",
  },
];

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
    return locationsOfClothingBins.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };
  // display markers for charity donations
  const showLocationsOfDonations = () => {
    return locationsOfDonations.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
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
