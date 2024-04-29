import { View, Switch, Text } from "react-native";
import { useState } from "react";
export function NetworkSimulator({ onNetworkChange }) {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <View>
      <Text>Network Status: {isConnected ? "Online" : "Offline"}</Text>
      <Switch
        onValueChange={(value) => {
          setIsConnected(value);
          onNetworkChange(value);
        }}
        value={isConnected}
      />
    </View>
  );
}
