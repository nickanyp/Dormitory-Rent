import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {firebase, initializeApp} from 'firebase/app'; 
import { getFirestore, collection, query, where, getDocs, updateDoc, doc, addDoc } from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";

const HistoryRenter = ({ route, navigation }) => {
  const renter = route.params.renter
  const [paymentArr, setPayment] = useState([]);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const fetchData = async() => {
      const hisQuery = await getDocs(query(collection(db, 'payment'),
      where('code', '==', renter.code), where('room', '==', renter.num_room)))
      const pay = [];
      hisQuery.forEach((doc) => {
        pay.push({id:doc.id, ...doc.data()})
      })
      setPayment(pay)
    }

    fetchData();
  }, [renter]);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {paymentArr.map((item) => {
          if (item.month == "6"){
            item.month = "มิถุนายน 66"
          } else if (item.month == "10"){
            item.month = "ตุลาคม 66"
          } else if (item.month == "7"){
            item.month = "กรกฎาคม 66"
          } else if (item.month == "8"){
            item.month = "สิงหาคม 66"
          } else if (item.month == "9"){
            item.month = "กันยายน 66"
          }
          return(
            <View style={[styles.box, styles.shadowProp]}>
            <Text
              style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}
              >{item.month}</Text>
              <Text></Text>
              <Text style={styles.text}>
                ค่าเช่าหอพัก : <Text>{item.price}</Text> บาท
              </Text>
              <Text style={styles.text}>
                ค่าน้ำ : <Text>{parseInt(item.water)*18}</Text> บาท ( {item.water} หน่วย ) <Text> </Text>
              </Text>
              <Text style={styles.text}>
                ค่าไฟ : <Text>{parseInt(item.light)*8}</Text> บาท ( {item.light} หน่วย )<Text> </Text>
              </Text>
              <Text></Text>
              <Text style={[styles.text, { color: "#FF9699", fontSize:20 }]}>
                รวมทั้งสิ้น : <Text>{parseInt(item.price)+(parseInt(item.water)*18)+(parseInt(item.light)*8)}</Text> บาท
              </Text>
              <Text></Text>
              {item.status? <Text style={{color:"#69CC6D"}}>ชำระแล้ว</Text>: <Text style={{color:"#FF0000"}}>ยังไม่ชำระ</Text>}
            </View>
          )
          
        })}
      </ScrollView>
      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: 'center',
    marginTop:50
  },
  scroll:{
    textAlign:"center",
    // backgroundColor:"#f00"
    justifyContent: "center",
    alignItems: "center",
    marginTop:5,
    padding: 10
    // width: "100%"
  },
  box: {
    width: "100%",
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#9B9B9B",
    padding: 20,
    backgroundColor: "white",
    margin:5
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal: '15%'
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default HistoryRenter;
