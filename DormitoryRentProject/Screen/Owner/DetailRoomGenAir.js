import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const DetailRoomGenAir = ({route}) => {
    const dormitory = route.params.dormitory
    const room = route.params.room
    const emp = route.params.emp
    const full = route.params.full
    const pay = route.params.pay
    const notpay = route.params.notpay
    const data = [
      {value: 0, label:"พ.ค."}, 
      {value: 0, label:"มิ.ย."}, 
      {value: 0, label:"ก.ค."}, 
      {value: 0, label:"ส.ค."}, 
      {value: 0, label:"ก.ย."}, 
      {value: 0, label:"ต.ค."}
    ];

    let payincome = 0;
    let notpayincome = 0;
    for (let i = 0; i < pay.length; i++){
      payincome += (parseInt(pay[i].light)*parseInt(dormitory.light));
      payincome += (parseInt(pay[i].water)*parseInt(dormitory.water));
      payincome += parseInt(pay[i].price);
      console.log(dormitory)
    }
    for (let i = 0; i < notpay.length; i++){
      notpayincome += (parseInt(notpay[i].light)*parseInt(dormitory.light));
      notpayincome += (parseInt(notpay[i].water)*parseInt(dormitory.water));
      notpayincome += parseInt(notpay[i].price);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={{justifyContent:"center", alignItems:"center", width:"100%",marginBottom:10}}>
                    <View style={styles.block1}>
                        <View style={styles.block2}>
                        <Text style={{fontSize:22, fontWeight:"bold", color:"#96B3FF"}}>ห้องธรรมดาปรับอากาศ</Text>
                        <Text style={{color:"#96B3FF"}}>จำนวนห้อง {room.length} ห้อง</Text>
                        <Text style={{color:"#96B3FF"}}>ห้องว่าง {emp.length} ห้อง ห้องมีผู้เช่าแล้ว {full.length} ห้อง</Text>
                        </View>
                        <View style={styles.block3}>
                        <View style={styles.circle}>
                            <Image style={styles.img} source={require('../../assets/dormitory.png')}/>
                        </View>
                        </View>
                    </View>
                </View>

                <View style={styles.box2}>
                    <View style={styles.box3}>
                        <View style={styles.circle1}>
                            <View style={styles.circle4}>
                            <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>{room.length}</Text>
                            </View>
                        </View>
                        <Text>ห้องทั้งหมด</Text>
                    </View>
                    <View style={styles.box3}>
                        <View style={styles.circle2}>
                            <View style={styles.circle4}>
                            <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>{emp.length}</Text>
                            </View>
                        </View>
                        <Text>ห้องว่าง</Text>
                    </View>
                    <View style={styles.box3}>
                        <View style={styles.circle3}>
                            <View style={styles.circle4}>
                            <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>{full.length}</Text>
                            </View>
                        </View>
                    <Text>มีผู้เช่า</Text>
                    </View>
                </View>

                <Text style={{color:'#96B3FF',fontWeight:'bold', fontSize:18, margin:15}}>ห้องว่าง</Text>
                <View style={{flexDirection:'row', flexWrap: 'wrap', width:340}}>
                    {emp.map((item, i) => {
                      return(
                        <View key={i} style={{width:60, height:30, marginLeft:15, borderWidth:1.5, borderColor:"#96B3FF", borderRadius:50, justifyContent:"center", alignItems:"center",}}>
                          <Text style={{color:'#363C56',fontWeight:'bold', fontSize:15}} key={i}>{item.room}</Text>
                        </View>
                      )
                    })}
                </View>

                <Text style={{color:'#96B3FF',fontWeight:'bold', fontSize:18, margin:15}}>ห้องมีผู้เช่า</Text>
                <View style={{flexDirection:'row', flexWrap: 'wrap', width:340}}>
                    {full.map((item, i) => {
                      return(
                        <View key={i} style={{width:60, height:30, marginLeft:15, borderWidth:1.5, borderColor:"#96B3FF", borderRadius:50, justifyContent:"center", alignItems:"center",}}>
                          <Text style={{color:'#363C56',fontWeight:'bold', fontSize:15}} key={i}>{item.room}</Text>
                        </View>
                      )
                    })}
                </View>
                <View style={{ width:320,height: 1, backgroundColor: 'transparent', marginTop:15}} />
                <Text style={{fontSize:25, fontWeight:"bold", color:"#363C56", marginTop:15}}>ยอดชำระ {parseInt(payincome)+parseInt(notpayincome)} บาท</Text>
                <View style={styles.block4}>
                    <View style={[styles.box4, {borderColor:"#90DA83"}]}>
                        <Text style={{fontSize:13, fontWeight:"bold", color:"#363C56"}}>ชำระแล้ว</Text>
                        <Text style={{fontSize:18, fontWeight:"bold", color:"#90DA83"}}>{payincome} บาท</Text>
                    </View>
                        <View style={[styles.box4, {borderColor:"#FF9699"}]}>
                        <Text style={{fontSize:13, fontWeight:"bold", color:"#363C56"}}>ยังไม่ชำระ</Text>
                        <Text style={{fontSize:18, fontWeight:"bold", color:"#FF9699"}}>{notpayincome} บาท</Text>
                    </View>
                </View>

                <View style={[styles.box2, {height: 127,marginTop:20, alignItems:"start", paddingTop:10}]}>
                    <View style={styles.box3}>
                        <View style={[styles.circle1, {backgroundColor:"#90DA83"}]}>
                            <View style={styles.circle4}>
                            <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>{pay.length}</Text>
                            </View>
                        </View>
                        <Text>ชำระแล้ว</Text>
                    </View>
                    
                    <View style={styles.box3}>
                        <View style={[styles.circle3, {backgroundColor:"#F64B4B"}]}>
                            <View style={[styles.circle4]}>
                            <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>{notpay.length}</Text>
                            </View>
                        </View>
                      <Text>ยังไม่ชำระ</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginTop:10}}>
                  <View style={{margin:10}}>
                    <Text style={{fontWeight:'bold', fontSize:18, color:'#363C56'}}>ห้องที่ชำระแล้ว</Text>
                    <View style={{ height: 1, backgroundColor: 'black', marginBottom:10}} />
                    {pay.map((item, i) => {
                      return(
                        <Text style={{color:'#363C56',fontWeight:'bold', fontSize:15, margin:3}} key={i}>{item.room}</Text>
                      )
                    })}
                  </View>
                  <View style={{margin:10}}>
                    <Text style={{fontWeight:'bold', fontSize:18, color:'#363C56'}}>ห้องที่ยังไม่ชำระ</Text>
                    <View style={{ height: 1, backgroundColor: 'black', marginBottom:10 }} />
                    {notpay.map((item, i) => {
                      return(
                        <Text style={{color:'#363C56',fontWeight:'bold', fontSize:15, margin:3}} key={i}>{item.room}</Text>
                      )
                    })}
                  </View>
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
    marginTop:8,
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
    // backgroundColor:"#ff0"
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
  box2:{
    width:335,
    height:140,
    borderColor:"#96B3FF",
    borderRadius:20,
    borderWidth:1.5,    
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
  circle1:{
    width:80,
    height:80,
    borderRadius:50,
    backgroundColor:"#88A2E4",
    marginBottom:5,
    justifyContent:"center",
    alignItems:"center"
  },
  circle2:{
    width:80,
    height:80,
    borderRadius:50,
    backgroundColor:"#90DA84",
    marginBottom:5,
    justifyContent:"center",
    alignItems:"center"
  },
  circle3:{
    width:80,
    height:80,
    borderRadius:50,
    backgroundColor:"#FF9699",
    marginBottom:5,
    justifyContent:"center",
    alignItems:"center"
  },
  circle4:{
    width:69,
    height:69,
    borderRadius:50,
    backgroundColor:"#FFF",
    justifyContent:"center",
    alignItems:"center"
  },
  block4:{
    flexDirection:"row",
    marginTop:10,
    // justifyContent:"center",
    alignItems:"center"
  },
  box4:{
    width:160,
    height:60,
    borderRadius:60,
    borderWidth:1.3,
    margin:5,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#363C56"
  },

});
export default DetailRoomGenAir
