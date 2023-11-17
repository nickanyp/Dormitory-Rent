import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  renderLabel,
  SafeAreaView,
  Image,
  Button
} from "react-native";
import { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import DetailPaymentOwner from "./DetailPaymentOwner";
import Modal from "react-native-modal";
import {firebase, initializeApp} from 'firebase/app'; 
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";

const data = [
  { label: "มกราคม", value: "1" },
  { label: "กุมภาพันธ์", value: "2" },
  { label: "มีนาคม", value: "3" },
  { label: "เมษายน", value: "4" },
  { label: "พฤษภาคม", value: "5" },
  { label: "มิถุนายน", value: "6" },
  { label: "กรกฎาคม", value: "7" },
  { label: "สิงหาคม", value: "8" },
  { label: "กันยายน", value: "9" },
  { label: "ตุลาคม", value: "10" },
  { label: "พฤศจิกายน", value: "11" },
  { label: "ธันวาคม", value: "12" },
];

const StatusPaymentOwner = ({ navigation, route }) => {
  const code = route.params.code
  const [empArr, setEmpRoom] = useState([]);
  const [fullArr, setFullRoom] = useState([]);
  const [paymentArr, setPaymentRoom] = useState([]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const fetchData = async () => {
      console.log(value)
      const payQuery = await getDocs(query(collection(db, 'payment'), where('code', '==', code),
      where('month', '==', parseInt(value))));
      const pay = [];
      payQuery.forEach((doc) => {
        pay.push({id:doc.id, ...doc.data()})
      })
      setPaymentRoom(pay)
    };

    fetchData();
  }, [code, value]);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: "10%",
          marginHorizontal: "5%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#96B3FF",
            margin: 10,
          }}
        >
          สถานะการชำระค่าเช่า
        </Text>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={{
            fontSize: 14,
            color: "#363C56",
            fontWeight: "bold",
            textAlign: "center",
          }}
          selectedTextStyle={{
            fontSize: 14,
            color: "#363C56",
            fontWeight: "bold",
            textAlign: "center",
          }}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "เดือน" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <View style={styles.grid}>
        {paymentArr.map((item, i) => {
          return(
            <TouchableOpacity key={i} style={[ styles.btn, styles.shadowProp, 
            { backgroundColor:  item.status? "#90DA83":"#EF6767"},]}
              onPress={toggleModal}>
              <Text style={styles.txt}>{item.room}</Text>
              <View>
                <Modal isVisible={isModalVisible}>
                  <View style={{ backgroundColor: "#fff", width: "100%", height: "50%", borderRadius: 40, justifyContent: "center", alignItems: 'center'}}>
                    <Image style={styles.img} source={require('../../assets/slip2.jpeg')} />
                    <Button title="ปิด" onPress={toggleModal} />
                  </View>
                </Modal>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>

      <View>
        <Modal isVisible={isModalVisible}>
          <View style={{ backgroundColor: "#fff", width: "100%", height: "50%", borderRadius: 40, justifyContent: "center", alignItems: 'center'}}>
            <Image style={styles.img} source={require('../../assets/slip.jpeg')} />
            <Button title="ปิด" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  grid: {
    justifyContent:"center",
    alignItems:"center"
  },
  btn: {
    width: 200,
    fontSize: 30,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    margin: 7,
    alignItems: "center",
    shadowColor: "#9B9B9B",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  txt: {
    fontWeight: "bold",
    color: "#363C56",
    fontSize: 16,
  },
  dropdown: {
    width: 120,
    height: 40,
    borderColor: "gray",
    borderRadius: 15,
    paddingHorizontal: 8,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  img: {
    width: 300,
    height: 300,
    marginBottom: '5%',
    resizeMode: 'contain',
  },
});

export default StatusPaymentOwner;
