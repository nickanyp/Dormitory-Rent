import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const PaymentOwner = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", margin: 15,  marginTop: '40%'}}>
        <View style={styles.box}>
          <Text style={{ fontSize: 35, fontWeight: "bold", color: "#96B3FF" }}>
            กัลยารัตน์2
          </Text>
          <Text style={{ fontWeight: "bold", color: "#96B3FF", fontSize: 14 }}>
            RNP 655/2 ซ.ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร
          </Text>
        </View>

        <View style={styles.box2}>
          <Image
            style={[styles.pic, {top: '25%', left: '25%'}]}
            source={require("../../assets/dormitory.png")}
          />
        </View>
      </View>

      <View style={{ alignItems: "center"}}>
        <TouchableOpacity
          style={[styles.btn, styles.shadowProp, { borderColor: "#9B9B9B" }]}
          onPress={() => {navigation.navigate("InformPayment")}}
        >
          <Text style={[styles.text, {color: "#363C56", fontSize: 16}]}>แจ้งชำระค่าเช่า</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.shadowProp, { borderColor: "#9B9B9B" }]}
          onPress={() => {navigation.navigate("StatusPayment")}}
        >
          <Text style={[styles.text, {color: "#363C56", fontSize: 16}]}>สถานะการชำระค่าเช่า</Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
                style={[styles.pic, {width: 350, height: 350, bottom: -370}]}
                source={require("../../assets/blue.png")}
            />
            </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  box: {
    flex: 2.5,
    marginLeft: 15,
  },
  box2: {
    // flex:1,
    width: 120,
    height: 120,
    borderRadius: "100%",
    marginRight: 25,
    borderWidth: 2,
    borderColor: "#96B3FF",
  },
  pic: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    position: "absolute",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: 'center'
  },
  btn: {
    width: 220,
    height: 50,
    fontSize: 30,
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    margin: 5,
    marginTop: 15,
    alignItems: "center",
    borderColor: "#96B3FF",
    backgroundColor: "white",
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default PaymentOwner;
