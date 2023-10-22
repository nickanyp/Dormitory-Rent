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
import firebase from "../../database/FirebaseConfig";
import { ListItem } from "react-native-elements";
import DormitoryHeader from "../../component/DormitoryHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const HistoryRenter = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>ชื่อผู้เช่า 1 : </Text>
        <Text style={styles.text}>ชื่อผู้เช่า 2 : </Text>
        <Text></Text>
        <Text style={styles.text}>หอพัก : </Text>
        <Text style={styles.text}>เลขห้อง : </Text>
      </View>

      <View style={styles.box}>
        <Text style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}>
          กันยายน
        </Text>
        <Text></Text>
        <Text style={styles.text}>ค่าเช่าหอพัก : บาท</Text>
        <Text style={styles.text}>ค่าน้ำ : บาท</Text>
        <Text style={styles.text}>ค่าไฟ : บาท</Text>
        <Text></Text>
        <Text style={[styles.text, { color: "#FF9699" }]}>
          รวมทั้งสิ้น : บาท
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
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

export default HistoryRenter;
