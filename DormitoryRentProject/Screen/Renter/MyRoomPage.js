import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../../database/FirebaseConfig";

class MyRoomPage extends Component {
  constructor() {
    super();

    // this.firestoreRef = firebase.firestore().collection("renters");
    this.state = {
      userArr: [],
      monthsArr: []
    };
  }

  componentDidMount() {
    const dbRef = firebase.firestore().collection("renters").doc("user3");
    const dbMonths = dbRef.collection("months");

    dbRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          this.setState({ userArr: [userData], isLoading: false });
          console.log(userData);
        } else {
          this.setState({ isLoading: false });
        }
      })
      .catch((error) => {
        console.error("Error getting user data:", error);
      });

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

    dbMonths.onSnapshot(
      (querySnapshot) => {
        const all_months = [];
        querySnapshot.forEach((res) => {
          const { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec } =
            res.data();
          all_months.push({
            key: res.id,
            jan,
            feb,
            mar,
            apr,
            may,
            jun,
            jul,
            aug,
            sep,
            oct,
            nov,
            dec,
          });
        });
        this.setState({ monthsArr: all_months, isLoading: false });
        console.log(all_months);
      },
      (error) => {
        console.error("Error getting subcollection data:", error);
      }
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.userArr.map((item, i) => {
          return (
            <View style={[styles.box, styles.shadowProp]} key={i}>
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
              <Text></Text>
              <Text style={styles.text}>
                หอพัก : <Text>{item.dor_name}</Text>
              </Text>
              <Text style={styles.text}>
                ประเภทห้อง : <Text>{item.dor_type}</Text>
              </Text>
              <Text style={styles.text}>
                เลขห้อง : <Text>{item.num_room}</Text>
              </Text>
            </View>
          );
        })}

        {this.state.monthsArr.map((item, i) => {
          return (
            <View style={[styles.box, styles.shadowProp]}>
              <Text
                style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}
              >{item.oct[0]}</Text>
              <Text></Text>
              <Text style={styles.text}>
                ค่าเช่าหอพัก : <Text>{item.oct[3]} </Text>บาท
              </Text>
              <Text style={styles.text}>
                ค่าน้ำ : <Text> {item.oct[1]} </Text>บาท <Text> ( {item.oct[1]/10} หน่วย)</Text>
              </Text>
              <Text style={styles.text}>
                ค่าไฟ : <Text> {item.oct[2]} </Text>บาท <Text> ( {item.oct[2]/8} หน่วย)</Text>
              </Text>
              <Text></Text>
              <Text style={[styles.text, { color: "#FF9699" }]}>
                รวมทั้งสิ้น : <Text> {item.oct[1]+item.oct[2]+item.oct[3]} </Text>บาท
              </Text>
            </View>
          );
        })}

        <View style={{ alignItems: "center", marginTop: 15 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate("PaymentRenter");
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
              this.props.navigation.navigate("HistoryRenter");
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
      </SafeAreaView>
    );
  }
}

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
