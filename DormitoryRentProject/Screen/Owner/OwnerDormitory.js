import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BarChart } from "react-native-gifted-charts";

const stackData = [
  {
    stacks: [
      {value: 1, color: 'orange'},
      {value: 1, color: '#4ABFF4'},
    ],
    label: 'ห้องสูทปรับอากาศ',
  },
  {
    stacks: [
      {value: 20, color: '#4ABFF4'},
      {value: 5, color: 'orange'},
    ],
    label: 'ห้องธรรมดาปรับอากาศ',
  },
  {
    stacks: [
      {value: 2, color: 'orange'},
      {value: 1, color: '#4ABFF4'},
    ],
    label: 'ห้องธรรมดาพัดลม',
  },
  {
    stacks: [
      {value: 6, color: '#4ABFF4'},
      {value: 1, color: 'orange'},
    ],
    label: 'ห้องเดี่ยวปรับอากาศ',
  },
  {
    stacks: [
      {value: 3, color: '#4ABFF4'},
      {value: 0, color: 'orange'},
    ],
    label: 'ห้องเดี่ยวพัดลม',
    labelWidth:50
  },
];

const OwnerDormitory = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block1}>
        <View style={styles.block2}>
          <Text style={{fontSize:40, fontWeight:"bold", color:"#96B3FF"}}>กัลยรัตน์ 1</Text>
          <Text style={{color:"#96B3FF"}}>RNP 655/2 ซ.ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร</Text>
        </View>
        <View style={styles.block3}>
          <View style={styles.circle}>
            <Image style={styles.img} source={require('../../assets/dormitory.png')}/>
          </View>
        </View>
      </View>

      <View style={styles.month}>
        <ScrollView contentContainerStyle={styles.scrollmonth} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text>กันยา</Text>
            <Text>กันยา</Text>
            <Text>กันยา</Text>
            <Text>กันยา</Text>
            <Text>กันยา</Text>
            <Text>กันยา</Text>
            <Text>กันยา</Text>
            <Text>กันยา</Text>
            <Text>กันยา</Text>
        </ScrollView>
      </View>

      <ScrollView>
        <Text>ปริมาณห้อง</Text>
        <BarChart
            width={310}
            noOfSections={4}
            stackData={stackData}
            barBorderRadius={5}
            hideRules
            maxValue={25}
            spacing={27}
            height={150}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop:50
  },
  block1:{
    width: 350,
    height:130,
    // backgroundColor:"#f0f",
    flexDirection:"row"
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
  month:{
    width: "100%",
    height:50,
    backgroundColor: "#96B3FF"
  },
  scrollmonth:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:5
  }
})

export default OwnerDormitory