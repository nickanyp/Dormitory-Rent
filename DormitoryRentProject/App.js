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
    <View style={styles.container}>
      {/* <FirstPage text='DÖrmitory Rent'></FirstPage> */}
      {/* <ChoosePage></ChoosePage> */}
      {/* <LoginRenter></LoginRenter> */}
      {/* <MyRoomPage></MyRoomPage> */}
      {/* <PaymentRenter></PaymentRenter> */}
      {/* <RegisterOwner></RegisterOwner> */}
      {/* <LoginOwner></LoginOwner> */}
      <AllNavigation></AllNavigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
