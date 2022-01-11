import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import IssuesDetails from "../screens/IssuesDetails";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="IssuesDetails" component={IssuesDetails} />
    </Stack.Navigator>
  );
};

export default Navigator;
