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

    this.firestoreRef = firebase.firestore().collection("renters");
    this.state = {
      userArr: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      const {
        name1,
        name2,
        name3,
        name4,
        dor_name,
        dor_price,
        dor_type,
        num_room,
      } = res.data();
      all_data.push({
        key: res.id,
        name1,
        name2,
        name3,
        name4,
        dor_name,
        dor_price,
        dor_type,
        num_room,
      });
    });
    this.setState({
      userArr: all_data,
      isLoading: false,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.userArr.map((item, i) => {
          return(
            <View style={[styles.box, styles.shadowProp]} key={i}>
          <Text style={styles.text}>ชื่อผู้เช่า 1 : <Text style={{fontWeight: 'normal'}}>{item.name1}</Text></Text>
          <Text style={styles.text}>ชื่อผู้เช่า 2 : <Text style={{fontWeight: 'normal'}}>{item.name2}</Text></Text>
          <Text style={styles.text}>ชื่อผู้เช่า 3 : <Text style={{fontWeight: 'normal'}}>{item.name3}</Text></Text>
          <Text style={styles.text}>ชื่อผู้เช่า 4 : <Text style={{fontWeight: 'normal'}}>{item.name4}</Text></Text>
          <Text></Text>
          <Text style={styles.text}>หอพัก : <Text style={{fontWeight: 'normal'}}>{item.dor_name}</Text></Text>
          <Text style={styles.text}>ประเภทห้อง : <Text style={{fontWeight: 'normal'}}>{item.dor_type}</Text></Text>
          <Text style={styles.text}>เลขห้อง : <Text style={{fontWeight: 'normal'}}>{item.num_room}</Text></Text>
        </View>
          )
        })}

        {this.state.userArr.map((item, i) => {
          return(
            <View style={[styles.box, styles.shadowProp]}>
            <Text style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}>
              กันยายน
            </Text>
            <Text></Text>
            <Text style={styles.text}>ค่าเช่าหอพัก : <Text style={{fontWeight: 'normal'}}>{item.dor_price} </Text>บาท</Text>
            <Text style={styles.text}>ค่าน้ำ : บาท</Text>
            <Text style={styles.text}>ค่าไฟ : บาท</Text>
            <Text></Text>
            <Text style={[styles.text, { color: "#FF9699" }]}>
              รวมทั้งสิ้น : บาท
            </Text>
          </View>
          )
        })}
      
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("PaymentRenter");
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
              navigation.navigate("HistoryRenter");
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
