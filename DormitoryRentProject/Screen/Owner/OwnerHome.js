import { View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-elements'

const OwnerHome = () => {
  return (
    <View style={styles.container}>
      <Text>OwnerHome</Text>
      <Button title="กัลยรัตน์2" onPress={() => {this.props.navigation.navigate("OwnerDormitory")}}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
})

export default OwnerHome