import { View, Switch, Text, StyleSheet } from "react-native";
import { useState } from "react";


export function NetworkSimulator({ onNetworkChange }) {
  const [isConnected, setIsConnected] = useState(true);


  return (
    <View className="flex-row items-center justify-center gap-1" >
      <Switch
        trackColor={{true: '#233B29',false: '#f8f7ff'}}
        thumbColor={isConnected ? '#fdfffc' : '#fdfffc'}
        onValueChange={(value) => {
          setIsConnected(value);
          onNetworkChange(value);
        }}
        value={isConnected}
        style={styles.switch}
      />
      <Text className="font-bold text-lg ">{isConnected ? "Online" : "Offline"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }]
  }
  
})
