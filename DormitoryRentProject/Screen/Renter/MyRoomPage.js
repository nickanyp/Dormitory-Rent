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
import { firebase, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";

const MyRoomPage = ({ route, navigation }) => {
  const uid = route.params.uid;
  const [renterArr, setRenter] = useState([]);
  const [paymentArr, setPayment] = useState([]);
  const today = new Date();
  const day = today.getDate();
  let currentmonth = today.getMonth();
  if (day >= 26) {
    currentmonth += 1;
  }

    useEffect(() => {
      // Initialize Firebase (if not already initialized)
      const app = initializeApp(firebaseConfig);
  
      // Reference to Firestore
      const db = getFirestore(app);
  
      // Fetch data from collection1
      const fetchDataFromCollection1 = async () => {
        const querySnapshot = await getDocs(query(collection(db, "renters"), where("uid", "==", uid)));
  
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
  
        setRenter(data);
        console.log(data)
  
        // Use the data from collection1 to query collection2
        data.forEach(async (item) => {
          const querySnapshot = await getDocs(
            query(collection(db, "payment"), where("month", "==", currentmonth.toString()), where("code", "==", item.code), where("room", "==", item.num_room))
          );
  
          const relatedData = [];
          querySnapshot.forEach((doc) => {
            relatedData.push({ id: doc.id, ...doc.data() });
          });
  
          setPayment(relatedData)
  
  
          // Update the state with related data from collection2
          // setPayment((prevData) => [...prevData, { renterArr: item, paymentArr: relatedData }]);
        });
      };
  
      fetchDataFromCollection1();
    }, []); 
  
    console.log(renterArr)
    console.log(2)
    console.log(paymentArr)

  let namemoth = "";
  if (currentmonth == 10) {
    namemoth = "ตุลาคม";
  }
  console.log(namemoth);
  console.log(paymentArr);

  return (
    <SafeAreaView style={styles.container}>
      {renterArr.map((item) => {
        return (
          <View style={[styles.box, styles.shadowProp]}>
            <Text style={[styles.text, { fontSize: 19, color: "#FF9699" }]}>
              หอพัก : <Text>{item.dor_name}</Text>
            </Text>
            <Text style={[styles.text, { fontSize: 19, color: "#FF9699" }]}>
              ประเภทห้อง : <Text>{item.dor_type}</Text>
            </Text>
            <Text style={[styles.text, { fontSize: 19, color: "#FF9699" }]}>
              เลขห้อง : <Text>{item.num_room}</Text>
            </Text>
            <Text></Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 1 : <Text>{item.name1}</Text>
            </Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 2 : <Text>{item.name2}</Text>
            </Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 3 : <Text>{item.name3}</Text>
            </Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 4 : <Text>{item.name4}</Text>
            </Text>
          </View>
        );
      })}

      {paymentArr.map((item) => {
        return (
          <View style={[styles.box, styles.shadowProp]}>
            <Text
              style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}
            >
              {namemoth}
            </Text>
            <Text></Text>
            <Text style={styles.text}>
              ค่าเช่าหอพัก : <Text>{item.rent}</Text>บาท
            </Text>
            <Text style={styles.text}>
              ค่าน้ำ : <Text>{parseInt(item.water) * 18}</Text> บาท ({" "}
              {item.water} หน่วย ) <Text> </Text>
            </Text>
            <Text style={styles.text}>
              ค่าไฟ : <Text>{parseInt(item.light) * 8}</Text>บาท ({" "}
              {item.light} หน่วย )<Text> </Text>
            </Text>
            <Text></Text>
            <Text style={[styles.text, { color: "#FF9699", fontSize: 20 }]}>
              รวมทั้งสิ้น :{" "}
              <Text>
                {parseInt(item.rent) +
                  parseInt(item.water) * 18 +
                  parseInt(item.light) * 8}
              </Text>
              บาท
            </Text>
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
              });
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
              ชำระค่าเช่า
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("HistoryRenter", { data: renterArr });
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
