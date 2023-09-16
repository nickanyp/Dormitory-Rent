import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityBase,
} from "react-native";
import FirstPage from "./FirstPage";

export default function ChoosePage() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#363C56" }}>
        คุณเป็น<Text style={{ color: "#96B3FF" }}>เจ้าของหอพัก</Text>
        หรือ<Text style={{color: "#FF9699"}}>ผู้เช่าหอพัก</Text>?
      </Text>

      <TouchableOpacity
        style={[styles.style, { backgroundColor: "#96B3FF", margin: 30 }]}
      >
        <Text style={styles.text}>เจ้าของหอพัก</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.style, { backgroundColor: "#FF9699" }]}>
        <Text style={styles.text}>ผู้เช่าหอพัก</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  style: {
    padding: 30,
    borderRadius: 15,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
