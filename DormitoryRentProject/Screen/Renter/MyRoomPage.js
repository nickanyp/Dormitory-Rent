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
  const day = today.getDate()
  let currentmonth = today.getMonth()
  if (day >= 26){
    currentmonth+=1
  }

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const renterQuery = query(collection(db, "renters"), where("uid", "==", uid));
      console.log(renterQuery);

      try {
        const querySnapshot = await getDocs(renterQuery);
        console.log(querySnapshot);

        if (querySnapshot.empty) {
          console.log("No dormitories found");
        } else {
          const renters_data = [];
          querySnapshot.forEach((doc) => {
            renters_data.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setRenter(renters_data);
          console.log(renterArr);
        }
      } catch (error) {
        console.error("Error fetching renters:", error);
      }

      const dataRenter = renterArr[0].data
      // console.log(dataRenter)
      console.log(toString(currentmonth))
      const paymentQuery = query(collection(db, "payment"), where("month", "==", currentmonth.toString()), where("code", "==", dataRenter.code), where("room", "==", dataRenter.num_room));

      try {
        const querySnapshot = await getDocs(paymentQuery);
        // console.log(querySnapshot);

        if (querySnapshot.empty) {
          console.log("No data found");
        } else {
          const payment_data = [];
          querySnapshot.forEach((doc) => {
            payment_data.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setPayment(payment_data);
          console.log(paymentArr);
        }
      } catch (error) {
        console.error("Error fetching payment renters:", error);
      }
    };

    fetchData();
  }, [uid]);

  let namemoth = ''
  if (currentmonth == 10){
    namemoth = "ตุลาคม"
  }
  console.log(namemoth)


  return (
    <SafeAreaView style={styles.container}>
      {renterArr.map((item) => {
        return (
          <View style={[styles.box, styles.shadowProp]}>
            <Text style={[styles.text, {fontSize:19, color:"#FF9699"}]}>
              หอพัก : <Text>{item.data.dor_name}</Text>
            </Text>
            <Text style={[styles.text, {fontSize:19, color:"#FF9699"}]}>
              ประเภทห้อง : <Text>{item.data.dor_type}</Text>
            </Text>
            <Text style={[styles.text, {fontSize:19, color:"#FF9699"}]}>
              เลขห้อง : <Text>{item.data.num_room}</Text>
            </Text>
            <Text></Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 1 : <Text>{item.data.name1}</Text>
            </Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 2 : <Text>{item.data.name2}</Text>
            </Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 3 : <Text>{item.data.name3}</Text>
            </Text>
            <Text style={styles.text}>
              ชื่อผู้เช่า 4 : <Text>{item.data.name4}</Text>
            </Text>
          </View>
        );
      })}

      {paymentArr.map((item) => {
        return (
          <View style={[styles.box, styles.shadowProp]}>
            <Text
              style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}
            >{namemoth}</Text>
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
          </View>
        );
      })}

      {paymentArr.map((item) => {
        return (
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
                  navigation.navigate("PaymentRenter", { data: paymentArr, month: namemoth });
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
                  navigation.navigate("HistoryRenter", { data: item });
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
        );
      })}

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

  // componentDidMount() {
  //   const dbRef = firebase.firestore().collection("renters").doc("user3");
  //   const dbMonths = dbRef.collection("months");

  //   dbRef
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         const userData = doc.data();
  //         this.setState({ userArr: [userData], isLoading: false });
  //         console.log(userData);
  //       } else {
  //         this.setState({ isLoading: false });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error getting user data:", error);
  //     });

  // dbMonths
  // .get()
  // .then((doc) => {
  //   if (doc.exists) {
  //     const monthsData = doc.data();
  //     this.setState({ userArr: [monthsData], isLoading: false });
  //     console.log(monthsData)
  //   } else {
  //     this.setState({ isLoading: false });
  //   }
  // })
  // .catch((error) => {
  //   console.error("Error getting user data:", error);
  // });

  // dbRef.onSnapshot(
  //   (querySnapshot) => {
  //     const all_data = [];
  //     querySnapshot.forEach((res) => {
  //       const { name1, name2, name3, name4,  } =
  //         res.data();
  //       all_data.push({
  //         key: res.id,
  //         jan,
  //         feb,
  //         mar,
  //         apr,
  //         may,
  //         jun,
  //         jul,
  //         aug,
  //         sep,
  //         oct,
  //         nov,
  //         dec,
  //       });
  //     });
  //     this.setState({ userArr: all_data, isLoading: false });
  //     console.log(all_data);
  //   },
  //   (error) => {
  //     console.error("Error getting subcollection data:", error);
  //   }
  // );

  // dbMonths.onSnapshot(
  //   (querySnapshot) => {
  //     const all_months = [];
  //     querySnapshot.forEach((res) => {
  //       const { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec } =
  //         res.data();
  //       all_months.push({
  //         key: res.id,
  //         jan,
  //         feb,
  //         mar,
  //         apr,
  //         may,
  //         jun,
  //         jul,
  //         aug,
  //         sep,
  //         oct,
  //         nov,
  //         dec,
  //       });
  //     });
  //     this.setState({ monthsArr: all_months, isLoading: false });
  //     console.log(all_months);
  //   },
  //   (error) => {
  //     console.error("Error getting subcollection data:", error);
  //   }
  // );
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
