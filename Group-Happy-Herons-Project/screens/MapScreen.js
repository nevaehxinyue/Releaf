import React from "react";
import { useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";


const MapScreen = () => {

  const [region, setRegion] = useState({
    latitude: -36.856331419193694,
    latitudeDelta: 0.5496386844501089,
    longitude: 174.7978861257434,
    longitudeDelta: 0.5907618999481201,
  });

  const onRegionChange = (newRegion) => {
    // console.log(newRegion);
    setRegion(newRegion);
  };



  return (
    <SafeAreaView>
      <MapView
        className="w-full h-[500px]"
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={onRegionChange}
      ></MapView>
    </SafeAreaView>
  );
};

export default MapScreen;
