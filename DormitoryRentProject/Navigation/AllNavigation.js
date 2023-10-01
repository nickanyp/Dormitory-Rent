import React from "react";
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import Dormitory from "../component/dormitory";
import MyRoomPage from "../Screen/Renter/MyRoomPage";
import RenterDashPage from "../Screen/Renter/DashboardPage"

const RenterTab = createBottomTabNavigator();
// const MainRenter = createDrawerNavigator();

function RenterTabNavigator(){
    return(
        <RenterTab.Navigator initialRouteName="tab" screenOptions={{tabBarStyle: {height:100}}}>
            <RenterTab.Screen name="My room" component={MyRoomPage}
            options={{tabBarIcon:()=>{return <FontAwesome5 name="door-open" size={26} color="black" />}, tabBarActiveTintColor: "blue"}}/>
            <RenterTab.Screen name="Dashboard" component={RenterDashPage}
            options={{tabBarIcon:()=>{return <MaterialIcons name="dashboard" size={24} color="black" />}, tabBarActiveTintColor: "blue"}}/>
        </RenterTab.Navigator>
    )
}

// function MainRenterNavigator(){

// }


const AllNavigation = () => {
    return (
        <NavigationContainer>
            <RenterTabNavigator/>
        </NavigationContainer>
    )
}

export default AllNavigation