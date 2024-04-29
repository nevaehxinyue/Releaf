import { View, ActivityIndicator, StyleSheet } from "react-native";

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
}
export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // This ensures the overlay covers the entire screen
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Semi-transparent background
    zIndex: 100, // Make sure this zIndex is greater than that of other components
  },
});
