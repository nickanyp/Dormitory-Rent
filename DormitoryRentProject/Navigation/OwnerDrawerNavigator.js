import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//Owner
import LoginOwner from "../Screen/Owner/LoginOwner";
import RegisterOwner from "../Screen/Owner/RegisterOwner";
import OwnerHome from "../Screen/Owner/OwnerHome";
import ProfileOwner from '../Screen/Owner/ProfileOwner';

import OwnerStackNavigation from './OwnerStackNavigator';

const OwnerDrawer = createDrawerNavigator();

const OwnerDrawerNavigation = () => {
  return (
    <OwnerDrawer.Navigator>
      <OwnerDrawer.Screen
        name="Home"
        component={OwnerHome}
        options={{
          title: "อนัญพร จอมคำ",
        }}
      />
      <OwnerDrawer.Screen
        name="Profile"
        component={ProfileOwner}
        options={{
          title: "แก้ไขโปรไฟล์",
          drawerIcon: () => (
            <Feather name="edit-2" size={24} color="black" />
         ),
        }}
      />
      <OwnerDrawer.Screen
        name="Logout"
        component={OwnerStackNavigation}
        options={{
          title: "ออกจากระบบ",
          drawerIcon: () => (
            <MaterialIcons name="logout" size={24} color="red" />
          ),
          drawerContentStyle: {
            flexDirection: "column-reverse",
          },
          headerShown: false
        }}
      />
    </OwnerDrawer.Navigator>
  )
}

export default OwnerDrawerNavigation