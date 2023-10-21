import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AllStackNavigator from './AllStackNavigator';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <AllStackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "transparent",
    textAlign: "center",
  },
});
export default MainNavigation;
