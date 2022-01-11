import React from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const IssuesDetails = () => {
  const route = useRoute();
  const titleIssue = route.params.title;
  const stateIssue = route.params.state;
  const bodyIssue = route.params.body;

  return (
    <View>
      <Text>{titleIssue}</Text>
      <Text>{stateIssue}</Text>
      <Text>{bodyIssue}</Text>
    </View>
  );
};

export default IssuesDetails;
