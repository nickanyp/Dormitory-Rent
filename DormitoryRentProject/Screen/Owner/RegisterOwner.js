import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DormitoryFooter from "../../component/DormitoryFooter";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/FirebaseConfig";

const RegisterOwner = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const clearFormFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  const handleCreateAccount = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Add user data to Firestore
      const userDocRef = collection(firestore, 'owners');
      await addDoc(userDocRef, {
        uid: userCredential.user.uid,
        name,
        email,
        phone,
      });
      console.log("Account created");
      const user = userCredential.user;
      console.log(user);
      navigation.navigate("LoginOwner");
      clearFormFields();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>สร้างบัญชีผู้ใช้</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <View style={{ alignItems: "center" }}>
        <View style={[styles.input, styles.shadowProp]}>
          <Feather
            style={{ paddingRight: 10 }}
            name="user"
            size={24}
            color="#363C56"
          />
          <TextInput
            style={{ flex: 1, fontSize: 16 }}
            placeholder="ชื่อจริง-นามสกุล"
            value={name}
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>
        {/* <View style={[styles.input, styles.shadowProp]}>
          <Fontisto
            style={{ paddingRight: 10 }}
            name="intersex"
            size={24}
            color="#363C56"
          />
          <TextInput
            style={{ flex: 1, fontSize: 16 }}
            placeholder="เพศ"
          ></TextInput>
        </View> */}
        

        <View style={[styles.input, styles.shadowProp]}>
          <AntDesign
            style={{ paddingRight: 10 }}
            name="mail"
            size={20}
            color="#363C56"
          />
          <TextInput
            style={{ flex: 1, fontSize: 16 }}
            placeholder="อีเมล"
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            style={{ flex: 1, fontSize: 16 }}
            placeholder="รหัสผ่าน"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
          <MaterialCommunityIcons
            style={{ right: 15 }}
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            onPress={toggleShowPassword}
          />
        </View>
        <View style={[styles.input, styles.shadowProp]}>
          <AntDesign
            style={{ paddingRight: 10 }}
            name="phone"
            size={20}
            color="#363C56"
          />
          <TextInput
            style={{ flex: 1, fontSize: 16 }}
            placeholder="เบอร์โทร"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          ></TextInput>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity style={styles.btn} onPress={handleCreateAccount}>
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
    marginTop: 30,
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
    margin: 10,
  },
});

export default RegisterOwner;
