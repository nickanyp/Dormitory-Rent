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
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/FirebaseConfig";

const LoginRenter = ({ navigation }) => {
  const [dorpass, setDorpass] = useState("");
  const [numroom, setNumroom] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const clearFormFields = () => {
    setDorpass("");
    setNumroom("");
    setPassword("");
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, password)
      .then((userCredential) => {
        console.log("Sign In!");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("OwnerHome");
        clearFormFields();
      })
      .catch((error) => {
        console.log(error);
      });
    if (dorpass === "" && numroom === "" && password === "") {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
    } else if (dorpass == "") {
      alert("กรุณากรอกรหัสหอพัก");
    } else if (numroom == "") {
      alert("กรุณากรอกเลขห้อง");
    } else if (password == "") {
      alert("กรุณารหัสผ่าน");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "#363C56" }}>เข้าสู่ระบบ</Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: "#aaa",
            marginTop: 20,
          }}
        >
          Hello! Welcome back <AntDesign name="heart" size={14} color="#aaa" />
        </Text>
      </View>
      <Text></Text>
      <Text></Text>
      <View style={{ alignItems: "center" }}>
        <View style={[styles.input, styles.shadowProp]}>
          <AntDesign
            style={{ paddingRight: 10 }}
            name="mail"
            size={20}
            color="#363C56"
          />
          <TextInput
            value={dorpass}
            onChangeText={(numeric) => setDorpass(numeric)}
            style={{ flex: 1, fontSize: 16 }}
            placeholder="รหัสหอพัก"
          ></TextInput>
        </View>
        <View style={[styles.input, styles.shadowProp]}>
          <MaterialCommunityIcons
            style={{ paddingRight: 10 }}
            name="numeric"
            size={24}
            color="#363C56"
          />
          <TextInput
            value={numroom}
            onChangeText={(numeric) => setNumroom(numeric)}
            style={{ flex: 1, fontSize: 16 }}
            placeholder="เลขห้อง"
          ></TextInput>
        </View>
        <View style={[styles.input, styles.shadowProp]}>
          <AntDesign
            style={{ paddingRight: 10 }}
            name="lock1"
            size={20}
            color="#363C56"
          />
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{ flex: 1, fontSize: 16 }}
            placeholder="รหัสผ่าน"
          ></TextInput>
          <MaterialCommunityIcons
            style={{ right: 15 }}
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color="#aaa"
            onPress={toggleShowPassword}
          />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("MyRoomPage");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            ยืนยัน
          </Text>
        </TouchableOpacity>
      </View>

      <DormitoryFooter></DormitoryFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  input: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 16,
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  header: {
    textAlign: "center",
    alignItems: "center",
  },
});

export default LoginRenter;
