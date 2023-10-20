import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import OwnerStackNavigator from "./OwnerStackNavigator";
import OwnerDrawerNavigator from "./OwnerDrawerNavigator";

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <OwnerStackNavigator />
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
