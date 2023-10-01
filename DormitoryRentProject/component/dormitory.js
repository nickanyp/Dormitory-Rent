import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function Dormitory() {
    return (
        <MaskedView style={styles.footer}
        maskElement={
          <Text style={[styles.textStyle, { backgroundColor: "transparent" }]}>
            DÖrmitory Rent
          </Text>
        }>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#96B3FF", "#FF9699"]}>
          <Text style={[styles.textStyle, { opacity: 0 }]}>DÖrmitory Rent</Text>
        </LinearGradient>
      </MaskedView>
    );
  }