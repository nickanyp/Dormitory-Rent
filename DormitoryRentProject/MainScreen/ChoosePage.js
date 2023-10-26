import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import DormitoryFooter from "../component/DormitoryFooter";
import { MaterialIcons } from '@expo/vector-icons';

const ChoosePage = ({navigation}) =>  {
  return (
    <View style={styles.container}>

      <View style={styles.box1}>
        <Text style={{fontSize: 35, color: 'white', right: '20%'}}>WELCOME</Text>
        <Text style={{fontSize: 16, color: 'white', right: '17%', marginTop: 10}}>TO DÖRMITORY RENT</Text>
        <Image style={styles.pic} source={require('../assets/pink.png')}></Image>
      </View>

        <View style={styles.box2}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#363C56", marginTop: '10%' }}>
            คุณเป็น <Text style={{ color: "#96B3FF" }}>เจ้าของหอพัก </Text>
            หรือ <Text style={{color: "#FF9699"}}>ผู้เช่าหอพัก</Text> ?
          </Text>

          <View style={{flexDirection: 'column', marginTop: 20}}>
            <View style={[styles.input, {backgroundColor: '#96B3FF'}]}>
              <TouchableOpacity 
              style={{flex: 1}}
              onPress={() => {navigation.navigate('LoginOwner')}}>
                <Text style={[styles.text, {color: 'white'}]}>เจ้าของหอพัก</Text>
              </TouchableOpacity>
              <MaterialIcons name="navigate-next" size={24} color="white" />
            </View>
            <View style={[styles.input, {backgroundColor: '#FF9699'}]}>
              <TouchableOpacity style={{flex: 1}} 
              onPress={() => {(navigation.navigate('LoginRenter'))}}>
                <Text style={styles.text}>ผู้เช่าหอพัก</Text>
              </TouchableOpacity>
              <MaterialIcons name="navigate-next" size={24} color="white" />
            </View>
          </View>
        </View>

      <DormitoryFooter></DormitoryFooter>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#363C56'
  },
  box1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  box2: {
    flex:2, 
    backgroundColor: 'white', 
    alignItems: 'center',
    width: '100%',
    height: '30%',
    borderRadius: 40
  },
  style: {
    width: 100,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center'
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  },
  btn: {
    width: 120,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 80,
    backgroundColor: 'red',
    borderRadius: 25,
    backgroundColor: "white",
    margin: 15,
    paddingLeft: 15,
  },
  pic: {
    width: 600,
    height: 600,
    resizeMode: 'contain',
    position: 'absolute',
    top: -20,
    left: -60
  }
});

export default ChoosePage;