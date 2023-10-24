import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  renderLabel,
  SafeAreaView
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
      <View style={{ flexDirection: "row", marginTop: '10%' }}>
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

        <View style={styles.grid}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>A101</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>A101</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>A101</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>A101</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.grid}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>A101</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>A101</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>A101</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>A101</Text>
        </TouchableOpacity>
      </View>

     

      <View style={styles.grid}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>A101</Text>
        </TouchableOpacity>
      </View>
      
        {/* <View style={styles.condrop}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            // inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="เดือน"
            searchPlaceholder="ค้นหา..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? "blue" : "black"}
                name="Safety"
                size={20}
              />
            )}
          />
        </View> */}
      </View>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  grid: {
    flexDirection: "row",
    gap: 5,
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
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 120,
  },
  //   icon: {
  //     marginRight: 5,
  //   },
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
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Payment2Owner;
