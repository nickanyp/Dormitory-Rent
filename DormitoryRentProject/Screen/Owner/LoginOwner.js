import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DormitoryFooter from "../../component/DormitoryFooter";
import { AntDesign } from '@expo/vector-icons';
import { Component } from "react";

class LoginOwner extends Component {
  render() {
    return (
      <View style={styles.container}>
        
      <View style={styles.header}>
        <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}>
          เข้าสู่ระบบ
        </Text>
      </View>

      <Text></Text>
      <Text></Text>
      
      <View style={{alignItems: 'center'}}>
        <View style={[styles.input, styles.shadowProp]}>
          <AntDesign style={{paddingRight: 10}} name="mail" size={20} color="#363C56" />
          <TextInput style={{flex: 1, fontSize: 16}} placeholder="อีเมล"></TextInput>
        </View>
        <View style={[styles.input, styles.shadowProp]}>
          <AntDesign style={{paddingRight: 10}} name="lock1" size={20} color="#363C56" />
          <TextInput style={{flex: 1, fontSize: 16}} placeholder="รหัสผ่าน"></TextInput>
        </View>
      </View>

      <View style={{alignItems: "center",}}>
        <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate("OwnerHome")}}>
          <Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16,}}>
            ยืนยัน
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate("RegisterOwner")}}>
          <Text style={styles.text}>ยังไม่มีบัญชีผู้ใช้?</Text>
        </TouchableOpacity>
      </View>

      <DormitoryFooter></DormitoryFooter>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
  },
  label: {
    color: "#363C56",
    fontSize: 15,
    fontWeight: "bold",
    padding: 5,
    left: 75
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderColor: "#96B3FF",
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: "white",
    margin: 15,
    paddingLeft: 15,
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  btn: {
    width: 110,
    padding: 15,
    borderRadius: 30,
    backgroundColor: "#363C56",
    margin: 20,
  },
  text: {
    color: "#FF9699",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 16
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
});

export default LoginOwner;
