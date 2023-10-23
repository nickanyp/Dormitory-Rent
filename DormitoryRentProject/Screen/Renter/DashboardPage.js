import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Pressable } from "react-native";
import { Ionicons, Fontisto, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons'; 
import { color } from "react-native-elements/dist/helpers";
import DormitoryHeader from "../../component/DormitoryHeader";
import { PieChart, StackedBarChart } from "react-native-chart-kit";
import RenterDashAll from "./DashboardAll";
import DashboardLight from "./DashboardLight";
import DashboardFine from "./DashboardFine";
import DashboardWater from "./DashboardWater";

var RenterDashPage = () => {
  const [thisScreen, setScreen] = useState(0)

  let content = <RenterDashAll/>

  // let colorselect = "#363C56"
  let color = "transparent"
  let color2 = "transparent"
  let color3 = "transparent"
  let color4 = "transparent"
  
  let tcolor = "#363C56"
  let tcolor2 = "#363C56"
  let tcolor3 = "#363C56"
  let tcolor4 = "#363C56"

  if (thisScreen == 0){
    content = <RenterDashAll/>
    color="#363C56"
    tcolor="#fff"
  }else if (thisScreen == 1){
    content = <DashboardLight/>
    color2="#363C56"
    tcolor2="#fff"
  }else if (thisScreen == 2) {
    content = <DashboardWater/>
    color3="#363C56"
    tcolor3="#fff"
  }else if (thisScreen == 3) {
    content = <DashboardFine/>
    color4="#363C56"
    tcolor4="#fff"
  }

  return (
      <SafeAreaView style={styles.container}>
        <View style={{marginTop:20, marginBottom:10, display:"flex", flexDirection:"row"}}>
          <Pressable style={{width:90,
            height:40,
            backgroundColor: color,
            borderColor:"#363C56",
            borderWidth:2,
            borderRadius:20,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5}} onPress={() => {setScreen(0)}}>
            <Text style={{fontWeight:"bold", color: tcolor}}>รวมทั้งหมด</Text>
          </Pressable>
          <Pressable style={{width:90,
            height:40,
            backgroundColor: color2,
            borderColor:"#363C56",
            borderWidth:2,
            borderRadius:20,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5}} onPress={() => {setScreen(1)}}>
            <Text style={{fontWeight:"bold", color: tcolor2}}>ไฟฟ้า</Text>
          </Pressable>
          <Pressable style={{width:90,
            height:40,
            backgroundColor: color3,
            borderColor:"#363C56",
            borderWidth:2,
            borderRadius:20,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5}} onPress={() => {setScreen(2)}}>
            <Text style={{fontWeight:"bold", color: tcolor3}}>น้ำ</Text>
          </Pressable>
          <Pressable style={{width:90,
            height:40,
            backgroundColor: color4,
            borderColor:"#363C56",
            borderWidth:2,
            borderRadius:20,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5}} onPress={() => {setScreen(3)}}>
            <Text style={{fontWeight:"bold", color: tcolor4}} >ค่าปรับ</Text>
          </Pressable>
        </View>
        {content}
      </SafeAreaView>
  );
};

var styles = StyleSheet.create({
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
    backgroundColor: "#DADADA",
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
