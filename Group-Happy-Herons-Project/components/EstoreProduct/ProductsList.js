import React, { useEffect, useState, View } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import { Product } from "./Product.js";
import { getProducts } from "./ProductsService.js";
import EcoStoreHeader from "./EcoStoreHeader.js";

export function ProductsList({ navigation }) {
  function renderProduct({ item: product }) {
    return (
     
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            productId: product.id,
          });
        }}
      />
     
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <SafeAreaView className=" bg-[#FBF6EE]">
    <EcoStoreHeader />
    
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#FBF6EE",
    paddingVertical: 8,
    marginHorizontal: 8,
   

  },
});
