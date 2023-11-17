import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import {firebase, initializeApp} from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";

const MyRoomPage = ({ route, navigation }) => {
  const renter = route.params.renter;
  const [dormitoryName, setDormitory] = useState('');
  const [paymentArr, setPayment] = useState([]);
  const today = new Date();
  const day = today.getDate();
  let currentmonth = today.getMonth();
  if (day >= 26) {
    currentmonth += 1;
  }

    useEffect(() => {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      const fetchData = async () => {
        const dorQuery = await getDocs(query(collection(db, 'dormitory'), where('code', '==', renter.code)))
        dorQuery.forEach((doc) => {
          setDormitory(doc.data().name)
        })

        const querySnapshot = await getDocs(query(collection(db, "payment"), 
        where("code", "==", renter.code), where('room', '==', renter.num_room),
        where('month', '==', currentmonth)));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setPayment(data);
      };
  
      fetchData();
    }, [renter]); 
  
    console.log(paymentArr)
    console.log(2)
    console.log(currentmonth)
    console.log("---")

  let namemoth = "";
  if (currentmonth == 10) {
    namemoth = "ตุลาคม";
  }

  return (
    <SafeAreaView style={styles.container}>

          <View style={[styles.box, styles.shadowProp]}>
            <Text style={[styles.text, { fontSize: 19, color: "#FF9699" }]}>
              หอพัก : <Text>{dormitoryName}</Text>
            </Text>
            <Text style={[styles.text, { fontSize: 19, color: "#FF9699" }]}>
              ประเภทห้อง : <Text>{renter.type}</Text>
            </Text>
            <Text style={[styles.text, { fontSize: 19, color: "#FF9699" }]}>
              เลขห้อง : <Text>{renter.num_room}</Text>
            </Text>
            <Text></Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 1 : <Text>{renter.name1}</Text>
            </Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 2 : <Text>{renter.name2}</Text>
            </Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 3 : <Text>{renter.name3}</Text>
            </Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 4 : <Text>{renter.name4}</Text>
            </Text>
          </View>

      {paymentArr.map((item, i) => {
        return (
          <View key={i} style={[styles.box, styles.shadowProp]}>
            <Text
              style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}
            >
              {namemoth}
            </Text>
            <Text></Text>
            <Text style={styles.text}>
              ค่าเช่าหอพัก : <Text>{item.price}</Text> บาท
            </Text>
            <Text style={styles.text}>
              ค่าน้ำ : <Text>{parseInt(item.water) * 18}</Text> บาท ({" "}
              {item.water} หน่วย ) <Text> </Text>
            </Text>
            <Text style={styles.text}>
              ค่าไฟ : <Text>{parseInt(item.light) * 8}</Text> บาท ({" "}
              {item.light} หน่วย )<Text> </Text>
            </Text>
            <Text style={[styles.text, {marginBottom:10}]}>ค่าปรับ: {item.fine} บาท</Text>
            <Text style={[styles.text, { color: "#FF9699", fontSize: 20 }]}>
              รวมทั้งสิ้น :{" "} 
                {parseInt(item.price) +
                  parseInt(item.water) * 18 +
                  parseInt(item.light) * 8 +item.fine} บาท
            </Text>
            <Text style={{marginTop:5, color: item.status? "#69CC6D":"#FF0000" }}>{item.status? 'ชำระแล้ว':'ยังไม่ชำระ'}</Text>
          </View>
        );
      })}

      <View>
        <View
          style={{
            alignItems: "center",
            marginTop: 15,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("PaymentRenter", {
                data: paymentArr,
                month: namemoth,
                renter: renter
              });
            }}
          >
            <Text style={[styles.textBtn,{color: "white",textAlign: "center",fontWeight: "bold",fontSize: 15,},]}>
              ชำระค่าเช่า
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("HistoryRenter", { renter: renter });
            }}
          >
            <Text
              style={[
                styles.textBtn,
                {
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 15,
                },
              ]}
            >
              ประวัติค่าเช่าหอ
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ top: 35 }}>
        <TouchableOpacity
          style={{
            borderColor: "#F64B4B",
            width: 120,
            height: 50,
            borderWidth: 2,
            borderRadius: 40,
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("LoginRenter");
          }}
        >
          <Text
            style={[
              styles.textBtn,
              {
                color: "#F64B4B",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 15,
              },
            ]}
          >
            ออกจากระบบ
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "90%",
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#9B9B9B",
    padding: 15,
    margin: 10,
    backgroundColor: "white",
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#363C56",
  },
  btn: {
    width: 120,
    height: 50,
    borderRadius: 40,
    backgroundColor: "#FF9699",
    justifyContent: "center",
    margin: 8,
  },
  textBtn: {
    fontWeight: "bold",
    fontSize: 13,
  },
});

export default MyRoomPage;
