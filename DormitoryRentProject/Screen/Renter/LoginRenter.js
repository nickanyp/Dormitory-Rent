import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import DormitoryFooter from "../../component/DormitoryFooter";

import { Octicons } from '@expo/vector-icons';
import { Component } from "react";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from "../../database/FirebaseDB";

class LoginRenter extends Component {
  constructor() {
    super();

    this.dbRef = firebase.firestore().collection("renters");
    this.state = {
      dor_id: "",
      num_room: "",
      pass: "",
      isLoading: false,
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeUser() {
    if (this.state.dor_id === "" && this.state.num_room === "" && this.state.pass === "") {
      alert("กรุณากรอกข้อมูลทั้งหมด");
    } else if (this.state.dor_id == "") {
      alert("กรุณากรอกรหัสหอพัก");
    } else if(this.state.num_room == ""){
      alert("กรุณากรอกเลขห้อง");
    } else if(this.state.pass == "") {
      alert("กรุณากรอกรหัสผ่าน");
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef
        .add({
          dor_id: this.state.dor_id,
          num_room: this.state.num_room,
          pass: this.state.pass,
        })
        .then((res) => {
          this.setState({
            dor_id: "",
            num_room: "",
            pass: "",
            isLoading: false,
          });
          this.props.navigation.navigate("MY ROOM");
        })
        .catch((err) => {
          console.log("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
      
      <View style={{alignItems: 'center'}}>
        <View style={[styles.input, styles.shadowProp]}>
          <AntDesign style={{paddingRight: 10}} name="mail" size={20} color="#363C56" />
          <TextInput style={{flex: 1, fontSize: 16}} placeholder="รหัสหอพัก"></TextInput>
        </View>
        <View style={[styles.input, styles.shadowProp]}>
          <MaterialCommunityIcons style={{paddingRight: 10}} name="numeric" size={24} color="#363C56" />
          <TextInput style={{flex: 1, fontSize: 16}} placeholder="เลขห้อง"></TextInput>
        </View>
        <View style={[styles.input, styles.shadowProp]}>
          <AntDesign style={{paddingRight: 10}} name="lock1" size={20} color="#363C56" />
          <TextInput style={{flex: 1, fontSize: 16}} placeholder="รหัสผ่าน"></TextInput>
        </View>
      </View>

      <View style={{alignItems: "center",}}>
        <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate("MyRoomPage")}}>
          <Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16,}}>
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
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderColor: "#9B9B9B",
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
    backgroundColor: "#FF9699",
    margin: 20,
  },
  text: {
    color: "#FF9699",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 16
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

export default LoginRenter;