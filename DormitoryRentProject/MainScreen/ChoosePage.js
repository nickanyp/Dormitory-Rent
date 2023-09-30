import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityBase,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function ChoosePage() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#363C56" }}>
        คุณเป็น<Text style={{ color: "#96B3FF" }}>เจ้าของหอพัก</Text>
        หรือ<Text style={{color: "#FF9699"}}>ผู้เช่าหอพัก</Text>?
      </Text>

      <TouchableOpacity
        style={[styles.style, { backgroundColor: "#96B3FF", margin: 30 }]}>
        <Text style={styles.text}>เจ้าของ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.style, { backgroundColor: "#FF9699" }]}>
        <Text style={styles.text}>ผู้เช่า</Text>
      </TouchableOpacity>

      <MaskedView
        style={styles.footer}
        maskElement={
          <Text style={[styles.textStyle, { backgroundColor: "transparent" }]}>
            DÖrmitory Rent
          </Text>}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#96B3FF", "#FF9699"]}>
          <Text style={[styles.textStyle, { opacity: 0 }]}>DÖrmitory Rent</Text>
        </LinearGradient>
      </MaskedView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  style: {
    flexDirection: 'row',
    width: 200,
    padding: 30,
    borderRadius: 40,
    justifyContent: 'center'
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
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