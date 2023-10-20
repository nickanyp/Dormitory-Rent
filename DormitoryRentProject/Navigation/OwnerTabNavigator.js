import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OwnerDormitory from '../Screen/Owner/OwnerDormitory';
import PaymentOwner1 from '../Screen/Owner/PaymentOwner1';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const OwnerTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 90,
          backgroundColor: '#363C56',
        }
      })}
      >
      <Tab.Screen
        name="DORMITORY"
        component={OwnerDormitory}
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
      <Tab.Screen
        name="PAYMENT"
        component={PaymentOwner1}
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
    </Tab.Navigator>
  )
}

export default OwnerTabNavigator