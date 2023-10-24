import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  renderLabel,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import DetailPaymentOwner from "./DetailPaymentOwner";

const data = [
  { label: "มกราคม", value: "1" },
  { label: "กุมภาพันธ์", value: "2" },
  { label: "มีนาคม", value: "3" },
  { label: "เมษายน", value: "4" },
  { label: "พฤษภาคม", value: "5" },
  { label: "มิถุนายน", value: "6" },
  { label: "กรกฎาคม", value: "7" },
  { label: "สิงหาคม", value: "8" },
  { label: "กันยายน", value: "9" },
  { label: "ตุลาคม", value: "10" },
  { label: "พฤศจิกายน", value: "11" },
  { label: "ธันวาคม", value: "12" },
];

const InformPaymentOwner = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: "10%",
          marginHorizontal: "5%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#96B3FF",
            margin: 10,
          }}
        >
          แจ้งชำระค่าเช่า
        </Text>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={{
            fontSize: 16,
            color: "#363C56",
            fontWeight: "bold",
            textAlign: "center",
          }}
          selectedTextStyle={{
            fontSize: 16,
            color: "#363C56",
            fontWeight: "bold",
            textAlign: "center",
          }}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "ดด/ปป" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.btn, styles.shadowProp]}
          onPress={() => {navigation.navigate("DetailPayment")}}
        >
          <Text style={styles.txt}>A101</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  grid: {
    flexDirection: "row",
    gap: 5,
    marginHorizontal: "5%",
  },
  btn: {
    width: 75,
    fontSize: 30,
    padding: 10,
    borderRadius: 20,
    borderWidth: 2.5,
    margin: 7,
    alignItems: "center",
    borderColor: "#96B3FF",
    shadowColor: "#9B9B9B",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: "white",
  },
  txt: {
    fontWeight: "bold",
    color: "#363C56",
    fontSize: 15,
  },
  dropdown: {
    width: 120,
    height: 40,
    borderColor: "gray",
    borderRadius: 15,
    paddingHorizontal: 8,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default InformPaymentOwner;
