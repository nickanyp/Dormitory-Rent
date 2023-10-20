import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Renter
import Dormitory from "../component/DormitoryFooter";
import MyRoomPage from "../Screen/Renter/MyRoomPage";
import RenterDashPage from "../Screen/Renter/DashboardPage";
import LoginRenter from "../Screen/Renter/LoginRenter";
import ChoosePage from "../MainScreen/ChoosePage";
import PaymentRenter from "../Screen/Renter/PaymentRenter";
import HistoryRenter from "../Screen/Renter/HistoryRenter";
import DashboardPage from "../Screen/Renter/DashboardPage"

const RenterStack = createNativeStackNavigator();

const RenterStackNavigator = () => {
  return (
    <RenterStack.Navigator>
      <RenterStack.Screen
        name="LoginRenter"
        component={LoginRenter}
        options={{
          title: "DÖrmitory Rent",
          headerShown: false,
        }}
      />
      <RenterStack.Screen
        name="MyRoomPage"
        component={MyRoomPage}
        options={{
          title: "DÖrmitory Rent",
          headerShown: false
        }}
      />
      <RenterStack.Screen
        name="PaymentRenter"
        component={PaymentRenter}
        options={{
          title: "DÖrmitory Rent",
        }}
      />
      <RenterStack.Screen
        name="HistoryRenter"
        component={HistoryRenter}
        options={{
          title: "DÖrmitory Rent",
        }}
      />
    </RenterStack.Navigator>
  )
}

export default RenterStackNavigator