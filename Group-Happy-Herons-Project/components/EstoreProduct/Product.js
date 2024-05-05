import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export function Product({ name, image, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      testID="product-button"
    >
      <Image style={styles.thumb} source={image} testID="product-image" />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f3f0",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    resizeMode:'cover',
    width:'90%',
    marginLeft: 20,
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 240,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    resizeMode: 'cover'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
