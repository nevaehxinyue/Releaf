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
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={product.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button title="View Website" onPress={handlePress} />
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
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
