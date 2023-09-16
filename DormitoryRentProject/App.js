
import { StyleSheet, Text, View } from 'react-native';
import FirstPage from './FirstPage';
import ChoosePage from './ChoosePage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstPage text='DÖrmitory Rent'></FirstPage> */}
      <ChoosePage></ChoosePage>
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
