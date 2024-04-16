import { Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <TouchableOpacity className="flex-1 items-center justify-center">
      <View className="bg-slate-800 rounded-full px-5 py-5">
      <Text className="font-bold text-white text-[20px]">Fresh Start</Text>
      </View>
    </TouchableOpacity>
  );
}



