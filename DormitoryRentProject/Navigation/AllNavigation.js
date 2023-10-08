import React from "react";
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import Dormitory from "../component/Dormitory";
import MyRoomPage from "../Screen/Renter/MyRoomPage";
import RenterDashPage from "../Screen/Renter/DashboardPage"

const RenterTab = createBottomTabNavigator();
// const MainRenter = createDrawerNavigator();

function RenterTabNavigator(){
    return(
        <RenterTab.Navigator initialRouteName="tab" screenOptions={{headerShown:false, tabBarStyle: {height:100, backgroundColor: '#363C56'}}}>
            <RenterTab.Screen name="MyroomPage" component={MyRoomPage}
            options={{title:"MY ROOM", tabBarIcon:()=>{return <FontAwesome5 name="door-open" size={26} color="#fff" />}, tabBarActiveTintColor: "#fff"}}/>
            <RenterTab.Screen name="RenterDashPage" component={RenterDashPage}
            options={{title:"DASHBOARD", tabBarIcon:()=>{return <MaterialIcons name="dashboard" size={24} color="#fff" />}, tabBarActiveTintColor: "#fff"}}/>
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