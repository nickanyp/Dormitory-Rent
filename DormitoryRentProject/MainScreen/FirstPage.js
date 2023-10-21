import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import DormitoryHeader from '../component/DormitoryHeader';
import Dormitory from '../component/Dormitory';

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Dormitory></Dormitory>
        <TouchableOpacity 
        style={styles.footer} 
        onPress={() => {navigation.navigate('ChoosePage', {prev: 'FirstPage'})}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#A8A8A8',}}>แตะเพื่อเปิด</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1, 
      alignItems: "center",
      justifyContent: 'center',
    },
    footer: {
      alignSelf: "center",
      position: "absolute",
      bottom: 35,
    },
  });
  
export default FirstPage