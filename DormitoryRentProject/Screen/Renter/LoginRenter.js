import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Dormitory from "../../component/Dormitory";
import { Component } from "react";
import firebase from "../../database/FirebaseDB";

class LoginRenter extends Component {
  constructor() {
    super();

    this.dbRef = firebase.firestore().collection('LoginRenterDB')
    this.state = {
      dor_id: "",
      num_room: "",
      pass: "",
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeUser() {
    if (this.state.dor_id == "") {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน")
    } else {
      this.setState({
        isLoading: true
      });
      this.dbRef.add({
        dor_id: this.state.dor_id,
        num_room: this.state.num_room,
        pass: this.setState.pass
      }).then((res) => {
        this.setState({
          dor_id: "",
          num_room: "",
          pass: "",
          isLoading: false
        });
        this.props.navigation.navigate('MyRoomPage')
      })
    }
  }

  render() {
    return(
      <View style={styles.container}>

      <View>
        <Text style={styles.label}>รหัสหอพัก</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>เลขห้อง</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>รหัสผ่าน</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.btn} onPress={() => {this.storeUser()}}>
          <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16,}}>
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
    padding: 15
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
});

export default LoginRenter;
