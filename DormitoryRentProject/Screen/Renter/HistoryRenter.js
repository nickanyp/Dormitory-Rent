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
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const HistoryRenter = ({ route, navigation }) => {
  const item = route.params.data
  const [paymentArr, setPayment] = useState([]);
  // console.log(item[0])

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const dataRenter = item[0]
      console.log(dataRenter)
      const paymentQuery = query(collection(db, "payment"), where("code", "==", dataRenter.code), where("room", "==", dataRenter.num_room));

      try {
        const querySnapshot = await getDocs(paymentQuery);
        // console.log(querySnapshot);

        if (querySnapshot.empty) {
          console.log("No data found");
        } else {
          console.log("have")
          const payment_data = [];
          querySnapshot.forEach((doc) => {
            payment_data.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setPayment(payment_data);
          console.log(paymentArr)
          console.log(1)
        }
      } catch (error) {
        console.error("Error fetching payment renters:", error);
      }
    };

    fetchData();
  }, [item]);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {paymentArr.map((item) => {
          if (item.data.month == "6"){
            item.data.month = "มิถุนายน 66"
          } else if (item.data.month == "10"){
            item.data.month = "ตุลาคม 66"
          } else if (item.data.month == "7"){
            item.data.month = "กรกฎาคม 66"
          } else if (item.data.month == "8"){
            item.data.month = "สิงหาคม 66"
          } else if (item.data.month == "9"){
            item.data.month = "กันยายน 66"
          }
          return(
            <View style={[styles.box, styles.shadowProp]}>
            <Text
              style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}
              >{item.data.month}</Text>
              <Text></Text>
              <Text style={styles.text}>
                ค่าเช่าหอพัก : <Text>{item.data.rent}</Text>บาท
              </Text>
              <Text style={styles.text}>
                ค่าน้ำ : <Text>{parseInt(item.data.water)*18}</Text> บาท ( {item.data.water} หน่วย ) <Text> </Text>
              </Text>
              <Text style={styles.text}>
                ค่าไฟ : <Text>{parseInt(item.data.light)*8}</Text>บาท ( {item.data.light} หน่วย )<Text> </Text>
              </Text>
              <Text></Text>
              <Text style={[styles.text, { color: "#FF9699", fontSize:20 }]}>
                รวมทั้งสิ้น : <Text>{parseInt(item.data.rent)+(parseInt(item.data.water)*18)+(parseInt(item.data.light)*8)}</Text>บาท
              </Text>
              <Text></Text>
              <Text>{item.data.status? "ชำระแล้ว": "ยังไม่ชำระ"}</Text>
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
