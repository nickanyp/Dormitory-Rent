import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  renderLabel,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/FirebaseConfig";

const DetailPaymentOwner = ({ navigation, route }) => {
  const code = route.params.code;
  const room = route.params.room;
  const month = route.params.month;
  const price = route.params.price;
  let type = route.params.type;
  console.log(room)

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);

  // const [pwater, setPriceWater] = useState();
  // const [plight, setPriceLight] = useState();
  const [water, setWater] = useState();
  const [light, setLight] = useState();

  const clearFormFields = () => {
    setPriceWater("")
    setPriceLight("")
    setWater("")
    setLight("")
  }

  const handleSendDetail = async () => {
    try {
      const detailDocRef = collection(firestore, "payment");
      console.log(water, light, month, room, code)
      await addDoc(detailDocRef, {
          water,
          light,
          month,
          room,
          code
      });
      console.log("success")
      navigation.navigate("InformPayment", {code: code})  
      clearFormFields()
    }catch (error){
      console.log(error)
    }
  }
  
  if (type == "genair"){
    type = "ห้องธรรมดาปรับอากาศ"
  }else if (type == "genfan"){
    type = "ห้องธรรมดาพัดลม"
  }else if (type == "suite"){
    type = "ห้องสูท"
  }else if (type == "oneair"){
    type = "ห้องเดี่ยวปรับอากาศ"
  }else if (type == "onefan"){
    type = "ห้องเดี่ยวพัดลม"
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          margin: "5%",
          marginHorizontal: "5%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#96B3FF",
            margin: 10,
          }}
        >
          รายละเอียดค่าเช่าหอพัก
        </Text>
      </View>

      <View style={{ marginHorizontal: "10%" }}>
        <View
          style={{
            width: 100,
            height: 45,
            backgroundColor: "#96B3FF",
            borderRadius: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              fontSize: 20,
            }}
          >
            {room}
          </Text>
        </View>

        <View style={{marginTop: '5%'}}>
          <Text style={styles.text}>ชื่อผู้เช่า1: นางสาวลักษิกา เจริญวัฒนา</Text>
          <Text style={styles.text}>ชื่อผู้เช่า2: นางสาววรรณิศา พงศ์พัฒนา</Text>
          <Text></Text>
          <Text style={styles.text}>ประเภทห้องพัก: {type}</Text>
          <Text style={styles.text}>ราคา: {price}</Text>

          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: '5%' }}>
            <View style={{ marginRight: "10%" }}>
              <Text style={styles.text}>ปริมาณน้ำ</Text>
              <TextInput style={[styles.input, styles.shadowProp]} onChangeText={(text)=>{setWater(text)}}></TextInput>
            </View>
            <View>
              <Text style={styles.text}>ปริมาณไฟฟ้า</Text>
              <TextInput style={[styles.input, styles.shadowProp]} onChangeText={(text)=>{setLight(text)}}></TextInput>
            </View>
          </View>

          {/* <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: '5%' }}>
            <View style={{ marginRight: "10%" }}>
              <Text style={styles.text}>ปริมาณไฟ</Text>
              <TextInput style={[styles.input, styles.shadowProp]} onChangeText={(text)=>{setLight(text)}}></TextInput>
            </View>
            <View>
              <Text style={styles.text}>ค่าไฟ</Text>
              <TextInput style={[styles.input, styles.shadowProp]} onChangeText={(text)=>{setPr(text)}}></TextInput>
            </View>
          </View> */}
        </View>

        <View style={{ alignItems: "center", marginTop: '10%' }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={handleSendDetail}
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

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#363C56",
    margin: '2%'
  },
  input: {
    width: 120,
    height: 45,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#96B3FF",
    borderRadius: "20%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
  },
  btn: {
    width: 110,
    padding: 15,
    borderRadius: 30,
    backgroundColor: "#363C56",
    margin: 20,
  },
});

export default DetailPaymentOwner;
