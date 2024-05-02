
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import BinScreen from "./screens/BinScreen";
import ImgRecogScreen from "./screens/ImgRecogScreen";
import MapScreen from "./screens/MapScreen";
import EstoreScreen from "./screens/EstoreScreen";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ImgRecogIcon from "./components/ImgRecogIcon";
import "react-native-gesture-handler";
import OnboardingScreen from "./screens/OnboardingScreen";
import { useModel } from "./hooks/useModel";
import { View, Text } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import ImgRecogStackNavigator from "./navigation/ImgRecogStackNavigator";


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ headerShown: false }}
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
