import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  Image,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

import { getProduct } from "./ProductsService.js";

export function ProductDetails({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  const handlePress = () => {
    Linking.openURL(product.url);
  };

  return (
    <SafeAreaView className="bg-[#FBF6EE] h-full">
      <ScrollView>
        <Image style={styles.image} source={product.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <TouchableOpacity onPress={handlePress} className="rounded-3xl items-center justify-center h-[45] bg-[#233B29]">
            <Text className="text-[20px] text-[#FBF6EE] font-semibold">View Website</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 20,
    marginTop: 8
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: "500",
    color: "#233B29",
    marginBottom: 40,
  },
});
