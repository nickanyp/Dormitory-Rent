import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HistoryRenter = ({ route, navigation }) => {
  const item = route.params.data;
  console.log(item);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.box, styles.shadowProp]}>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}>
            กันยายน
          </Text>
          <Text></Text>
          <Text style={[styles.text, {marginHorizontal: 0}]}>ค่าเช่าหอพัก : บาท</Text>
          <Text style={[styles.text, {marginHorizontal: 0}]}>ค่าน้ำ : บาท</Text>
          <Text style={[styles.text, {marginHorizontal: 0}]}>ค่าไฟ : บาท</Text>
          <Text></Text>
          <View style={{ flexDirection: "row" , backgroundColor: 'yellow'}}>
            <Text style={[styles.text, { color: "#FF9699", flex: 2 }]}>
              รวมทั้งสิ้น : บาท
            </Text>
            <Text style={[styles.text, { color: "#69CC6D", flex: 1}]}>ยืนยันแล้ว</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '15%'
  },
  box: {
    width: "100%",
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#9B9B9B",
    padding: 20,
    backgroundColor: "white",
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
