import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Pressable,
  SafeAreaView,
} from "react-native";
import Modal from "react-native-modal";
import DormitoryFooter from "../../component/DormitoryFooter";
import DatePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/FirebaseConfig";

const RegisterOwner = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [dor_name, setDor_name] = useState("");
  const [errors, setErrors] = useState({});
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  useEffect(() => {
    validateForm();
  }, [name, value, email, password, dateOfBirth, phone]);

  const validateForm = () => {
    let errors = {};
    if (!name) {
      errors.name = "กรุณากรอกชื่อ-นามสกุล";
    } if (!value) {
      errors.value = "กรุณากรอกเพศ";
    } if (!dateOfBirth) {
      errors.dateOfBirth = "กรุณากรอกวันเกิด";
    }
    if (!email) {
      errors.email = "กรุณากรอกอีเมล";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "อีเมลไม่ถูกต้อง";
    }
    if (!password) {
      errors.password = "กรุณากรอกรหัสผ่าน";
    } else if (password.length < 6) {
      errors.password = "รหัสผ่านควรมีอย่างน้อย 6 ตัวอักษร";
    } if (!phone) {
      errors.phone = "กรุณากรอกเบอร์โทรศัพท์"
    }
    setErrors(errors);
  };

  // Birth
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [isModalVisible, setModalVisible] = useState(false);
  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
    } else {
      toggleDatePicker();
    }
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    let test = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    setdateOfBirth(test)
    console.log(dateOfBirth);
  };

  // gender
  const sex = [
    { label: "ชาย", value: "ชาย" },
    { label: "หญิง", value: "หญิง" },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const clearFormFields = () => {
    setName("");
    setSex("");
    dateOfBirth(""),
    setEmail("");
    setPassword("");
    setPhone("");
    setDor_name("");
  };

  const handleCreateAccount = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userDocRef = collection(firestore, "owners");
      await addDoc(userDocRef, {
        uid: userCredential.user.uid,
        name,
        value,
        dateOfBirth,
        email,
        password,
        phone,
        dor_name
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
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, { color: "#363C56" }]}>
        สร้างบัญชีผู้ใช้
      </Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>

        <View style={{alignItems: 'center'}}>
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
        </View>
        <Text style={styles.errorText}>{errors.name}</Text>

        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
            <Dropdown
              style={[styles.dropdown, styles.shadowProp, { width: 130 }]}
              placeholderStyle={{ color: "#C7C7CD", fontSize: 16 }}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={sex}
              valueField="value"
              placeholder={!isFocus ? "เพศ" : "..."}
              labelField="label"
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <Fontisto
                  style={{ paddingRight: 10 }}
                  name="intersex"
                  size={24}
                  color="#363C56"
                />
              )}
            />
            
            <TouchableOpacity
              style={[styles.input, styles.shadowProp, { marginLeft: 0,width: 145 }]}
              onPress={toggleModal}
            >
              <MaterialCommunityIcons
                style={{ paddingRight: 10 }}
                name="cake-variant-outline"
                size={24}
                color="#363C56"
              />
              <TextInput
                style={{ flex: 1, fontSize: 16 }}
                placeholder="วันเกิด"
                value={dateOfBirth}
                // onChangeText={setdateOfBirth}
              ></TextInput>
            </TouchableOpacity>

          <Modal isVisible={isModalVisible}>
            <View
              style={{
                backgroundColor: "#fff",
                width: "100%",
                height: "50%",
                borderRadius: 40,
                justifyContent: "center",
              }}
              value={date}
              onChangeText={(text) => setdateOfBirth(text)}
            >
              <DatePicker
                mode="date"
                display="inline"
                value={date}
                onChange={onChange}
                style={{
                  backgroundColor: "white",
                  margin: 10,
                }}
              ></DatePicker>

              <Button title="ยืนยัน" onPress={toggleModal}/>
            </View>
          </Modal>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={[styles.input, styles.shadowProp,]}>
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
        </View>
        <Text style={styles.errorText}>{errors.email}</Text>

        <View style={{alignItems: 'center'}}>
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
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="#aaa"
              onPress={toggleShowPassword}
            />
          </View>
        </View>
        <Text style={styles.errorText}>{errors.password}</Text>

        <View style={{alignItems: 'center'}}>
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
        <Text style={styles.errorText}>{errors.phone}</Text>


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
    </SafeAreaView>
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
    margin: '2%',
    paddingLeft: 15,
    backgroundColor: "white",
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
    marginTop: 10,
    margin: 10,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    borderColor: "#96B3FF",
    borderWidth: 1.5,
    borderRadius: 25,
    width: 150,
    height: 50,
    margin: '2%',
    paddingLeft: 15,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 5,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  errorText: {
    color: "#96B3FF",
    fontSize: 14,
    marginLeft: "15%",
  },
});

export default RegisterOwner;
