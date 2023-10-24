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

const Payment2Owner = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: "10%",
          backgroundColor: "blue",
          marginHorizontal: "10%",
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
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="ดด/ปป"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={[styles.btn, styles.shadowProp]}>
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
    backgroundColor: "red",
    marginHorizontal: "10%",
  },
  btn: {
    width: 75,
    fontSize: 30,
    padding: 10,
    borderRadius: 20,
    borderWidth: 2.5,
    margin: 7,
    // marginTop: 15,
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

  condrop: {
    backgroundColor: "white",
    padding: 16,
    flex: 1,
    justifyContent: "center",
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderRadius: 20,
    paddingHorizontal: 8,
    width: 120,
    backgroundColor: "#D9D9D9",
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#363C56",
    fontWeight: "bold",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default Payment2Owner;
