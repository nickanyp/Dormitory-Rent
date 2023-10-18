import { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import firebase from "../../database/FirebaseDB";
class PaymentRenter extends Component {
  constructor() {
    super();

    this.dbRef = firebase.firestore().collection("renters");
    this.state = {
      isLoading: true,
      userArr: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.dbRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      const {
        name1,
        name2,
        dor_name,
        num_room,
        dor_price,
        water_price,
        elec_price,
      } = res.data();
      all_data.push({
        key: res.id,
        name1,
        name2,
        dor_name,
        num_room,
        dor_price,
        water_price,
        elec_price,
      });
    });
    this.setState({
      userArr: all_data,
      isLoading: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.userArr.map((item, i) => {
        return (
          <View style={{ alignItems: "center" }}>
          <View style={styles.box} key={i}>
            <Text style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}>
              กันยายน
            </Text>
            <Text></Text>
            <Text style={styles.text}>ค่าเช่าหอพัก : {item.dor_price} บาท</Text>
            <Text style={styles.text}>ค่าน้ำ : {item.water_price} บาท</Text>
            <Text style={styles.text}>ค่าไฟ : {item.elec_price} บาท</Text>
            <Text></Text>
            <Text style={[styles.text, { color: "#FF9699" }]}>
              รวมทั้งสิ้น : {item.dor_price + item.water_price + item.elec_price} บาท
            </Text>
          </View>
        </View>
        )
      })}
      
        <View style={{ alignItems: "center", margin: 10 }}>
          <Image
            style={styles.img}
            source={require("../../assets/qr-code.png")}
          ></Image>
          <Text style={[styles.text, { textAlign: "center", margin: 10 }]}>
            แจ้งชำระค่าเช่า
          </Text>
          <TouchableOpacity style={[styles.btn1, styles.shadowProp]} >
            <Text style={[styles.text, { textAlign: "center" }]}>
              อัปโหลดไฟล์รูปภาพ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text style={[styles.text, { textAlign: "center", color: "white" }]}>
              ยืนยัน
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 300,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#9B9B9B",
    padding: 15,
    margin: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
  btn1: {
    width: 190,
    height: 50,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#9B9B9B",
    backgroundColor: "white",
    justifyContent: "center",
    margin: 8,
  },
  btn2: {
    width: 120,
    height: 45,
    borderRadius: 40,
    backgroundColor: "#FF9699",
    justifyContent: "center",
    margin: 8,
  },
  img: {
    width: 200,
    height: 200,
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default PaymentRenter;