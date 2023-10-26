import { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { launchImageLibrary } from 'react-native-image-picker';

const PaymentRenter = ({ route, navigation }) => {
  const paymentArr = route.params.data
  const month = route.params.month
  console.log(paymentArr)

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
          <View>
            <View style={{ alignItems: "center" }}>
            {paymentArr.map((item) => {
              return (
                <View style={[styles.box, styles.shadowProp]}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}
                  >{month}</Text>
                  <Text></Text>
                  <Text style={styles.text}>
                    ค่าเช่าหอพัก : <Text>{item.rent}</Text>บาท
                  </Text>
                  <Text style={styles.text}>
                    ค่าน้ำ : <Text>{parseInt(item.water)*18}</Text>บาท ( {item.water} หน่วย ) <Text> </Text>
                  </Text>
                  <Text style={styles.text}>
                    ค่าไฟ : <Text>{parseInt(item.light)*8}</Text>บาท ( {item.light} หน่วย )<Text> </Text>
                  </Text>
                  <Text></Text>
                  <Text style={[styles.text, { color: "#FF9699", fontSize:20 }]}>
                    รวมทั้งสิ้น : <Text>{parseInt(item.rent)+(parseInt(item.water)*18)+(parseInt(item.light)*8)}</Text>บาท
                  </Text>
                </View>
              );
            })}
            </View>
            <View style={{ alignItems: "center", margin: 10 }}>
              <Image
                style={styles.img}
                source={require("../../assets/qr-code.png")}
              ></Image>
              <Text
                style={[styles.text, { textAlign: "center", marginTop: "5%" }]}
              >
                แจ้งชำระค่าเช่า
              </Text>
              <TouchableOpacity style={[styles.btn1, styles.shadowProp]}>
                <Text style={[styles.text, { textAlign: "center" }]}>
                  อัปโหลดไฟล์รูปภาพ
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPressIn={}>
                <Text
                  style={[styles.text, { textAlign: "center", color: "white" }]}
                >
                  ยืนยัน
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    </SafeAreaView>
  );
};

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
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#363C56",
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
    marginTop: "10%",
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
