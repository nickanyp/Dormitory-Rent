import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import DormitoryFooter from "../../component/DormitoryFooter";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/FirebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

const LoginOwner = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    validateForm();
  }, [email, password]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let errors = {};
    if (!email) {
      errors.email = "กรุณากรอกอีเมล";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "อีเมลไม่ถูกต้อง";
    }
    if (!password) {
      errors.password = "กรุณากรอกรหัสผ่าน";
    } else if (password.length < 6) {
      errors.password = "รหัสผ่านควรมีอย่างน้อย 6 ตัวอักษร";
    }
    setErrors(errors);
  };

  const clearFormFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sign In!");
        const user = userCredential.user;
        console.log(user);
        const user_uid = user.uid;
        console.log(user_uid);
        navigation.navigate("OwnerHome", { uid: user_uid });
        clearFormFields();
      })
      .catch((error) => {
        console.log('Form has errors. Please correct them.');
        // Alert("กรุณากรอกอีเมลและรหัสผ่าน")
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}>
          เข้าสู่ระบบ
        </Text>
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
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ flex: 1, fontSize: 16 }}
            placeholder="อีเมล"
          ></TextInput>
        </View>
      </View>
      <Text style={styles.errorText}>{errors.email}</Text>

      <View style={{ alignItems: "center" }}>
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
      <Text style={styles.errorText}>{errors.password}</Text>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
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
        {/* <TouchableOpacity
          onPress={() => {
              navigation.navigate("RegisterOwner");
            }}
          >
          <Text style={styles.text}>ยังไม่มีบัญชีผู้ใช้?</Text>
        </TouchableOpacity> */}
      </View>

      <DormitoryFooter></DormitoryFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  input: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 50,
    borderColor: "#96B3FF",
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: "white",
    margin: "2%",
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
    fontSize: 16,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
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
  errorText: {
    color: "#96B3FF",
    fontSize: 14,
    marginLeft: "15%",
  },
});

export default LoginOwner;
