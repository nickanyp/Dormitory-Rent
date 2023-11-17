import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  Fontisto,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { color } from "react-native-elements/dist/helpers";
import DormitoryHeader from "../../component/DormitoryHeader";
import { LineChart } from "react-native-chart-kit";
import { BarChart } from "react-native-gifted-charts";
import { useEffect, useState } from "react";
import {firebase, initializeApp} from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";


const DashboardFine = (props) => {
  const renter =props.renter
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
  const year = today.getFullYear();
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

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `#363C56`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    labels: [((currentmonth-1).toString()+ '/' + (year).toString()), (currentmonth.toString()+ '/' + year.toString())],
    datasets: [
      {
        data: [p_fine, fine],
        color: (opacity = 1) => `#F64B4B`, // optional
        strokeWidth: 3 // optional
      }
    ]
  };

  const barData = [
    {value: fine, label: (currentmonth.toString()+ '/' + year.toString()), labelTextStyle:{width:70, color:"#fff", marginLeft:50, fontWeight:"bold"}},
    {value: p_fine, label: ((currentmonth-1).toString()+ '/' + (year).toString()), frontColor: 'lightgray', labelMarginTop: 10, labelTextStyle:{width:70, color:"#fff", marginLeft:50, fontWeight:"bold"}},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.block4,
            styles.shadowProp,
            { backgroundColor: "white" },
          ]}
        >
          <Text style={{ fontSize: 19, fontWeight: "bold", color: "#363C56" }}>
            ค่าปรับประจำเดือน {currentmonth} / {year}
          </Text>
        </View>

        <View style={styles.block1}>
          <View  style={{marginLeft:7}}>
            <View style={styles.circle}></View>
            <View style={styles.circle2}>
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "#363C56" }}
              >
                {fine}฿
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#363C56",
                marginBottom: 5,
              }}
            >
              ค่าปรับ : 50 บาท
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#363C56",
                marginBottom: 5,
              }}
            >
              ค่าปรับที่ต้องชำระ : {fine} บาท
            </Text>
          </View>
        </View>

        {/* <View style={styles.block2}>
          <Text style={{fontSize:16, fontWeight:"bold", color:"#fff", marginBottom:10}}>10 หน่วย</Text>
          <View style={styles.box1}>
            <Text>กันยายน</Text>
          </View>
          <Text style={{fontSize:16, fontWeight:"bold", color:"#fff", marginBottom:10}}>12 หน่วย</Text>
          <View style={styles.box2}>
            <Text>สิงหาคม</Text>
          </View>
        </View>  */}

        <View style={styles.block2}>
          <Text
            style={{
              position: "absolute",
              top: 19,
              left: 26,
              color: "#fff",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            {fine} บาท
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 78,
              left: 26,
              color: "#fff",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            {p_fine} บาท
          </Text>
          <BarChart
            horizontal
            barWidth={30}
            barHeight={100}
            barBorderRadius={8}
            frontColor="#F64B4B"
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
            noOfSections={2}
            maxValue={200} //dataเดือนที่มากว่า
            hideAxesAndRules
            spacing={30}
            // backgroundColor='#000'
          />
        </View>

        <View style={styles.block3}>
          <LineChart
            data={data}
            width={320}
            height={160}
            chartConfig={chartConfig}
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
    alignItems: "center",
    backgroundColor: "#fff",
  },
  block1: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor:"#000",
    marginTop: 16,
    marginLeft: -5,
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 360,
    backgroundColor: "#F64B4B",
    marginRight: 20,
  },
  circle2: {
    width: 120,
    height: 120,
    borderRadius: 360,
    backgroundColor: "#fff",
    position: "absolute",
    left: 10,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  block2: {
    width: 320,
    height: 160,
    backgroundColor: "#363C56",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 55,
    paddingTop: 100,
  },
  // box1:{
  //   width: 220,
  //   height:30,
  //   backgroundColor:"#F64B4B",
  //   borderRadius:10,
  //   marginBottom:10,
  //   justifyContent:"center",
  //   paddingLeft:10
  // },
  // box2:{
  //   width: 280,
  //   height:30,
  //   backgroundColor:"#DADADA",
  //   borderRadius:10,
  //   marginBottom:10,
  //   justifyContent:"center",
  //   paddingLeft:10
  // },
  block3: {
    marginTop: 30,
    marginRight: 15,
  },
  block4: {
    width: 280,
    height: 50,
    borderRadius: 40,
    borderColor: "#F64B4B",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  scroll:{
    textAlign:"center",
    // backgroundColor:"#f00"
    justifyContent: "center",
    alignItems: "center",
    marginTop:15
  },
});
export default DashboardFine;
