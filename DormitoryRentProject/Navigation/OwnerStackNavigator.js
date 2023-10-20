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
import OwnerDormitory from '../Screen/Owner/OwnerDormitory';
import OwnerTabNavigator from './OwnerTabNavigator';
import PaymentOwner from '../Screen/Owner/PaymentOwner';
import InformPaymentOwner from '../Screen/Owner/InformPaymentOwner';
import StatusPaymentOwner from '../Screen/Owner/StatusPaymentOwner';

const Stack = createNativeStackNavigator();

const OwnerStackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={({route}) => ({
      headerStyle: {
        height: 120
      }
    })}>
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
      <Stack.Screen
        name="OwnerDormitory"
        component={OwnerTabNavigator}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
        }}
      />
      <Stack.Screen
        name="PaymentOwner"
        component={PaymentOwner}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="InformPayment"
        component={InformPaymentOwner}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
        }}
      />
      <Stack.Screen
        name="StatusPayment"
        component={StatusPaymentOwner}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
        }}
      />
    </Stack.Navigator>
  )
}

export default OwnerStackNavigation