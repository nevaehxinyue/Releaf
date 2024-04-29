import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import LottieView from "lottie-react-native";
import { getWasteBinData } from "../api/fetchData.js";

function BinScreen() {
  const [selectedBin, setSelectedBin] = useState(null);
  const recyclingAnimationRef = useRef(null);
  const foodScrapsAnimationRef = useRef(null);
  const generalRubbishAnimationRef = useRef(null);

  const animations = {
    recycling: require("../assets/recycling.json"),
    foodScraps: require("../assets/food.json"),
    generalRubbish: require("../assets/general.json"),
  };

  const handleSelectBin = (bin) => {
    setSelectedBin(bin);
    const animationRef = {
      recycling: recyclingAnimationRef,
      foodScraps: foodScrapsAnimationRef,
      generalRubbish: generalRubbishAnimationRef,
    }[bin];
    animationRef.current?.play();
  };

  const [wasteItems, setWasteItems] = useState({
    recycling: { yes: [], no: [] },
    foodScraps: { yes: [], no: [] },
    generalRubbish: { yes: [], no: [] },
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const wasteData = await getWasteBinData();
        setWasteItems(wasteData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Optionally update state to show an error message in the UI
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <TouchableOpacity
          testID="recycling-button"
          onPress={() => handleSelectBin("recycling")}
        >
          <LottieView
            ref={recyclingAnimationRef}
            source={animations.recycling}
            loop={false}
            style={styles.lottieStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectBin("foodScraps")}>
          <LottieView
            ref={foodScrapsAnimationRef}
            source={animations.foodScraps}
            loop={false}
            style={styles.lottieStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectBin("generalRubbish")}>
          <LottieView
            ref={generalRubbishAnimationRef}
            source={animations.generalRubbish}
            loop={false}
            style={styles.lottieStyle}
          />
        </TouchableOpacity>
      </View>

      {selectedBin ? (
        <ScrollView style={styles.scrollViewStyle}>
          <View style={styles.wasteListContainer}>
            <View style={styles.wasteList}>
              <Text style={styles.listTitle}>Yes, please</Text>
              {wasteItems[selectedBin].yes.map((item, index) => (
                <Text key={index} style={styles.listItem}>
                  {item}
                </Text>
              ))}
            </View>
            <View style={styles.wasteList}>
              <Text style={styles.listTitleNoThanks}>No, thanks</Text>
              {wasteItems[selectedBin].no.map((item, index) => (
                <Text key={index} style={styles.listItem}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.placeholderText}>Please choose one</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Set background color to white
  },
  lottieStyle: {
    width: 140,
    height: 140,
  },
  imagesContainer: {
    flexDirection: "row",
    width: "100%", // Make sure it spans the full width
    justifyContent: "space-between",
    marginBottom: 20,
  },
  wasteListContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  wasteList: {
    alignItems: "left",
    width: "50%",
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  listTitleNoThanks: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 5,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    flexShrink: 1,
  },
  placeholderText: {
    fontSize: 20,
    marginTop: 50, // Adjust as needed
  },
});

export default BinScreen;
