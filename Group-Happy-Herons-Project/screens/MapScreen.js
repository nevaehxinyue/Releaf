import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

const MapScreen = () => {
  return (
    <SafeAreaView>
      <MapView
        className="w-full h-[500px]"
        provider={PROVIDER_GOOGLE}
      ></MapView>
    </SafeAreaView>
  );
};

export default MapScreen;
