import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'; 

const OwnerHome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.box} >
          <Pressable style={styles.block} onPress={() => {navigation.navigate("OwnerDormitory")}}>
            <Text style={{fontSize:35, fontWeight:"bold", color:"#fff"}}>กัลยรัตน์ 1</Text>
            <AntDesign name="rightcircleo" size={24} color="#fff" style={styles.button}/>
          </Pressable>
          <View style={styles.box2}>
            <View style={styles.box3}>
              <View style={styles.circle}>
                <View style={styles.circle4}>
                  <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>40</Text>
                </View>
              </View>
              <Text>ห้องทั้งหมด</Text>
            </View>
            <View style={styles.box3}>
              <View style={styles.circle2}>
                <View style={styles.circle4}>
                <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>2</Text>
                </View>
              </View>
              <Text>ห้องว่าง</Text>
            </View>
            <View style={styles.box3}>
              <View style={styles.circle3}>
                <View style={styles.circle4}>
                <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>38</Text>
                </View>
              </View>
              <Text>มีผู้เช่า</Text>
            </View>
          </View>
          <View style={styles.block}>
            <Text style={{marginRight:10, fontSize:18, color:"#fff", fontWeight:"bold"}}>ชำระแล้ว: 35</Text>
            <Text style={{fontSize:18, color:"#fff", fontWeight:"bold"}}>ยังไม่ชำระ: 35</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  scroll:{
    // textAlign:"center",
    // backgroundColor:"#f00",
    // alignItems:"center",
    marginTop:15
  },
  box:{
    width:350,
    height:260,
    backgroundColor:"#96B3FF",
    borderRadius:20,
    margin:10,
    alignItems:"center",
    justifyContent:"center"
  },
  box2:{
    width:300,
    height:120,
    backgroundColor:"#fff",
    borderRadius:20,
    margin:15,
    flexDirection:"row",
    justifyContent:'center',
    alignItems:"center"
  },
  box3:{
    justifyContent:'center',
    alignItems:"center",
    marginLeft:10,
    marginRight:10
  },
  circle:{
    width:70,
    height:70,
    borderRadius:50,
    backgroundColor:"#88A2E4",
    marginBottom:5,
    justifyContent:"center",
    alignItems:"center"
  },
  circle2:{
    width:70,
    height:70,
    borderRadius:50,
    backgroundColor:"#90DA84",
    marginBottom:5,
    justifyContent:"center",
    alignItems:"center"
  },
  circle3:{
    width:70,
    height:70,
    borderRadius:50,
    backgroundColor:"#FF9699",
    marginBottom:5,
    justifyContent:"center",
    alignItems:"center"
  },
  circle4:{
    width:59,
    height:59,
    borderRadius:50,
    backgroundColor:"#FFF",
    justifyContent:"center",
    alignItems:"center"
  },
  block:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  button:{
    marginTop:6,
    marginLeft: 7
  }
})

export default OwnerHome
{/* <Button title="กัลยรัตน์2" onPress={() => {navigation.navigate("OwnerDormitory")}}></Button> */}