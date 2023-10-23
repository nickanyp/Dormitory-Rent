import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Ionicons, Fontisto, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons'; 
import { color } from "react-native-elements/dist/helpers";
import DormitoryHeader from "../../component/DormitoryHeader";
import { LineChart } from "react-native-chart-kit";

const DashboardFine = () => {

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `#363C56`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["5/66", "6/66", "7/66", "8/66", "9/66"],
    datasets: [
      {
        data: [0, 100, 150, 50, 100],
        color: (opacity = 1) => `#F64B4B`, // optional
        strokeWidth: 3 // optional
      }
    ]
  };

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.block4}>
          <Text style={{fontSize:19, fontWeight:"bold", color:"#363C56"}}>ค่าปรับประจำเดือนกันยายน</Text>
        </View>

        <View style={styles.block1}>
          <View>
            <View style={styles.circle}></View>
            <View style={styles.circle2}>
              <Text style={{fontSize:30, fontWeight:"bold", color:"#363C56"}}>100฿</Text>
            </View>
          </View>
          <View style={{justifyContent:"center"}}>
            <Text style={{fontSize:16, fontWeight:"bold",  color:"#363C56", marginBottom:5}}>ค่าปรับ : 50 บาท/วัน</Text>
            <Text style={{fontSize:16, fontWeight:"bold",  color:"#363C56", marginBottom:5}}>จำนวนวัน : 2 วัน</Text>
            <Text style={{fontSize:16, fontWeight:"bold",  color:"#363C56", marginBottom:5}}>รวมทั้งหมด : 100 บาท</Text>
          </View>
        </View>

        <View style={styles.block2}>
          <Text style={{fontSize:16, fontWeight:"bold", color:"#fff", marginBottom:10}}>10 หน่วย</Text>
          <View style={styles.box1}>
            <Text>กันยายน</Text>
          </View>
          <Text style={{fontSize:16, fontWeight:"bold", color:"#fff", marginBottom:10}}>12 หน่วย</Text>
          <View style={styles.box2}>
            <Text>สิงหาคม</Text>
          </View>
        </View> 

        <View style={styles.block3}>
          <LineChart
            data={data}
            width={320}
            height={160}
            chartConfig={chartConfig}
          />
        </View>
        
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:"#fff"
  },
  block1: {
    display:"flex",
    flexDirection:"row",
    // backgroundColor:"#000",
    marginTop:16,
    marginLeft:-5
  },
  circle: {
    width:150,
    height:150,
    borderRadius:360,
    backgroundColor:"#F64B4B",
    marginRight:20
  },
  circle2: {
    width:130,
    height:130,
    borderRadius:360,
    backgroundColor:"#fff",
    position:"absolute",
    left: 10,
    top:10,
    justifyContent:"center",
    alignItems:"center"
  },
  block2:{
    width:320,
    height:180,
    backgroundColor:"#363C56",
    borderRadius:10,
    marginTop:20,
    justifyContent:"center",
    padding:20  
  },
  box1:{
    width: 220,
    height:30,
    backgroundColor:"#F64B4B",
    borderRadius:10,
    marginBottom:10,
    justifyContent:"center",
    paddingLeft:10
  },
  box2:{
    width: 280,
    height:30,
    backgroundColor:"#DADADA",
    borderRadius:10,
    marginBottom:10,
    justifyContent:"center",
    paddingLeft:10
  },
  block3:{
    marginTop:30
  }, 
  block4:{
    width:280,
    height:50,
    borderRadius:40,
    borderColor: "#F64B4B",
    borderWidth:2,
    justifyContent:"center",
    alignItems: "center",
    marginTop:15
  }


});
export default DashboardFine
