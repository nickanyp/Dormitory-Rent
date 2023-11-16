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
import {firebase, initializeApp} from 'firebase/app'; 
import { getFirestore, collection, query, where, getDocs, updateDoc, doc, addDoc } from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";


const DetailPaymentOwner = ({ navigation, route }) => {
  const room = route.params.room;
  const month = route.params.month;
  const [renter, setRenter] = useState()
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const [name3, setName3] = useState('')
  const [name4, setName4] = useState('')
  const [oldwater, setOwater] = useState('')
  const [oldlight, setOlight] = useState('')
  const [payId, setpayId] = useState('')

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const fetchData = async () => {
      const renterQuery = await getDocs(query(collection(db, 'renters'), where('code', '==', room.code), 
      where('num_room', '==', room.room)));
      renterQuery.forEach((doc) => {
        setRenter({ id: doc.id, ...doc.data() })
        setName1(doc.data().name1)
        setName2(doc.data().name2)
        setName3(doc.data().name3)
        setName4(doc.data().name4)
      })

      if (room.inform == true){
        const payQuery = await getDocs(query(collection(db, 'payment'), where('code', '==', room.code),
        where('room', '==', room.room)));
        payQuery.forEach((doc) => {
          setOlight(doc.data().light)
          setOwater(doc.data().water)
          setpayId(doc.id)
        })
      }
    };

    fetchData();
  }, [room]);
  console.log(room)
  console.log(renter)

  if (room.type == "genair"){
    room.type = "ห้องธรรมดาปรับอากาศ"
  }else if (room.type == "genfan"){
    room.type = "ห้องธรรมดาพัดลม"
  }else if (room.type == "suite"){
    room.type = "ห้องสูท"
  }else if (room.type == "oneair"){
    room.type = "ห้องเดี่ยวปรับอากาศ"
  }else if (room.type == "onefan"){
    room.type = "ห้องเดี่ยวพัดลม"
  }

  const [water, setWater] = useState();
  const [light, setLight] = useState();
  
  const handleSendDetail = async () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    if(room.inform == true){
      await updateDoc(doc(db, 'payment', payId), {
        water: oldwater,
        light: oldlight 
      })
      console.log('update success')
      navigation.navigate("InformPayment", {code: room.code}) 
    }else{
      try {
        const detailDocRef = collection(db, "payment");
        await addDoc(detailDocRef, {
            water: water,
            light: light,
            month: month,
            room: room.room,
            code: room.code,
            status:false,
            fine: 0,
            type: room.type,
            price: room.price
        }).then(updateDoc(doc(db, 'room', room.id), {
          inform: true  
        }))
  
        console.log("success")
        navigation.navigate("InformPayment", {code: room.code})  
        clearFormFields()
      }catch (error){
        console.log(error)
      }
    }
    
  }

  const clearFormFields = () => {
    setWater("")
    setLight("")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: "5%", marginHorizontal: "5%", alignItems: "center", justifyContent: "center",}}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#96B3FF", margin: 10,}}>
          รายละเอียดค่าเช่าหอพัก
        </Text>
      </View>

      <View style={{ marginHorizontal: "10%" }}>
        <View style={{ width: 100, height: 45, backgroundColor: "#96B3FF", borderRadius: "20%", alignItems: "center", justifyContent: "center",}}>
          <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 20,}}>
            {room.room}
          </Text>
        </View>

        <View style={{marginTop: '5%'}}>
          <Text style={styles.text}>ชื่อผู้เช่า1: {name1}</Text>
          <Text style={styles.text}>ชื่อผู้เช่า2: {name2}</Text>
          <Text style={styles.text}>ชื่อผู้เช่า3: {name3}</Text>
          <Text style={styles.text}>ชื่อผู้เช่า4: {name4}</Text>
          <Text></Text>
          <Text style={styles.text}>ประเภทห้องพัก: {room.type}</Text>
          <Text style={styles.text}>ราคา: {room.price}</Text>

          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: '5%' }}>
            <View style={{ marginRight: "10%" }}>
              <Text style={styles.text}>ปริมาณน้ำ</Text>
              <TextInput style={[styles.input, styles.shadowProp]} 
              onChangeText={(text)=>{setWater(text); setOwater(text)}} value={oldwater}>
              </TextInput>
            </View>
            <View>
              <Text style={styles.text}>ปริมาณไฟฟ้า</Text>
              <TextInput style={[styles.input, styles.shadowProp]} 
              onChangeText={(text)=>{setLight(text); setOlight(text)}} value={oldlight}>
              </TextInput>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: '10%' }}>
          <TouchableOpacity style={styles.btn} onPress={handleSendDetail}>
            <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16}}>
              {room.inform? 'แก้ไข':'ยืนยัน'}
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
