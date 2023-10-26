import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BarChart } from "react-native-gifted-charts";

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
  const item = route.params.data
  console.log(item)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width:"100%"}}>
        <View style={{justifyContent:"center", alignItems:"center", width:"100%", marginTop:"14%",marginBottom:10}}>
          <View style={styles.block1}>
            <View style={styles.block2}>
              <Text style={{fontSize:40, fontWeight:"bold", color:"#96B3FF"}}>{item.data.name}</Text>
              <Text style={{color:"#96B3FF"}}>{item.data.address}</Text>
              <Text style={{color:"#9e9e9e", marginTop:5}}>code : {item.data.code}</Text>
            </View>
            <View style={styles.block3}>
              <View style={styles.circle}>
                <Image style={styles.img} source={require('../../assets/dormitory.png')}/>
              </View>
            </View>
          </View>
        </View>
      
        {/* <Text style={{marginLeft:10, fontSize:30, fontWeight:"bold", color:"#363C56"}}>ห้องว่าง</Text> */}
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
                <Text style={{color:'#363C56', fontWeight:"bold"}}>ห้องเดี่ยว</Text>
              </View>
              <View style={{marginLeft:20}}>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>{item.data.emp_suite}/{parseInt(item.data.suite)+parseInt(item.data.emp_suite)}</Text>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>{item.data.emp_genair}/{parseInt(item.data.genair)+parseInt(item.data.emp_genair)}</Text>
                <Text style={{color:'#363C56', fontWeight:"bold"}}>{item.data.emp_oneair}/{parseInt(item.data.oneair)+parseInt(item.data.emp_oneair)}</Text>
              </View>
              <View style={{marginLeft:10}}>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>ห้อง</Text>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>ห้อง</Text>
                <Text style={{color:'#363C56', fontWeight:"bold"}}>ห้อง</Text>
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
                <Text style={{color:'#363C56', fontWeight:"bold"}}>ห้องเดี่ยว</Text>
              </View>
              <View style={{marginLeft:20, justifyContent:"center"}}>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>{item.data.emp_genfan}/{parseInt(item.data.genfan)+parseInt(item.data.emp_genfan)}</Text>
                <Text style={{color:'#363C56', fontWeight:"bold"}}>{item.data.emp_onefan}/{parseInt(item.data.onefan)+parseInt(item.data.emp_onefan)}</Text>
              </View>
              <View style={{marginLeft:10, justifyContent:"center"}}>
                <Text style={{color:'#363C56', fontWeight:"bold", marginBottom:5}}>ห้อง</Text>
                <Text style={{color:'#363C56', fontWeight:"bold"}}>ห้อง</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.month}>
          <Text style={{color:"#fff", fontSize:22, fontWeight:"bold"}}>ตุลาคม 2566</Text>
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
        </View>
      
        <View style={styles.center}>
          <Text style={{fontSize:25, fontWeight:"bold", color:"#363C56", marginTop:20, marginBottom:5}}>รวมยอดชำระ 14,550 บาท</Text>
          <View style={styles.block4}>
            <View style={[styles.box2]}>
              <Text style={{fontSize:13, fontWeight:"bold", color:"#363C56"}}>ชำระแล้ว</Text>
              <Text style={{fontSize:18, fontWeight:"bold", color:"#90DA83"}}>9,700 บาท</Text>
            </View>
            <View style={[styles.box2]}>
              <Text style={{fontSize:13, fontWeight:"bold", color:"#363C56"}}>ยังไม่ชำระ</Text>
              <Text style={{fontSize:18, fontWeight:"bold", color:"#FF9699"}}>4,850 บาท</Text>
            </View>
          </View>

          <View style={[styles.block4, {marginTop:0}]}>
            <View style={[styles.block4]}>
              <View style={[styles.dot, {backgroundColor:"#90DA83"}]}></View>
              <Text style={{color:"#363C56", fontWeight:"bold"}}>ชำระแล้ว</Text>
              <Text style={{color:"#363C56", fontWeight:"bold", marginTop:4, marginLeft:5}}>2</Text>
              
            </View>
            <View style={[styles.block4]}>
              <View style={[styles.dot, {backgroundColor:"#F2AD5C"}]}></View>
              <Text style={{color:"#363C56", fontWeight:"bold"}}>รอการยืนยัน</Text>
              <Text style={{color:"#363C56", fontWeight:"bold", marginTop:4, marginLeft:5}}>0</Text>
            </View>
            <View style={[styles.block4]}>
              <View style={[styles.dot, {backgroundColor:"#F64B4B"}]}></View>
              <Text style={{color:"#363C56", fontWeight:"bold"}}>ยังไม่ชำระ</Text>
              <Text style={{color:"#363C56", fontWeight:"bold", marginTop:4, marginLeft:5}}>1</Text>
            </View>
          </View>

          <View style={[styles.block4, {marginTop:10}]}>
            <Pressable style={styles.room} onPressIn={() => {navigation.navigate("DetailRoomSuite")}}>
              <Text style={{fontWeight:"bold", color:"#363C56"}}>ห้องสูท</Text>
              <Image style={styles.img} source={require('../../assets/air-conditioner.png')}/>
              <View style={[styles.block4, {marginTop:0}]}>
                <View style={[styles.dot2, {backgroundColor:"#90DA83"}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>0</Text>
                <View style={[styles.dot2, {backgroundColor:"#F64B4B", marginLeft:10}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>0</Text>
              </View>
            </Pressable>
            <Pressable style={styles.room} onPressIn={() => {navigation.navigate("DetailRoomGenAir")}}>
              <Text style={{fontWeight:"bold", color:"#363C56"}}>ห้องธรรมดา</Text>
              <Image style={styles.img} source={require('../../assets/air-conditioner.png')}/>
              <View style={[styles.block4, {marginTop:0}]}>
                <View style={[styles.dot2, {backgroundColor:"#90DA83"}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>2</Text>
                <View style={[styles.dot2, {backgroundColor:"#F64B4B", marginLeft:10}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>1</Text>
              </View>
            </Pressable>
            <Pressable style={styles.room} onPressIn={() => {navigation.navigate("DetailRoomGenFan")}}>
              <Text style={{fontWeight:"bold", color:"#363C56"}}>ห้องธรรมดา</Text>
              <Image style={[styles.img, {width:35, height:35, marginTop:7.5, marginBottom:7.5}]} source={require('../../assets/fan.png')}/>
              <View style={[styles.block4, {marginTop:0}]}>
                <View style={[styles.dot2, {backgroundColor:"#90DA83"}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>0</Text>
                <View style={[styles.dot2, {backgroundColor:"#F64B4B", marginLeft:10}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>0</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.block4, {marginTop:0}]}>
            <Pressable style={styles.room} onPressIn={() => {navigation.navigate("DetailRoomOneAir")}}>
              <Text style={{fontWeight:"bold", color:"#363C56"}}>ห้องเดี่ยว</Text>
              <Image style={styles.img} source={require('../../assets/air-conditioner.png')}/>
              <View style={[styles.block4, {marginTop:0}]}>
                <View style={[styles.dot2, {backgroundColor:"#90DA83"}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>0</Text>
                <View style={[styles.dot2, {backgroundColor:"#F64B4B", marginLeft:10}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>0</Text>
              </View>
            </Pressable>
            <Pressable style={styles.room} onPressIn={() => {navigation.navigate("DetailRoomOneFan")}}>
              <Text style={{fontWeight:"bold", color:"#363C56"}}>ห้องเดี่ยว</Text>
              <Image style={[styles.img, {width:35, height:35, marginTop:7.5, marginBottom:7.5}]} source={require('../../assets/fan.png')}/>
              <View style={[styles.block4, {marginTop:0}]}>
                <View style={[styles.dot2, {backgroundColor:"#90DA83"}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>0</Text>
                <View style={[styles.dot2, {backgroundColor:"#F64B4B", marginLeft:10}]}></View>
                <Text style={{marginLeft:5, color:"#363C56"}}>0</Text>
              </View>
            </Pressable>
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