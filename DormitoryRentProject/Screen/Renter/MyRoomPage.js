import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { ListItem } from "react-native-elements";
import DormitoryHeader from "../../component/DormitoryHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const MyRoomPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, styles.shadowProp]} >
        <Text style={styles.text}>ชื่อผู้เช่า 1 : </Text>
        <Text style={styles.text}>ชื่อผู้เช่า 2 : </Text>
        <Text></Text>
        <Text style={styles.text}>หอพัก : </Text>
        <Text style={styles.text}>เลขห้อง : </Text>
      </View>

      <View style={[styles.box, styles.shadowProp]} >
        <Text style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}>
          กันยายน
        </Text>
        <Text></Text>
        <Text style={styles.text}>ค่าเช่าหอพัก :  บาท</Text>
        <Text style={styles.text}>ค่าน้ำ :  บาท</Text>
        <Text style={styles.text}>ค่าไฟ :  บาท</Text>
        <Text></Text>
        <Text style={[styles.text, { color: "#FF9699" }]}>
          รวมทั้งสิ้น : {" "}
          บาท
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {navigation.navigate("PaymentRenter")}}
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
          onPress={() => {navigation.navigate("HistoryRenter")}}
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
    backgroundColor: 'white'
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
    color: '#363C56'
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