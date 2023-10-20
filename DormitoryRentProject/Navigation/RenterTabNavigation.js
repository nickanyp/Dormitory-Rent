import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// Renter
import Dormitory from "../component/DormitoryFooter";
import MyRoomPage from "../Screen/Renter/MyRoomPage";
import RenterDashPage from "../Screen/Renter/DashboardPage";
import LoginRenter from "../Screen/Renter/LoginRenter";
import ChoosePage from "../MainScreen/ChoosePage";
import PaymentRenter from "../Screen/Renter/PaymentRenter";
import HistoryRenter from "../Screen/Renter/HistoryRenter";
import DashboardPage from "../Screen/Renter/DashboardPage"

const RenterTab = createBottomTabNavigator();

const RenterTabNavigation = () => {
  return (
    <RenterTab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 90,
          backgroundColor: '#363C56',
        }
      })}
      >
      <RenterTab.Screen
        name="MY ROOM"
        component={MyRoomPage}
        options={{
          tabBarIcon: ({}) => {
            return <FontAwesome name="home" size={30} color="white" />
          },
          tabBarActiveTintColor: '#FF9699',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: 'bold'
          },
          headerShown: false,
        }}
      />
      <RenterTab.Screen
        name="DASHBOARD"
        component={DashboardPage}
        options={{
          tabBarIcon: ({}) => {
            return <MaterialIcons name="dashboard" size={30} color="white" />
          },
          tabBarActiveTintColor: '#FF9699',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: 'bold'
          },
          headerShown: false,
        }}
      />
    </RenterTab.Navigator>
  )
}

export default RenterTabNavigation