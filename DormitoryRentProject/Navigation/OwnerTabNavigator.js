import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OwnerDormitory from '../Screen/Owner/OwnerDormitory';
import PaymentOwner from '../Screen/Owner/PaymentOwner';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const OwnerTabNavigator = () => {
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
        name="DORMITORY"
        component={OwnerDormitory}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="heart" size={size} color={color} />
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
        component={PaymentOwner}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="bank" size={size} color={color} />
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