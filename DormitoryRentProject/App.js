import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FirstPage from "./MainScreen/FirstPage";
import ChoosePage from "./MainScreen/ChoosePage";
import LoginRenter from "./Screen/Renter/LoginRenter";
import MyRoomPage from "./Screen/Renter/MyRoomPage";
import PaymentRenter from "./Screen/Renter/PaymentRenter";
import HistoryRenter from "./Screen/Renter/HistoryRenter";
import AppNavigator from "./Navigation/AppNavigator";

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <FirstPage text='DÖrmitory Rent'></FirstPage> */}
    //   {/* <ChoosePage></ChoosePage> */}
    //   {/* <LoginRenter></LoginRenter> */}
    //   <MyRoomPage></MyRoomPage>
    //   {/* <PaymentRenter></PaymentRenter> */}
    // </View>
    <AppNavigator></AppNavigator>
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
