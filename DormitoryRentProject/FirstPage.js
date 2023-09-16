import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function FirstPage(props) {
  return (
    <MaskedView maskElement={<Text style={[styles.textStyle, {backgroundColor:'transparent'}]}>{props.text}</Text>}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#96B3FF", "#FF9699"]}
      >
        <Text style={[styles.textStyle, {opacity:0}]}>{props.text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 50,
    fontWeight: "bold",
    backgroundColor: "transparent",
    textAlign: 'center'
  },
});
