import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from "react-native";
import ChoosePage from "./MainScreen/ChoosePage";
import LoginRenter from "./Screen/Renter/LoginRenter";
import MyRoomPage from "./Screen/Renter/MyRoomPage";
import PaymentRenter from "./Screen/Renter/PaymentRenter";
import HistoryRenter from "./Screen/Renter/HistoryRenter";
import RegisterOwner from "./Screen/Owner/RegisterOwner";
import LoginOwner from "./Screen/Owner/LoginOwner";
import AllNavigation from "./Navigation/MainNavigation"
import CheckPayment from './Screen/Owner/CheckPayment';
import PaymentOwner2 from './Screen/Owner/InformPaymentOwner';
import PaymentOwner3 from './Screen/Owner/StatusPaymentOwner';
import ProfileOwner from './Screen/Owner/EditProfileOwner';
import FirstPage from './MainScreen/FirstPage';
import RenterDashPage from './Screen/Renter/DashboardPage';

export default function App() {
  return (
    // <FirstPage></FirstPage>
    // <MainScreenNavigation></MainScreenNavigation>
    <AllNavigation></AllNavigation>
    // <MyRoomPage></MyRoomPage>
    // <LoginRenter></LoginRenter>
    // <CheckPayment></CheckPayment>
    // <ProfileOwner></ProfileOwner>
    // <ChoosePage></ChoosePage>
    // <RenterDashPage></RenterDashPage>
  );
}