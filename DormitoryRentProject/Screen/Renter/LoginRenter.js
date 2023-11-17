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
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {firebase, initializeApp} from 'firebase/app'; 
import { getFirestore, collection, query, where, getDocs, updateDoc, doc, addDoc } from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";

const LoginRenter = ({ navigation }) => {
  const [renter, setRenter] = useState()
  const [dorpass, setDorpass] = useState("");
  const [numroom, setNumroom] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    validateForm();

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const fetchData = async () => {
      const renterQuery = await getDocs(query(collection(db, 'renters'), 
      where('code', '==', dorpass), where('num_room', '==', numroom)))
      renterQuery.forEach((doc) => {
        setRenter({id:doc.id, ...doc.data()})
      })
    };
    fetchData()
  }, [dorpass, numroom, password,]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const clearFormFields = () => {
    setDorpass("");
    setNumroom("");
    setPassword("");
  };

  const validateForm = () => {
    let errors = {};
    if (!dorpass) {
      errors.dorpass = "กรุณากรอกรหัสหอพัก";}
    if (!numroom) {
      errors.numroom = "กรุณากรอกเลขห้อง";}
    if (!password) {
      errors.password = "กรุณากรอกรหัสผ่าน";
    } else if (password.length < 6) {
      errors.password = "รหัสผ่านควรมีอย่างน้อย 6 ตัวอักษร";
    }
    setErrors(errors);
  };

  const handleSignIn = () => {
    if(renter.password == password){
      navigation.navigate("MyRoomPage", {renter: renter});
      clearFormFields();
    }else{
      console.log(error)
    }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "#363C56" }}>
          เข้าสู่ระบบ
        </Text>
        <Text style={{fontSize: 14,fontWeight: "bold",color: "#aaa",marginTop: 20,}}>
          Hello! Welcome back <AntDesign name="heart" size={14} color="#aaa" />
        </Text>
      </View>
      <Text></Text>
      <Text></Text>

        <View style={{alignItems: "center"}}>
          <View style={[styles.input, styles.shadowProp]}>
            <AntDesign style={{ paddingRight: 10 }} name="mail" size={20} color="#363C56"/>
            <TextInput
              value={dorpass}
              onChangeText={(numeric) => setDorpass(numeric)}
              style={{ flex: 1, fontSize: 16 }}
              placeholder="รหัสหอพัก"
            ></TextInput>
          </View>
        </View>
        <Text style={styles.errorText}>{errors.dorpass}</Text>

        <View style={{alignItems: "center"}}>
          <View style={[styles.input, styles.shadowProp]}>
            <MaterialCommunityIcons style={{ paddingRight: 10 }} name="numeric" size={24} color="#363C56"/>
            <TextInput
              value={numroom}
              onChangeText={(numeric) => setNumroom(numeric)}
              style={{ flex: 1, fontSize: 16 }}
              placeholder="เลขห้อง"
            ></TextInput>
          </View>
        </View>
        <Text style={styles.errorText}>{errors.numroom}</Text>

        <View style={{alignItems: 'center'}}>
        <View style={[styles.input, styles.shadowProp]}>
          <AntDesign style={{ paddingRight: 10 }} name="lock1" size={20} color="#363C56"/>
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{ flex: 1, fontSize: 16 }}
            placeholder="รหัสผ่าน"
          ></TextInput>
          <MaterialCommunityIcons style={{ right: 15 }} name={showPassword ? "eye" : "eye-off"} size={24} color="#aaa" onPress={toggleShowPassword}/>
        </View>
        </View>
      <Text style={styles.errorText}>{errors.password}</Text>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
          <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16}}>
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
    margin: '2%',
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
  errorText: {
    color: "#FF9699",
    fontSize: 14,
    marginLeft: "15%",
  },
});

export default LoginRenter;
