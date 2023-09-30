import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

const LoginRenter = () => {
  return (
    <View>
        <Text style={styles.label}>รหัสหอพัก</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>เลขห้อง</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <Text style={styles.label}>รหัสผ่าน</Text>
        <TextInput style={[styles.input, styles.shadowProp]}></TextInput>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.btn}>
            <Text style={{textAlign:'center', color: 'white', fontWeight: 'bold', fontSize:20}}>ยืนยัน</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#363C56",
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5
  },
  input: {
    width: 250,
    height: 50,
    borderColor: '#9B9B9B',
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: 'white',
    margin: 5
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
    backgroundColor: "#FF9699",
    margin: 20
  }
  },);

export default LoginRenter
