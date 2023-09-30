import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const LoginOwner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}>
          เข้าสู่ระบบ
        </Text>
      </View>
      <Text></Text><Text></Text>
      <View>
        <Text style={styles.label}>อีเมล</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>รหัสผ่าน</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
      </View>

      <View style={styles.middle}>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            ยืนยัน
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>ยังไม่มีบัญชีผู้ใช้?</Text>
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
  label: {
    color: "#363C56",
    fontSize: 15,
    fontWeight: "bold",
    padding: 5,
  },
  input: {
    width: 240,
    height: 40,
    borderColor: "#96B3FF",
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: "white",
    margin: 5,
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
    backgroundColor: "#363C56",
    margin: 20,
  },
  text: {
    color: "#FF9699",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "transparent",
    textAlign: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  middle: {
    alignItems: "center",
  },
  footer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 35,
  },
});

export default LoginOwner;
