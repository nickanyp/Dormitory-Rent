import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const LoginRenter = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>รหัสหอพัก</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>เลขห้อง</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>รหัสผ่าน</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
            }}
>
            ยืนยัน
          </Text>
        </TouchableOpacity>
      </View>
      <MaskedView
        style={styles.footer}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#363C56",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: "#9B9B9B",
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: "white",
    margin: 5,
    padding: 15
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  btn: {
    width: 100,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#FF9699",
    margin: 20,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "transparent",
    textAlign: "center",
  },
  footer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 35,
  },
});

export default LoginRenter;
