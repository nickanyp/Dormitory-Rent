import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Ionicons, Fontisto, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons'; 
import { color } from "react-native-elements/dist/helpers";
import DormitoryHeader from "../../component/DormitoryHeader";
import { PieChart } from "react-native-chart-kit";
import { BarChart } from "react-native-gifted-charts";
import { useEffect, useState } from "react";
import {firebase, initializeApp} from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";

const RenterDashAll = (props) => {
  const renter = props.renter
  const [paymentArr, setPayment] = useState([]);
  const [pastArr, setPPast] = useState([]);
  const [price, setPrice] = useState(0);
  const [water, setWater] = useState(0);
  const [light, setLight] = useState(0);
  const [fine, setFine] = useState(0);
  const [p_price, setPastPrice] = useState(0);
  const [p_water, setPastWater] = useState(0);
  const [p_light, setPastLight] = useState(0);
  const [p_fine, setPastFine] = useState(0);
  const today = new Date();
  const day = today.getDate();
  let currentmonth = today.getMonth();
  if (day >= 26) {
    currentmonth += 1;
  }

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const fetchData = async () => {
      const querySnapshot = await getDocs(query(collection(db, "payment"), 
      where("code", "==", renter.code), where('room', '==', renter.num_room),
      where('month', '==', currentmonth)));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
        setPrice(parseInt(doc.data().price))
        setLight(parseInt(doc.data().light))
        setWater(parseInt(doc.data().water))
        setFine(parseInt(doc.data().fine))
      });
      setPayment(data);

      const PastSnapshot = await getDocs(query(collection(db, "payment"), 
      where("code", "==", renter.code), where('room', '==', renter.num_room),
      where('month', '==', currentmonth-1)));
      const data2 = [];
      PastSnapshot.forEach((doc) => {
        data2.push({ id: doc.id, ...doc.data() });
        setPastPrice(parseInt(doc.data().price))
        setPastLight(parseInt(doc.data().light))
        setPastWater(parseInt(doc.data().water))
        setPastFine(parseInt(doc.data().fine))
      });
      setPPast(data2);
    }
    fetchData();
  }, [renter])

  console.log(paymentArr[0])
  console.log(pastArr)

  const data = [
    {
      name: "ค่าห้องพัก",
      population: price,
      color: "#D2687B",
      legendFontColor: "#D2687B",
      legendFontSize: 15,
      legendFontWeight: "bold"
    },
    {
      name: "ค่าไฟฟ้า",
      population: parseInt(light)*8,
      color: "#F2AD5C",
      legendFontColor: "#F2AD5C",
      legendFontSize: 15
    },
    {
      name: "ค่าน้ำ",
      population: parseInt(water)*18,
      color: "#88A2E4",
      legendFontColor: "#88A2E4",
      legendFontSize: 15
    },
    {
      name: "ค่าปรับ",
      population: fine,
      color: "#F64B4B",
      legendFontColor: "#F64B4B",
      legendFontSize: 15
    }
  ];

  const barData = [
    {value: parseInt(light), label: <MaterialIcons name="lightbulb-outline" size={20} color="#363C56" />},
    {value: parseInt(p_light), label: <MaterialIcons name="lightbulb-outline" size={20} color="#363C56" />, frontColor: '#C7C7C7'},
    {value: parseInt(water), label: <Ionicons name="water-outline" size={20} color="#363C56" />},
    {value: parseInt(p_water), label: <Ionicons name="water-outline" size={20} color="#363C56" />, frontColor: '#C7C7C7'},
    {value: parseInt(fine), label: <MaterialIcons name="attach-money" size={20} color="#363C56" />},
    {value: parseInt(p_fine), label: <MaterialIcons name="attach-money" size={20} color="#363C56" />, frontColor: '#C7C7C7'}
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
          <Text style={{fontSize: 45, fontWeight: 'bold', color:"#363C56"}}>ห้อง {renter.num_room}</Text>
          <Text style={{margin:10, color:"#7a7a7a", fontWeight:"bold"}}>ประจำงวดเดือน {currentmonth} / 2566</Text>
          <View style={[styles.block1, styles.shadowProp, {backgroundColor: 'white'}]}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>ค่าชำระทั้งหมด {price+(parseInt(water)*18)+(parseInt(light)*8)+fine} ฿</Text>
          </View>
          <View style={styles.detail1}>
            <View>
              <View style={styles.detail2}>
                <Ionicons name="home-outline" size={30} color="#363C56" />
                <Text style={{margin:10, fontWeight:"bold", color:"#363C56"}}>ค่าห้องพัก</Text>
                <View style={[styles.blockprice, styles.shadowProp, {backgroundColor: 'white'}]}>
                  <Text style={{fontWeight: "bold", fontSize:15}}> {price} บาท</Text>
                </View>
              </View>
              <View style={styles.detail2}>
                <MaterialIcons name="lightbulb-outline" size={30} color="#363C56" />
                <Text style={{margin:10, fontWeight:"bold", color:"#363C56"}}>ค่าไฟฟ้า</Text>
                <View style={[styles.blockprice2, styles.shadowProp, {backgroundColor: 'white'}]}>
                  <Text style={{fontWeight: "bold", fontSize:15}}> {parseInt(light)*8} บาท</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.detail2}>
                <MaterialIcons name="attach-money" size={30} color="#363C56" />
                <Text style={{margin:10, fontWeight:"bold", color:"#363C56"}}>ค่าปรับ</Text>
                <View style={[styles.blockprice3, styles.shadowProp, {backgroundColor: 'white'}]}>
                  <Text style={{fontWeight: "bold", fontSize:15}}> {parseInt(water)*18} บาท</Text>
                </View>
              </View>
              <View style={styles.detail2}>
                <Ionicons name="water-outline" size={30} color="#363C56" />
                <Text style={{margin:10, fontWeight:"bold", color:"#363C56"}}>ค่าน้ำ</Text>
                <View style={[styles.blockprice4, styles.shadowProp, {backgroundColor: 'white'}]}>
                  <Text style={{fontWeight: "bold", fontSize:15}}> {fine} บาท</Text>
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
                maxValue= {500}
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
