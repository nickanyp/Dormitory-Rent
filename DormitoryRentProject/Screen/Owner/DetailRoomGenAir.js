import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const DetailRoomGenAir = () => {
    const data = [{value: 0, label:"พ.ค."}, {value: 1, label:"มิ.ย."}, {value: 2, label:"ก.ค."}, {value: 1, label:"ส.ค."}, {value: 1, label:"ก.ย."}, {value: 0, label:"ต.ค."}];
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={{justifyContent:"center", alignItems:"center", width:"100%",marginBottom:10}}>
                    <View style={styles.block1}>
                        <View style={styles.block2}>
                        <Text style={{fontSize:22, fontWeight:"bold", color:"#96B3FF"}}>ห้องธรรมดาปรับอากาศ</Text>
                        <Text style={{color:"#96B3FF"}}>จำนวนห้อง 2 ห้อง</Text>
                        <Text style={{color:"#96B3FF"}}>ห้องว่าง 1 ห้อง ห้องมีผู้เช่าแล้ว 1 ห้อง</Text>
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

                <Text style={{fontSize:25, fontWeight:"bold", color:"#363C56", marginTop:15}}>ยอดชำระ 11,000 บาท</Text>
                <View style={styles.block4}>
                    <View style={[styles.box4, {borderColor:"#90DA83"}]}>
                        <Text style={{fontSize:13, fontWeight:"bold", color:"#363C56"}}>ชำระแล้ว</Text>
                        <Text style={{fontSize:18, fontWeight:"bold", color:"#90DA83"}}>5,500 บาท</Text>
                    </View>
                        <View style={[styles.box4, {borderColor:"#FF9699"}]}>
                        <Text style={{fontSize:13, fontWeight:"bold", color:"#363C56"}}>ยังไม่ชำระ</Text>
                        <Text style={{fontSize:18, fontWeight:"bold", color:"#FF9699"}}>5,500 บาท</Text>
                    </View>
                </View>

                <View style={[styles.box2, {marginTop:20}]}>
                    <View style={styles.box3}>
                        <View style={[styles.circle1, {backgroundColor:"#90DA83"}]}>
                            <View style={styles.circle4}>
                            <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>40</Text>
                            </View>
                        </View>
                        <Text>ชำระแล้ว</Text>
                    </View>
                    <View style={styles.box3}>
                        <View style={[styles.circle2, {backgroundColor:'#F2AD5C'}]}>
                            <View style={styles.circle4}>
                            <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>2</Text>
                            </View>
                        </View>
                        <Text>รอการยืนยัน</Text>
                    </View>
                    <View style={styles.box3}>
                        <View style={[styles.circle3, {backgroundColor:"#F64B4B"}]}>
                            <View style={[styles.circle4]}>
                            <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>38</Text>
                            </View>
                        </View>
                    <Text>ยังไม่ชำระ</Text>
                    </View>
                </View>

                <Text style={{fontSize:25, fontWeight:"bold", color:"#363C56", marginTop:15, marginBottom:10}}>ชำระเงินล่าช้า</Text>
                <LineChart
                    data={data}
                    color={'#F64B4B'}
                    thickness={3}
                    dataPointsColor={'red'}
                    width={280}
                    height={100}
                    rulesType="solid"
                    maxValue={5}
                    noOfSections={5}
                />
                <View style={[styles.block4, {marginTop:20, justifyContent:"center", marginBottom:30}]}>
                    <View style={{alignItems:"center", marginRight:30, borderWidth:1, padding:10, borderRadius:20, borderColor:"#F64B4B"}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>ลำดับ</Text>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"#363C56"}}>การชำระล่าช้า</Text>
                    </View>
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <Text style={{fontSize:18, fontWeight:"bold", color:"#96B3FF"}}>1</Text>
                        <Text style={{fontSize:18, fontWeight:"bold", color:"#96B3FF"}}>2</Text>
                    </View>
                    <View style={{marginLeft:15, justifyContent:"center", alignItems:"center"}}>
                        <Text style={{fontSize:18, fontWeight:"bold", color:"#363C56"}}>A201</Text>
                        <Text style={{fontSize:18, fontWeight:"bold", color:"#363C56"}}>A202</Text>
                    </View>
                    <View style={{marginTop:-1, marginLeft:15,justifyContent:"center", alignItems:"center"}}>
                        <Text style={{fontSize:17, fontWeight:"bold", color:"#363C56"}}>1 ครั้ง</Text>
                        <Text style={{fontSize:17, fontWeight:"bold", color:"#363C56"}}>2 ครั้ง</Text>
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
