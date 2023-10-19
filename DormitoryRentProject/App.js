import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from "react-native";
import FirstPage from "./MainScreen/FirstPage";
import ChoosePage from "./MainScreen/ChoosePage";
import LoginRenter from "./Screen/Renter/LoginRenter";
import MyRoomPage from "./Screen/Renter/MyRoomPage";
import PaymentRenter from "./Screen/Renter/PaymentRenter";
import HistoryRenter from "./Screen/Renter/HistoryRenter";
import RegisterOwner from "./Screen/Owner/RegisterOwner";
import LoginOwner from "./Screen/Owner/LoginOwner";
import AllNavigation from "./Navigation/AllNavigation"

export default function App() {
  return (
    <AllNavigation></AllNavigation>
    // <MyRoomPage></MyRoomPage>
    // <LoginRenter></LoginRenter>
  );
}