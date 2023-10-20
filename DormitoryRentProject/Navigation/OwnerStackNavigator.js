import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OwnerDrawerNavigation from './OwnerDrawerNavigator';

//Owner
import LoginOwner from "../Screen/Owner/LoginOwner";
import RegisterOwner from "../Screen/Owner/RegisterOwner";
import OwnerHome from "../Screen/Owner/OwnerHome";

const OwnerStack = createNativeStackNavigator();

const OwnerStackNavigation = () => {
  return (
    <OwnerStack.Navigator>
        <OwnerStack.Screen
        name="LoginOwner"
        component={LoginOwner}
        options={{
          title: "DÖrmitory Rent",
          headerShown: false
        }}
      />
      <OwnerStack.Screen
        name="RegisterOwner"
        component={RegisterOwner}
        options={{
          title: "",
          headerShown: false
        }}
      />
      <OwnerStack.Screen
        name="OwnerHome"
        component={OwnerDrawerNavigation}
        options={{
          title: "",
          headerShown: false
        }}
      />
    </OwnerStack.Navigator>
  )
}

export default OwnerStackNavigation