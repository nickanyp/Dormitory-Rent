import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//Owner
import LoginOwner from "../Screen/Owner/LoginOwner";
import RegisterOwner from "../Screen/Owner/RegisterOwner";
import OwnerHome from "../Screen/Owner/OwnerHome";
import ProfileOwner from '../Screen/Owner/ProfileOwner';
import EditProfileOwner from "../Screen/Owner/EditProfileOwner";

import OwnerStackNavigation from './OwnerStackNavigator';
import DormitoryHeader from '../component/DormitoryHeader';
import CustomDrawer from '../component/CustomDrawer';

const Drawer = createDrawerNavigator();

const OwnerDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({route}) => ({
        drawerStyle: {
          backgroundColor: '#EEEEEE',
        },
        headerStyle: {
          height: 120
        }
      })}>
      <Drawer.Screen
        name="Home"
        component={OwnerHome}
        options={{
          title: "หน้าหลัก",
          drawerIcon: () => (
            <FontAwesome5 name="home" size={24} color="#363C56" />
         ),
          headerTitle: props => <DormitoryHeader {...props}/>,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileOwner}
        options={{
          title: "โปรไฟล์",
          drawerIcon: () => (
            <FontAwesome5 name="user" size={24} color="#363C56" />
          ),
          headerTitle: props => <DormitoryHeader {...props}/>,
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={OwnerStackNavigation}
        options={{
          drawerItemStyle: { height: 0 },
          headerShown: false
        }}
      />
    </Drawer.Navigator>
    
  )
}

export default OwnerDrawerNavigation