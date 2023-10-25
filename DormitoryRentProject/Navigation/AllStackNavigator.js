import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OwnerDrawerNavigator from './OwnerDrawerNavigator';
import OwnerTabNavigator from './OwnerTabNavigator';
import RenterTabNavigator from './RenterTabNavigator';
import DormitoryHeader from '../component/DormitoryHeader';

//MainScreen
import FirstPage from '../MainScreen/FirstPage';

//Renter
import MyRoomPage from "../Screen/Renter/MyRoomPage";
import LoginRenter from "../Screen/Renter/LoginRenter";
import ChoosePage from "../MainScreen/ChoosePage";
import PaymentRenter from "../Screen/Renter/PaymentRenter";
import HistoryRenter from "../Screen/Renter/HistoryRenter";

//Owner
import LoginOwner from '../Screen/Owner/LoginOwner';
import RegisterOwner from '../Screen/Owner/RegisterOwner';
import EditProfileOwner from '../Screen/Owner/EditProfileOwner';
import PaymentOwner from '../Screen/Owner/PaymentOwner';
import InformPaymentOwner from '../Screen/Owner/InformPaymentOwner';
import StatusPaymentOwner from '../Screen/Owner/StatusPaymentOwner';
import DetailPaymentOwner from '../Screen/Owner/DetailPaymentOwner';
import DetailRoomSuite from '../Screen/Owner/DetailRoomSuite';
import DetailRoomGenAir from '../Screen/Owner/DetailRoomGenAir';
import DetailRoomGenFan from '../Screen/Owner/DetailRoomGenFan';
import DetailRoomOneAir from '../Screen/Owner/DetailRoomOneAir';
import DetailRoomOneFan from '../Screen/Owner/DetailRoomOneFan';

const Stack = createNativeStackNavigator();

const AllStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTransparent:true,
      headerStyle: { backgroundColor: 'white' }
    }}>

      {/* MainScreen */}
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ChoosePage"
        component={ChoosePage}
        options={{
          headerShown: false
        }}
      />

      {/* Renter */}
      <Stack.Screen
        name="LoginRenter"
        component={LoginRenter}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="MyRoomPage"
        component={RenterTabNavigator}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerBackVisible:false
        }}
      />
      <Stack.Screen
        name="PaymentRenter"
        component={PaymentRenter}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name="HistoryRenter"
        component={HistoryRenter}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerBackTitleVisible: false
        }}
      />

      {/* Owner */}
      <Stack.Screen
        name="LoginOwner"
        component={LoginOwner}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="RegisterOwner"
        component={RegisterOwner}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="OwnerHome"
        component={OwnerDrawerNavigator}
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
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name="StatusPayment"
        component={StatusPaymentOwner}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name="DetailPayment"
        component={DetailPaymentOwner}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name='DetailRoomSuite'
        component={DetailRoomSuite}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name='DetailRoomGenAir'
        component={DetailRoomGenAir}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name='DetailRoomGenFan'
        component={DetailRoomGenFan}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name='DetailRoomOneAir'
        component={DetailRoomOneAir}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name='DetailRoomOneFan'
        component={DetailRoomOneFan}
        options={{
          headerTitle: props => <DormitoryHeader {...props}/>,
          headerBackTitleVisible: false
        }}
      />
    </Stack.Navigator>
  )
}

export default AllStackNavigator