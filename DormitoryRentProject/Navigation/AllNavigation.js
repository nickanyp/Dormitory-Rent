import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyRoomPage from "../Screen/Renter/MyRoomPage";

const RenterStack = createNativeStackNavigator;
const RenterTab = createBottomTabNavigator;

const AllNavigation = () => {
    return (
        <NavigationContainer>
            
        </NavigationContainer>
    )
}

export default AllNavigation