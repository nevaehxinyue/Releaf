import React from "react";
import { StyleSheet, Platform } from "react-native";
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
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation }) => ({
          presentation: Platform.OS === 'ios' ? 'modal' : 'card',
          title: "Product details",
          headerShown: false,
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
