import React from "react";
import { View, StyleSheet } from "react-native";
import FlatListIssues from "../components/FlatListIssues";

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatListIssues />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
