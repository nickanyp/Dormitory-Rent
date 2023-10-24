import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Ionicons, Fontisto, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons'; 
import { color } from "react-native-elements/dist/helpers";
import DormitoryHeader from "../../component/DormitoryHeader";
import { PieChart } from "react-native-chart-kit";
import { BarChart } from "react-native-gifted-charts";

const RenterDashAll = () => {
  const data = [
    {
      name: "ค่าห้องพัก",
      population: 5500,
      color: "#D2687B",
      legendFontColor: "#D2687B",
      legendFontSize: 15,
      legendFontWeight: "bold"
    },
    {
      name: "ค่าไฟฟ้า",
      population: 1440,
      color: "#F2AD5C",
      legendFontColor: "#F2AD5C",
      legendFontSize: 15
    },
    {
      name: "ค่าน้ำ",
      population: 200,
      color: "#88A2E4",
      legendFontColor: "#88A2E4",
      legendFontSize: 15
    },
    {
      name: "ค่าปรับ",
      population: 100,
      color: "#F64B4B",
      legendFontColor: "#F64B4B",
      legendFontSize: 15
    }
  ];

  const barData = [
    {value: 20, label: <MaterialIcons name="lightbulb-outline" size={20} color="#363C56" />},
    {value: 30, label: <MaterialIcons name="lightbulb-outline" size={20} color="#363C56" />, frontColor: '#C7C7C7'},
    {value: 3, label: <Ionicons name="water-outline" size={20} color="#363C56" />},
    {value: 2, label: <Ionicons name="water-outline" size={20} color="#363C56" />, frontColor: '#C7C7C7'},
    {value: 1, label: <MaterialIcons name="attach-money" size={20} color="#363C56" />},
    {value: 0, label: <MaterialIcons name="attach-money" size={20} color="#363C56" />, frontColor: '#C7C7C7'}
  ];

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `#363C56`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <Text style={{fontSize: 45, fontWeight: 'bold', color:"#363C56"}}>ห้อง A226</Text>
          <Text style={{margin:10, color:"#7a7a7a", fontWeight:"bold"}}>ประจำงวดเดือน ตุลาคม 2566</Text>
          <View style={[styles.block1, styles.shadowProp, {backgroundColor: 'white'}]}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>ค่าชำระทั้งหมด 7,390 ฿</Text>
          </View>
          <View style={styles.detail1}>
            <View>
              <View style={styles.detail2}>
                <Ionicons name="home-outline" size={30} color="#363C56" />
                <Text style={{margin:10, fontWeight:"bold", color:"#363C56"}}>ค่าห้องพัก</Text>
                <View style={[styles.blockprice, styles.shadowProp, {backgroundColor: 'white'}]}>
                  <Text style={{fontWeight: "bold", fontSize:15}}> 5,500 บาท</Text>
                </View>
              </View>
              <View style={styles.detail2}>
                <MaterialIcons name="lightbulb-outline" size={30} color="#363C56" />
                <Text style={{margin:10, fontWeight:"bold", color:"#363C56"}}>ค่าไฟฟ้า</Text>
                <View style={[styles.blockprice2, styles.shadowProp, {backgroundColor: 'white'}]}>
                  <Text style={{fontWeight: "bold", fontSize:15}}> 1,440 บาท</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.detail2}>
                <MaterialIcons name="attach-money" size={30} color="#363C56" />
                <Text style={{margin:10, fontWeight:"bold", color:"#363C56"}}>ค่าปรับ</Text>
                <View style={[styles.blockprice3, styles.shadowProp, {backgroundColor: 'white'}]}>
                  <Text style={{fontWeight: "bold", fontSize:15}}> 100 บาท</Text>
                </View>
              </View>
              <View style={styles.detail2}>
                <Ionicons name="water-outline" size={30} color="#363C56" />
                <Text style={{margin:10, fontWeight:"bold", color:"#363C56"}}>ค่าน้ำ</Text>
                <View style={[styles.blockprice4, styles.shadowProp, {backgroundColor: 'white'}]}>
                  <Text style={{fontWeight: "bold", fontSize:15}}> 200 บาท</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <PieChart
              data={data}
              width={360}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={10}
            />
            <View style={styles.cirle}></View>
          </View>
          <Text style={{fontWeight:"bold", color:"#363C56", fontSize:16, marginTop:5}}>เปรียบเทียบระหว่าง เดือนปัจุบันและเดือนที่แล้ว</Text>
          <View style={{marginTop:18, marginBottom:25 }}>
            <View style={styles.blockbar}>
              <View style={styles.dot}></View>
              <Text style={{color:"#90DA83", fontWeight:"bold", fontSize:16, marginLeft:5, marginRight:15}}>ตุลาคม</Text>
              <View style={styles.dot2}></View>
              <Text style={{color:"#C7C7C7", fontWeight:"bold", fontSize:16, marginLeft:5}}>กันยายน</Text>
            </View>
            <BarChart
                barWidth={25}
                noOfSections={5}
                barBorderRadius={4}
                frontColor="#90DA83"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                maxValue={50}
                stepHeight={30}
                hideRules
            />
          </View>
        </ScrollView>
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
  scroll:{
    textAlign:"center",
    // backgroundColor:"#f00"
    justifyContent: "center",
    alignItems: "center",
    marginTop:15
  },
  block1: {
    width: 250,
    height:60,
    borderWidth: 2,
    borderRadius: 50,
    borderColor:"#363C56",
    alignItems:"center",
    justifyContent: "center",
    margin:10,
  },
  detail1:{
    display: "flex",
    flex:1,
    flexDirection: "row",
    width: 280,
    height: 270,
    // backgroundColor:"#f00",
    marginTop:15
  },
  detail2:{
    width:130,
    height: 135,
    // backgroundColor: "#0f0",
    alignItems:"center",
    marginLeft:5,
    marginRight:5
  },
  blockprice:{
    width:100,
    height:40,
    borderWidth: 1.8,
    borderRadius: 50,
    borderColor:"#D2687B",
    alignItems:"center",
    justifyContent: "center",
  },
  blockprice2:{
    width:100,
    height:40,
    borderWidth: 1.8,
    borderRadius: 50,
    borderColor:"#F2AD5C",
    alignItems:"center",
    justifyContent: "center",
  },
  blockprice3:{
    width:100,
    height:40,
    borderWidth: 1.8,
    borderRadius: 50,
    borderColor:"#F64B4B",
    alignItems:"center",
    justifyContent: "center",
  },
  blockprice4:{
    width:100,
    height:40,
    borderWidth: 1.8,
    borderRadius: 50,
    borderColor:"#88A2E4",
    alignItems:"center",
    justifyContent: "center",
  },
  cirle:{
    width:100,
    height:100,
    borderRadius:360,
    backgroundColor:"#fff",
    position:"absolute",
    left:50
  },
  blockbar:{
    flexDirection:"row",
    justifyContent:"center"
  },
  dot:{
    width:11,
    height:11,
    borderRadius:50,
    backgroundColor:"#90DA83",
    marginTop:7
  },
  dot2:{
    width:11,
    height:11,
    borderRadius:50,
    backgroundColor:"#C7C7C7",
    marginTop:7
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

});
export default RenterDashAll
