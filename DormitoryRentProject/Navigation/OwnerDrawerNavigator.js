import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

import OwnerHome from "../Screen/Owner/OwnerHome";
import ProfileOwner from '../Screen/Owner/ProfileOwner';

import DormitoryHeader from '../component/DormitoryHeader';
import CustomDrawer from '../component/CustomDrawer';

const Drawer = createDrawerNavigator();

const OwnerDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={() => ({
        drawerStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          height: 120,
        },
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
        }}
      />

    </Drawer.Navigator>
    
  )
}

export default OwnerDrawerNavigator