import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'; 
// import * as firebase from "firebase/compat";
import {firebase, initializeApp} from 'firebase/app'; 
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";

const OwnerHome = ({route, navigation}) => {
  const uid = route.params.uid
  const [dormitoryArr, setDormitory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const dormitoryQuery = query(collection(db, 'dormitory'), where('owner_uid', '==', uid));

      try {
        const querySnapshot = await getDocs(dormitoryQuery);

        if (querySnapshot.empty) {
          console.log('No dormitories found');
        } else {
          const dormitories = [];
          querySnapshot.forEach((doc) => {
            dormitories.push({ id: doc.id, data: doc.data() });
          });
          setDormitory(dormitories);
          console.log(dormitoryArr)
        }
      } catch (error) {
        console.error('Error fetching dormitories:', error);
      }
    };

    fetchData();
  }, [uid]);

  console.log(dormitoryArr)
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        {dormitoryArr.map((item)=>{
          return(
            <View style={styles.box} >
              <Pressable style={styles.block} onPress={() => {navigation.navigate("OwnerDormitory", {data: item})}}>
                <Text style={{fontSize:35, fontWeight:"bold", color:"#fff"}}>{item.data.name}</Text>
                <AntDesign name="rightcircleo" size={24} color="#fff" style={styles.button}/>
              </Pressable>
              <View style={styles.box2}>
                <View style={styles.box3}>
                  <View style={styles.circle}>
                    <View style={styles.circle4}>
                      <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>{item.data.room}</Text>
                    </View>
                  </View>
                  <Text>ห้องทั้งหมด</Text>
                </View>
                <View style={styles.box3}>
                  <View style={styles.circle2}>
                    <View style={styles.circle4}>
                    <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>{item.data.empty}</Text>
                    </View>
                  </View>
                  <Text>ห้องว่าง</Text>
                </View>
                <View style={styles.box3}>
                  <View style={styles.circle3}>
                    <View style={styles.circle4}>
                      <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>{item.data.full}</Text>
                    </View>
                  </View>
                  <Text>มีผู้เช่า</Text>
                </View>
              </View>
              <View style={styles.block}>
                <Text style={{marginRight:10, fontSize:18, color:"#fff", fontWeight:"bold"}}>ชำระแล้ว: {item.data.pay}</Text>
                <Text style={{fontSize:18, color:"#fff", fontWeight:"bold"}}>ยังไม่ชำระ: {item.data.notpay}</Text>
              </View>
            </View>
          );
        })}

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "white",
  },
  scroll:{
    // textAlign:"center",
    // backgroundColor:"#f00",
    // alignItems:"center",
    marginTop:15,
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