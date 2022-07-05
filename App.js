import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./src/BottomTabNavigator.js";

function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;
