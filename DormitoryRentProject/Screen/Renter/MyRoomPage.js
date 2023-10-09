import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

class MyRoomPage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>ชื่อผู้เช่า 1 : อนัญพร จอมคำ</Text>
          <Text style={styles.text}>ชื่อผู้เช่า 2 : ตรียา เอื้อเจริญศรี</Text>
          <Text></Text>
          <Text style={styles.text}>หอพัก : กัลยรัตน์ 2</Text>
          <Text style={styles.text}>เลขห้อง : 226</Text>
        </View>

        <View style={styles.box}>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}>
            กันยายน
          </Text>
          <Text></Text>
          <Text style={styles.text}>ค่าเช่าหอพัก : 4600 บาท</Text>
          <Text style={styles.text}>ค่าน้ำ : 150 บาท</Text>
          <Text style={styles.text}>ค่าไฟ : 1200 บาท</Text>
          <Text></Text>
          <Text style={[styles.text, { color: "#FF9699" }]}>
            รวมทั้งสิ้น : 5950 บาท
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate("PaymentRenter");
            }}>
            <Text
              style={[styles.textBtn, { color: "white", textAlign: "center" }]}>
              ชำระค่าเช่า
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => {this.props.navigation.navigate("HistoryRenter")}}>
            <Text
              style={[styles.textBtn, { color: "white", textAlign: "center" }]}>
              ประวัติค่าเช่าหอ
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
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
  btn: {
    width: 120,
    height: 40,
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
