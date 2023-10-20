import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DormitoryHeader from '../component/DormitoryHeader';

const FirstPage = () => {
  return (
    <View style={styles.container}>
        <View>
            <DormitoryHeader></DormitoryHeader>
        </View>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#A8A8A8' }}>แตะเพื่อเปิด</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
export default FirstPage