import { View, Text, StyleSheet, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BarChart } from "react-native-gifted-charts";
import {firebase, initializeApp} from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";


const stackData = [
  {
    stacks: [
      {value: 1, color: '#96B3FF'},
      {value: 1, color: '#D9D9D9'},
    ]
  },
  {
    stacks: [
      {value: 20, color: '#FF9699'},
      {value: 5, color: '#D9D9D9'},
    ]
  },
  {
    stacks: [
      {value: 2, color: '#90DA84'},
      {value: 1, color: '#D9D9D9'},
    ]
  },
  {
    stacks: [
      {value: 6, color: '#F2AD5C'},
      {value: 1, color: '#D9D9D9'},
    ]
  },
  {
    stacks: [
      {value: 3, color: '#E6C0FF'},
      {value: 0, color: '#D9D9D9'},
    ]
  }
];

const OwnerDormitory = ({navigation, route}) => {
  const dormitory = route.params.data
  const today = new Date();
  const day = today.getDate();
  const year = today.getFullYear();
  let month = today.getMonth();
  if (day >= 26) {
    month += 1;
  }
  const [s, setSuite] = useState([]);
  const [se, setSuiteEmp] = useState([]);
  const [sf, setSuiteFull] = useState([]);
  const [ga, setGenair] = useState([]);
  const [gae, setGenairEmp] = useState([]);
  const [gaf, setGenairFull] = useState([]);
  const [gf, setGenfan] = useState([]);
  const [gfe, setGenfanEmp] = useState([]);
  const [gff, setGenfanFull] = useState([]);
  const [ic, setIncome] = useState([]);
  const [p, setPay] = useState([]);
  const [np, setNotPay] = useState([]);
  const [sp, setSuitePay] = useState([]);
  const [snp, setSuiteNotPay] = useState([]);
  const [gap, setGenairPay] = useState([]);
  const [ganp, setGenairNotPay] = useState([]);
  const [gfp, setGenfanPay] = useState([]);
  const [gfnp, setGenfanNotPay] = useState([]);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const fetchData = async () => { 
      const suiteQuery = await getDocs(query(collection(db, 'room'), 
      where('code', '==', dormitory.code), where('type', '==', 'suite')));
      const suite = [];
      const suiteEmp = [];
      const suiteFull = [];
      suiteQuery.forEach((doc) => {
        suite.push({ id: doc.id, ...doc.data() });
        if (doc.data().status == true){
          suiteEmp.push(doc.data());
        }else{
          suiteFull.push(doc.data());
        }
      });
      setSuite(suite)
      setSuiteEmp(suiteEmp)
      setSuiteFull(suiteFull)

      const genairQuery = await getDocs(query(collection(db, 'room'), 
      where('code', '==', dormitory.code), where('type', '==', 'genair')))
      const genair = [];
      const genairEmp = [];
      const genairFull = [];
      genairQuery.forEach((doc) => {
        genair.push({id: doc.id, ...doc.data()});
        if (doc.data().status == true){
          genairEmp.push(doc.data());
        }else{
          genairFull.push(doc.data());
        }
      });
      setGenair(genair)
      setGenairEmp(genairEmp)
      setGenairFull(genairFull)

      const genfanQuery = await getDocs(query(collection(db, 'room'), 
      where('code', '==', dormitory.code), where('type', '==', 'genfan')))
      const genfan = [];
      const genfanEmp = [];
      const genfanFull = [];
      genfanQuery.forEach((doc) => {
        genfan.push({id: doc.id, ...doc.data()});
        if (doc.data().status == true){
          genfanEmp.push(doc.data());
        }else{
          genfanFull.push(doc.data());
        }
      });
      setGenfan(genfan)
      setGenfanEmp(genfanEmp)
      setGenfanFull(genfanFull)

      const incomeQuery =await getDocs(query(collection(db, 'payment'),
      where('code', '==', dormitory.code), where('month', '==', month)))
      const income = [];
      const pay = [];
      const notpay = [];
      const suitepay = [];
      const suitenotpay = [];
      const genairpay = [];
      const genairnotpay = [];
      const genfanpay = [];
      const genfannotpay = [];
      incomeQuery.forEach((doc) => {
        income.push({id:doc.id,  ...doc.data()}); 
        if (doc.data().status == true){
          pay.push(doc.data());
        }else if (doc.data().status == false){
          notpay.push(doc.data());  
        }
        if (doc.data().status == true && doc.data().type == 'suite'){
          suitepay.push(doc.data());
        }else if (doc.data().status == false && doc.data().type == 'suite'){
          suitenotpay.push(doc.data());
        }
        if (doc.data().status == true && doc.data().type == 'genair'){
          genairpay.push(doc.data());
        }else if (doc.data().status == false && doc.data().type == 'genair'){
          genairnotpay.push(doc.data());
        }
        if (doc.data().status == true && doc.data().type == 'genfan'){
          genfanpay.push(doc.data());
        }else if (doc.data().status == false && doc.data().type == 'genfan'){
          genfannotpay.push(doc.data());
        }
      })
      setIncome(income)
      setPay(pay)
      setNotPay(notpay)
      setSuitePay(suitepay)
      setSuiteNotPay(suitenotpay)
      setGenairPay(genairpay)
      setGenairNotPay(genairnotpay)
      setGenfanPay(genfanpay)
      setGenfanNotPay(genfannotpay)
    };

    fetchData();
  }, [dormitory]);

  let payincome = 0;
  let notpayincome = 0;
  for (let i = 0; i < ic.length; i++){
    payincome += (parseInt(ic[i].light)*parseInt(dormitory.light));
    payincome += (parseInt(ic[i].water)*parseInt(dormitory.water));
    payincome += parseInt(ic[i].price);
    console.log(dormitory)
  }
  for (let i = 0; i < np.length; i++){
    notpayincome += (parseInt(np[i].light)*parseInt(dormitory.light));
    notpayincome += (parseInt(np[i].water)*parseInt(dormitory.water));
    notpayincome += parseInt(np[i].price);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width:"100%"}}>
        <View style={{justifyContent:"center", alignItems:"center", width:"100%", marginTop:"14%",marginBottom:10}}>
          <View style={styles.block1}>
            <View style={styles.block2}>
              <Text style={{fontSize:40, fontWeight:"bold", color:"#96B3FF"}}>{dormitory.name}</Text>
              <Text style={{color:"#96B3FF"}}>{dormitory.address}</Text>
              <Text style={{color:"#9e9e9e", marginTop:5}}>code : {dormitory.code}</Text>
            </View>
            <View style={styles.block3}>
              <View style={styles.circle}>
                <Image style={styles.img} source={require('../../assets/dormitory.png')}/>
              </View>
            </View>
          </View>
        </View>
      
        <View style={{alignItems:"center", marginBottom:15}}>
          <View style={[styles.hori]}>
            <View style={{justifyContent:'center', alignItems:"center"}}>
              <Image style={styles.img} source={require('../../assets/air-conditioner.png')}/>
              <Text style={{color:"#363C56"}}>ห้องปรับอากาศ</Text>
            </View>
            <View style={{marginLeft:40,justifyContent:'center', flexDirection:"row", alignItems:"center"}}>
              <View>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>ห้องสูท</Text>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>ห้องธรรมดา</Text>
                {/* <Text style={{color:'#363C56', fontWeight:"bold"}}>ห้องเดี่ยว</Text> */}
              </View>
              <View style={{marginLeft:20}}>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>{s.length}</Text>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>{ga.length}</Text>
                {/* <Text style={{color:'#363C56', fontWeight:"bold"}}>{item.emp_oneair}/{parseInt(item.oneair)+parseInt(item.emp_oneair)}</Text> */}
              </View>
              <View style={{marginLeft:10}}>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>ห้อง</Text>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>ห้อง</Text>
                {/* <Text style={{color:'#363C56', fontWeight:"bold"}}>ห้อง</Text> */}
              </View>
            </View>
          </View>

          <View style={[styles.hori, {marginTop:10}]}>
            <View style={{justifyContent:'center', alignItems:"center"}}>
              <Image style={styles.img2} source={require('../../assets/fan.png')}/>
              <Text style={{color:"#363C56"}}>ห้องพัดลม</Text>
            </View>
            <View style={{marginLeft:40,justifyContent:'center', flexDirection:"row", alignItems:"center"}}>
              <View style={{justifyContent:"center"}}>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>ห้องธรรมดา</Text>
                {/* <Text style={{color:'#363C56', fontWeight:"bold"}}>ห้องเดี่ยว</Text> */}
              </View>
              <View style={{marginLeft:20, justifyContent:"center"}}>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>{gf.length}</Text>
                {/* <Text style={{color:'#363C56', fontWeight:"bold"}}>{item.emp_onefan}/{parseInt(item.onefan)+parseInt(item.emp_onefan)}</Text> */}
              </View>
              <View style={{marginLeft:10, justifyContent:"center"}}>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>ห้อง</Text>
                {/* <Text style={{color:'#363C56', fontWeight:"bold"}}>ห้อง</Text> */}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.month}>
          <Text style={{color:"#fff", fontSize:22, fontWeight:"bold"}}>{month} / {year}</Text>
        </View>
      
        <View style={styles.center}>
          <Text style={{fontSize:25, fontWeight:"bold", color:"#363C56", marginTop:20, marginBottom:5}}>รวมยอดชำระ {payincome.toString()} บาท</Text>
          <View style={styles.block4}>
            <View style={[styles.box2]}>
              <Text style={{fontSize:13, fontWeight:"bold", color:"#363C56"}}>ชำระแล้ว</Text>
              <Text style={{fontSize:18, fontWeight:"bold", color:"#90DA83"}}>{(payincome-notpayincome).toString()} บาท</Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={{fontSize:13, fontWeight:"bold", color:"#363C56"}}>ยังไม่ชำระ</Text>
              <Text style={{fontSize:18, fontWeight:"bold", color:"#FF9699"}}>{notpayincome.toString()} บาท</Text>
            </View>
          </View>

          <View style={[styles.block4, {marginTop:0}]}>
            <View style={[styles.block4]}>
              <View style={[styles.dot, {backgroundColor:"#90DA83"}]}></View>
              <Text style={{color:"#363C56", fontWeight:"bold"}}>ชำระแล้ว</Text>
              <Text style={{color:"#363C56", fontWeight:"bold", marginTop:4, marginLeft:5}}>{p.length}</Text>
            </View>
            {/* <View style={[styles.block4]}>
              <View style={[styles.dot, {backgroundColor:"#F2AD5C"}]}></View>
              <Text style={{color:"#363C56", fontWeight:"bold"}}>รอการยืนยัน</Text>
              <Text style={{color:"#363C56", fontWeight:"bold", marginTop:4, marginLeft:5}}>0</Text>
            </View> */}
            <View style={[styles.block4]}>
              <View style={[styles.dot, {backgroundColor:"#F64B4B"}]}></View>
              <Text style={{color:"#363C56", fontWeight:"bold"}}>ยังไม่ชำระ</Text>
              <Text style={{color:"#363C56", fontWeight:"bold", marginTop:4, marginLeft:5}}>{np.length}</Text>
            </View>
          </View>

          <View style={[styles.block4, {marginTop:10}]}>
            <TouchableOpacity style={styles.room} onPress={() => {navigation.navigate("DetailRoomSuite", 
            {room: s, emp: se, full: sf, pay: sp, notpay: snp})}}>
              <Text style={{fontWeight:"bold", color:"#363C56"}}>ห้องสูท</Text>
              <Image style={styles.img} source={require('../../assets/air-conditioner.png')}/>
              <View style={[styles.block4, {marginTop:0}]}>
                <View style={[styles.dot2, {backgroundColor:"#90DA83"}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>{sp.length}</Text>
                <View style={[styles.dot2, {backgroundColor:"#F64B4B", marginLeft:10}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>{snp.length}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.room} onPress={() => {navigation.navigate("DetailRoomGenAir",
            {room: ga, emp: gae, full: gaf, pay: gap, notpay: ganp})}}>
              <Text style={{fontWeight:"bold", color:"#363C56"}}>ห้องธรรมดา</Text>
              <Image style={styles.img} source={require('../../assets/air-conditioner.png')}/>
              <View style={[styles.block4, {marginTop:0}]}>
                <View style={[styles.dot2, {backgroundColor:"#90DA83"}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>{gap.length}</Text>
                <View style={[styles.dot2, {backgroundColor:"#F64B4B", marginLeft:10}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>{ganp.length}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.room} onPress={() => {navigation.navigate("DetailRoomGenFan",
            {room: gf, emp: gfe, full: gff, pay: gfp, notpay: gfnp})}}>
              <Text style={{fontWeight:"bold", color:"#363C56"}}>ห้องธรรมดา</Text>
              <Image style={[styles.img, {width:35, height:35, marginTop:7.5, marginBottom:7.5}]} source={require('../../assets/fan.png')}/>
              <View style={[styles.block4, {marginTop:0}]}>
                <View style={[styles.dot2, {backgroundColor:"#90DA83"}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>{gfp.length}</Text>
                <View style={[styles.dot2, {backgroundColor:"#F64B4B", marginLeft:10}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>{gfnp.length}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.block4}>
            <View>
              <View style={styles.circle2}>
                <View style={styles.circle3}>
                  <Text style={{fontSize:25, fontWeight:"bold", color:"#363C56"}}>0 ฿</Text>
                </View>
              </View>
              <View style={[styles.block4, {justifyContent:"center", marginTop:0}]}>
                <View style={[styles.dot, {backgroundColor:"#F64B4B"}]}></View>
                <Text style={{color:"#363C56", fontWeight:"bold", color:"#363C56"}}>ค่าปรับ</Text>
              </View>
            </View>
            <View style={{marginLeft:10}}>
              <Text style={{marginLeft:30, fontSize:20, fontWeight:"bold", color:"#363C56", marginBottom:12, marginTop:-15}}>ชำระเงินล่าช้า</Text>
              <Text style={{marginLeft:30, fontSize:17, color:"#363C56", marginBottom: 5}}>1     -</Text>
              <Text style={{marginLeft:30, fontSize:17, color:"#363C56", marginBottom: 5}}>2     -</Text>
              <Text style={{marginLeft:30, fontSize:17, color:"#363C56"}}>3     -</Text>
            </View>
          </View> 
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#fff"
  },
  center:{
    justifyContent:"center",
    alignItems:"center"
  },
  block1:{
    width: 350,
    height:130,
    // backgroundColor:"#f0f",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  block2:{
    flex:6,
    paddingLeft:10,
  },
  block3:{
    flex:3,
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
  circle2:{
    width:130,
    height:130,
    backgroundColor:"#F64B4B",
    borderRadius:80,
    justifyContent:"center",
    alignItems:"center",
    marginTop:5
  },
  circle3:{
    width:115,
    height:115,
    backgroundColor:"#fff",
    borderRadius:80,
    justifyContent:"center",
    alignItems:"center",
  },
  img:{
    width:50,
    height:50
  },
  img2:{
    width:40,
    height:40,
    marginBottom:5
  },
  month:{
    width: "100%",
    height:50,
    backgroundColor: "#96B3FF",
    alignItems:"center",
    justifyContent:"center"
  },
  scrollmonth:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:5
  },
  hori:{
    flexDirection:"row",
    borderWidth:1.5,
    width:320,
    height:100,
    justifyContent:"center",
    borderColor:"#96B3FF",
    borderRadius:10
  },
  box:{
    width:150,
    height:30,
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center"
  },
  box2:{
    width:160,
    height:60,
    borderRadius:60,
    borderWidth:1.5,
    margin:5,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#363C56"
  },
  block4:{
    flexDirection:"row",
    marginTop:10,
    // justifyContent:"center",
    alignItems:"center"
  },
  dot:{
    width:20,
    height:20,
    borderRadius:5,
    margin:8
  },
  dot2:{
    width:10,
    height:10,
    borderRadius:2,
  },
  boxmonth:{
    width:65,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    borderRadius:5
  },
  room:{
    width:100,
    height:100,
    borderColor:"#363C56",
    borderRadius:10,
    borderWidth:1.5,
    margin:8,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  }
});

export default OwnerDormitory

{/* <ScrollView contentContainerStyle={styles.scrollmonth} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Pressable style={[styles.boxmonth, {backgroundColor:"transparent"}]}>
              <Text style={{fontWeight:"bold", fontSize:17, color:"#363C56"}}>มิ.ย.</Text>
            </Pressable>
            <Pressable style={[styles.boxmonth, {backgroundColor:"transparent"}]}>
              <Text style={{fontWeight:"bold", fontSize:17, color:"#363C56"}}>ก.ค.</Text>
            </Pressable> 
            <Pressable style={[styles.boxmonth, {backgroundColor:"transparent"}]}>
              <Text style={{fontWeight:"bold", fontSize:17, color:"#363C56"}}>ส.ค.</Text>
            </Pressable>
            <Pressable style={[styles.boxmonth, {backgroundColor:"transparent"}]}>
              <Text style={{fontWeight:"bold", fontSize:17, color:"#363C56"}}>ก.ย.</Text>
            </Pressable> 
            <Pressable style={styles.boxmonth}>
              <Text style={{fontWeight:"bold", fontSize:17, color:"#363C56"}}>ต.ค.</Text>
            </Pressable>
          </ScrollView> */}
{/* <Text style={{marginLeft:10, fontSize:30, fontWeight:"bold", color:"#363C56"}}>ห้องว่าง</Text> */}