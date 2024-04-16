import { Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <TouchableOpacity className="flex-1 items-center justify-center">
      <View className="px-5 py-5 rounded-full bg-slate-800">
      <Text className="font-bold text-[20px] text-white">Start</Text>
      </View>
    </TouchableOpacity>
  );
}

