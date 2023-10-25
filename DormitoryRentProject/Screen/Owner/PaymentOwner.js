import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native'
import React, { useState, useEffect, Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { BarChart } from "react-native-gifted-charts";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseConfig } from '../../database/FirebaseConfig';


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class PaymentOwner extends Component {
  constructor() {
    super()
    this.firestoreRef = firebase.firestore().collection("owners");
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
        address,
      } = res.data();
      all_data.push({
        key: res.id,
        address,
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
        {this.state.userArr.map((item, i)=> {
          return(
            <View style={styles.block1}>
            <View style={styles.block2} key={i}>
              <Text style={{ fontSize: 40, fontWeight: "bold", color: "#96B3FF" }}>กัลยรัตน์ 1</Text>
              <Text style={{ color: "#96B3FF" }}>{item.address}</Text>
            </View>
            <View style={styles.block3}>
              <View style={styles.circle}>
                <Image style={styles.img} source={require('../../assets/dormitory.png')} />
              </View>
            </View>
          </View>
          )
        })}


      <View style={{ alignItems: "center", marginTop: '10%'}}>
        <TouchableOpacity
          style={[styles.btn, styles.shadowProp, { borderColor: "#9B9B9B" }]}
          onPress={() => {navigation.navigate("InformPayment")}}
        >
          <Text style={[styles.text, {color: "#363C56", fontSize: 16}]}>แจ้งชำระค่าเช่า</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.shadowProp, { borderColor: "#9B9B9B" }]}
          onPress={() => {navigation.navigate("StatusPayment")}}
        >
          <Text style={[styles.text, {color: "#363C56", fontSize: 16}]}>สถานะการชำระค่าเช่า</Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
                style={styles.pic}
                source={require("../../assets/blue.png")}
            />
            </View>
      </View>

    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
  },
  block1:{
    width: 350,
    height:130,
    flexDirection:"row",
    marginTop: '20%'
  },
  block2:{
    flex:6,
    paddingLeft:10,
  },
  block3:{
    flex:3
  },
  circle:{
    width:100,
    height:100,
    borderWidth:1.5,
    borderColor:"#96B3FF",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    marginTop:5
  },
  img:{
    width:50,
    height:50
  },
  scrollmonth:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:5
  },
  btn: {
    width: 220,
    height: 50,
    fontSize: 30,
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    margin: 5,
    marginTop: 15,
    alignItems: "center",
    borderColor: "#96B3FF",
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
    textAlign: "center",
    justifyContent: 'center'
  },
  pic: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    position: "absolute",
    bottom: -450,
  },
})

export default PaymentOwner;