import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductsList } from "../components/EstoreProduct/ProductsList.js";
import { ProductDetails } from "../components/EstoreProduct/ProductDetails.js";

const Stack = createNativeStackNavigator();

function Estore() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={ProductsList}
        options={({ navigation }) => ({
          title: "Products",
          headerTitleStyle: styles.headerTitle,
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation }) => ({
          title: "Product details",
          headerTitleStyle: styles.headerTitle,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default Estore;
