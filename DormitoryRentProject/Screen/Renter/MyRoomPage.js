import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { ListItem } from "react-native-elements";
import DormitoryHeader from "../../component/DormitoryHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const MyRoomPage = () =>  {
    return (
      
      <SafeAreaView style={styles.container}>

        {this.state.userArr.map((item, i) => {
          return(
              <View style={styles.box} key={i}>
                <Text style={styles.text}>ชื่อผู้เช่า 1 : {item.name1}</Text>
                <Text style={styles.text}>ชื่อผู้เช่า 2 : {item.name2}</Text>
                <Text></Text>
                <Text style={styles.text}>หอพัก : {item.dor_name}</Text>
                <Text style={styles.text}>เลขห้อง : {item.num_room}</Text>
              </View> 
          );
        })}

        {this.state.userArr.map((item, i) => {
          return(
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
          );
        })}

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate("PaymentRenter");
            }}>
            <Text
              style={[styles.textBtn, { color: "white", textAlign: "center", fontWeight: "bold", fontSize: 15 }]}>
              ชำระค่าเช่า
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => {this.props.navigation.navigate("HistoryRenter")}}>
            <Text
              style={[styles.textBtn, { color: "white", textAlign: "center", fontWeight: "bold", fontSize: 15 }]}>
              ประวัติค่าเช่าหอ
            </Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
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
