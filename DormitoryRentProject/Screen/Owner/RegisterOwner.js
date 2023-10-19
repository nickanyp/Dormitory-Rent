import {Text, TextInput, View, StyleSheet, TouchableOpacity} from "react-native";
import DormitoryFooter from "../../component/DormitoryFooter";
import { Component } from "react";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const gender = ["ชาย", "หญิง"]
class RegisterOwner extends Component {
  render() {
    return(
      <View style={styles.container}>
      <View>
        <Text style={styles.header}>สร้างบัญชีผู้ใช้</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View style={{alignItems: 'center'}}>
          <View style={[styles.input, styles.shadowProp]}>
            <Feather style={{paddingRight: 10}} name="user" size={24} color="#363C56" />
            <TextInput style={{flex: 1}} placeholder="ชื่อจริง-นามสกุล"></TextInput>
          </View>
          <View style={[styles.input, styles.shadowProp]}>
            <Fontisto style={{paddingRight: 10}} name="intersex" size={24} color="#363C56" />
            <TextInput style={{flex: 1}} placeholder="เพศ"></TextInput>
          </View>
          <View style={[styles.input, styles.shadowProp]}>
            <AntDesign style={{paddingRight: 10}} name="mail" size={20} color="#363C56" />
            <TextInput style={{flex: 1}} placeholder="อีเมล"></TextInput>
          </View>
          <View style={[styles.input, styles.shadowProp]}>
            <AntDesign style={{paddingRight: 10}} name="lock1" size={20} color="#363C56" />
            <TextInput style={{flex: 1}} placeholder="รหัสผ่าน"></TextInput>
          </View>
          <View style={[styles.input, styles.shadowProp]}>
            <AntDesign style={{paddingRight: 10}} name="phone" size={20} color="#363C56" />
            <TextInput style={{flex: 1}} placeholder="เบอร์โทร"></TextInput>
          </View>
        </View>
      </View>

      <View style={{flexDirection: "row", justifyContent: 'center'}}>
        <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate("LoginOwner")}}>
          <Text style={{textAlign: "center", color: "white", fontWeight: "bold",fontSize: 15,}}>
            ยกเลิก
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={{textAlign: "center", color: "white", fontWeight: "bold",fontSize: 15,}}>
            ยืนยัน
          </Text>
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
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
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
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "transparent",
    textAlign: "center",
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  btn: {
    width: 100,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#363C56",
    marginTop: 30,
    margin: 10
  },
});

export default RegisterOwner;
