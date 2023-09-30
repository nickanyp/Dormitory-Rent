import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const PaymentRenter = () => {
  return (
    <View>
      <View>
        <View style={styles.box}>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#FF9699" }}>
            กันยายน
          </Text>
          <Text></Text>
          <Text style={styles.text}>ค่าเช่าหอพัก : 4600 บาท</Text>
          <Text style={styles.text}>ค่าน้ำ : 150 บาท</Text>
          <Text style={styles.text}>ค่าไฟ : 1200 บาท</Text>
          <Text></Text>
          <Text style={[styles.text, { color: "#FF9699" }]}>
            รวมทั้งสิ้น : 5950 บาท
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center", margin: 10}}>
        <Image
          style={styles.img}
          source={require("../../assets/qr-code.png")}
        ></Image>
        <Text style={[styles.text, { textAlign: "center", margin:10 }]}>
          แจ้งชำระค่าเช่า
        </Text>
        <TouchableOpacity style={[styles.btn1, styles.shadowProp]}>
          <Text style={[styles.text, { textAlign: "center" }]}>
            อัปโหลดไฟล์รูปภาพ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={[styles.text, { textAlign: "center", color: "white" }]}>
            ยืนยัน
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 300,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#9B9B9B",
    padding: 15,
    margin: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
  btn1: {
    width: 190,
    height: 50,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#9B9B9B",
    backgroundColor: "white",
    justifyContent: "center",
    margin: 8,
  },
  btn2: {
    width: 120,
    height: 45,
    borderRadius: 40,
    backgroundColor: "#FF9699",
    justifyContent: "center",
    margin: 8,
  },
  img: {
    width: 200,
    height: 200,
  },
  shadowProp: {
    shadowColor: '#9B9B9B',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default PaymentRenter;
