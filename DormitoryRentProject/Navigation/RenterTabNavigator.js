import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import OwnerDormitory from '../Screen/Owner/OwnerDormitory';
import PaymentOwner from '../Screen/Owner/PaymentOwner';
import MyRoomPage from "../Screen/Renter/MyRoomPage";
import DashboardPage from "../Screen/Renter/DashboardPage";

const Tab = createBottomTabNavigator();

const RenterTabNavigator = ({route}) => {
  const uid = route.params.uid
  console.log(route.params.uid)
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 90,
          backgroundColor: '#363C56',
        },
      })}
      >
      <Tab.Screen
        name="MY ROOM"
        component={MyRoomPage}
        initialParams={{uid: uid}}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="home" size={size} color={color} />
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
      <Tab.Screen
        name="DASHBOARD"
        component={DashboardPage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="dashboard" size={size} color={color} />
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
    </Tab.Navigator>
  )
}

export default RenterTabNavigator