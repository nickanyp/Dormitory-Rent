
import React from "react";
import AllNavigation from "./Navigation/MainNavigation"
import RenterDashPage from "./Screen/Renter/DashboardPage";
import OwnerHome from "./Screen/Owner/OwnerHome";
import RegisterOwner from "./Screen/Owner/RegisterOwner";
import PaymentOwner from "./Screen/Owner/PaymentOwner";

export default function App() {
  return (
    // <FirstPage></FirstPage>
    // <MainScreenNavigation></MainScreenNavigation>
    // <AllNavigation></AllNavigation>
    // <MyRoomPage></MyRoomPage>
    // <LoginRenter></LoginRenter>
    // <CheckPayment></CheckPayment>
    // <ProfileOwner></ProfileOwner>
    // <ChoosePage></ChoosePage>
    // <RenterDashPage></RenterDashPage>
    // <OwnerHome></OwnerHome>
    // <RegisterOwner></RegisterOwner>
    <PaymentOwner></PaymentOwner>
  );
}