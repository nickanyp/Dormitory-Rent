import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Dormitory from "../../component/DormitoryFooter";
import { Component } from "react";
import { AntDesign } from '@expo/vector-icons'; 
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
          this.props.navigation.navigate("MyRoomPage");
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
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="small" color="#9E9E9E" />
          <Dormitory></Dormitory>
        </View>
      );
    }
    return (
      <View style={styles.container}>

        <View>
          <Text style={styles.label}>รหัสหอพัก</Text>
          <TextInput
            style={[styles.input, styles.shadowProp]}
            value={this.state.dor_id}
            onChangeText={(val) => {
              this.inputValueUpdate(val, "dor_id");
            }}
          ></TextInput>
          <Text style={styles.label}>เลขห้อง</Text>
          <TextInput
            style={[styles.input, styles.shadowProp]}
            value={this.state.num_room}
            onChangeText={(val) => {
              this.inputValueUpdate(val, "num_room");
            }}
          ></TextInput>
          <Text style={styles.label}>รหัสผ่าน</Text>
          <View style={{justifyContent: 'center'}}>
            <TextInput
              style={[styles.input, styles.shadowProp]}
              value={this.state.pass}
              onChangeText={(val) => {
                this.inputValueUpdate(val, "pass");
              }}
            ></TextInput>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.storeUser();
            }}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}>
              ยืนยัน
            </Text>
          </TouchableOpacity>
        </View>

        <Dormitory></Dormitory>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  labelHead: {
    color: "#363C56",
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: 'center'
  },
  label: {
    color: "#363C56",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: "#9B9B9B",
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: "white",
    margin: 5,
    padding: 15,
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
    backgroundColor: "#FF9699",
    margin: 20,
  },
  icon: {
    position: 'absolute',
    margin: 20
  }
});

export default LoginRenter;