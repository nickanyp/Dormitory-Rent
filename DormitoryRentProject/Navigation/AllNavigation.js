import React from "react";
import "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import Dormitory from "../component/DormitoryFooter";
import MyRoomPage from "../Screen/Renter/MyRoomPage";
import RenterDashPage from "../Screen/Renter/DashboardPage";
import LoginRenter from "../Screen/Renter/LoginRenter";
import ChoosePage from "../MainScreen/ChoosePage";
import PaymentRenter from "../Screen/Renter/PaymentRenter";
import HistoryRenter from "../Screen/Renter/HistoryRenter";

const RenterTab = createBottomTabNavigator();
const RenterStack = createNativeStackNavigator();
// const MainRenter = createDrawerNavigator();


function RenterTabNavigator() {
  return (
    <RenterTab.Navigator
      initialRouteName="tab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 100, backgroundColor: "#363C56" },
      }}>
      <RenterTab.Screen
        name="LoginRenter"
        component={LoginRenter}
        options={{
          title: "DÖrmitory Rent",
          headerStyle: {headerTransparent: true},
          headerShown: false,
          tabBarStyle: {display: 'none'}
        }}/>
      <RenterTab.Screen
        name="MyroomPage"
        component={RenterStackNavigator}
        options={{
          title: "MY ROOM",
          tabBarIcon: () => {
            return <FontAwesome5 name="door-open" size={26} color="#fff" />;
          },
          tabBarActiveTintColor: "#fff",
        }}/>
      <RenterTab.Screen
        name="RenterDashPage"
        component={RenterDashPage}
        options={{
          title: "DASHBOARD",
          tabBarIcon: () => {
            return <MaterialIcons name="dashboard" size={24} color="#fff" />;
          },
          tabBarActiveTintColor: "#fff",
        }}/>
    </RenterTab.Navigator>
  );
}

function RenterStackNavigator() {
  return (
    <RenterStack.Navigator>
      <RenterStack.Screen
        name="MyRoomPage"
        component={MyRoomPage}
        options={{
          title: "DÖrmitory Rent",
          headerStyle: {headerTransparent: true},
        }}
      />
      <RenterStack.Screen
        name="PaymentRenter"
        component={PaymentRenter}
        options={{
          title: "DÖrmitory Rent",
          headerStyle: {headerTransparent: true},
        }}
      />
      <RenterStack.Screen
        name="HistoryRenter"
        component={HistoryRenter}
        options={{
          title: "DÖrmitory Rent",
          headerStyle: {headerTransparent: true},
        }}
      />
    </RenterStack.Navigator>
  );
}

const AllNavigation = () => {
  return (
    <NavigationContainer>
      <RenterTabNavigator />
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
export default AllNavigation;
