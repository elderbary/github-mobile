import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
