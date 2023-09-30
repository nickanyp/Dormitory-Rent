import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const RegisterOwner = () => {
  return (
    <View>
        <Text style={styles.header}>สร้างบัญชีผู้ใช้</Text>
        <Text></Text><Text></Text><Text></Text>
        <Text style={styles.label}>ชื่อจริง-นามสกุล</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>เพศ</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>อีเมล</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>รหัสผ่าน</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>เบอร์โทร</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.btn}>
            <Text style={{textAlign:'center', color: 'white', fontWeight: 'bold', fontSize:15}}>ยืนยัน</Text>
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
    fontWeight: 'bold',
    padding: 5
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: 240,
    height: 40,
    borderColor: '#96B3FF',
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: 'white',
    margin: 5
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "transparent",
    textAlign: "center",
  },
  shadowProp: {
    shadowColor: '#9B9B9B',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  btn: {
    width: 100,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#363C56",
    margin: 20
  }
  },);

export default RegisterOwner
