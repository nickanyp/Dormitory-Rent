import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OwnerDrawerNavigation from './OwnerDrawerNavigator';
import DormitoryHeader from '../component/DormitoryHeader';

//Owner
import LoginOwner from "../Screen/Owner/LoginOwner";
import RegisterOwner from "../Screen/Owner/RegisterOwner";
import OwnerHome from "../Screen/Owner/OwnerHome";
import EditProfileOwner from "../Screen/Owner/EditProfileOwner";

const Stack = createNativeStackNavigator();

const OwnerStackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="LoginOwner"
        component={LoginOwner}
        options={{
          title: "DÖrmitory Rent",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="RegisterOwner"
        component={RegisterOwner}
        options={{
          title: "",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="OwnerHome"
        component={OwnerDrawerNavigation}
        options={{
          title: "",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileOwner}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>
        }}
      />
    </Stack.Navigator>
  )
}

export default OwnerStackNavigation