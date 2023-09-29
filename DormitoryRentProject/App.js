import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FirstPage from './MainScreen/FirstPage';
import ChoosePage from './MainScreen/ChoosePage';
import LoginRenter from './Renter/LoginRenter';
import MyRoomPage from './Screen/Renter/MyRoomPage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstPage text='DÖrmitory Rent'></FirstPage> */}
      {/* <ChoosePage></ChoosePage> */}
      {/* <LoginRenter></LoginRenter> */}
      <MyRoomPage></MyRoomPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
