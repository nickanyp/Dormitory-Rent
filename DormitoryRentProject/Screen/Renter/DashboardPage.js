import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Pressable } from "react-native";
import { Ionicons, Fontisto, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons'; 
import { color } from "react-native-elements/dist/helpers";
import DormitoryHeader from "../../component/DormitoryHeader";
import { PieChart, StackedBarChart } from "react-native-chart-kit";
import RenterDashAll from "./DashboardAll";

const RenterDashPage = () => {

  let content = <RenterDashAll/>

  // let colorselect = "#363C56"
  let color = "#DADADA"
  let color2 = "#DADADA"
  let color3 = "#DADADA"
  let color4 = "#DADADA"

  // if(content)

  return (
      <SafeAreaView style={styles.container}>
        <View style={{position: 'absolute', width: 300, top: 55, alignItems: 'center'}}>
          <DormitoryHeader/>
        </View>
        <View style={{marginTop:30, marginBottom:10, display:"flex", flexDirection:"row"}}>
          <Pressable style={styles.button}>
            <Text style={{fontWeight:"bold"}}>รวมทั้งหมด</Text>
          </Pressable>
          <Pressable style={styles.button2}>
            <Text style={{fontWeight:"bold"}}>ไฟฟ้า</Text>
          </Pressable>
          <Pressable style={styles.button3}>
            <Text style={{fontWeight:"bold"}}>น้ำ</Text>
          </Pressable>
          <Pressable style={styles.button4}>
            <Text style={{fontWeight:"bold"}}>ค่าปรับ</Text>
          </Pressable>
        </View>
        {content}
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#fff"
  },
  button:{
    width:90,
    height:40,
    backgroundColor:{color},
    // borderColor:"#363C56",
    // borderWidth:2,
    borderRadius:20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  },
  button2:{
    width:70,
    height:40,
    backgroundColor: {color},
    // borderColor:"#363C56",
    // borderWidth:2,
    borderRadius:20,
    justifyContent: "center",
    alignItems: "center",
  },
  button3:{
    width:70,
    height:40,
    backgroundColor:{color},
    // borderColor:"#363C56",
    // borderWidth:2,
    borderRadius:20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft:5
  },
  button4:{
    width:80,
    height:40,
    backgroundColor:{color},
    // borderColor:"#363C56",
    // borderWidth:2,
    borderRadius:20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft:5
  }
});
export default RenterDashPage
