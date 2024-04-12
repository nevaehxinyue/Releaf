import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="font-semibold text-blue-500 text-[30px]">Let's get started!</Text>
    </SafeAreaView>
  );
}

