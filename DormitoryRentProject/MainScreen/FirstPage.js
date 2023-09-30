import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const FirstPage = (props) => {
  return (
    <View>
      <View style={[styles.container]}>
        <MaskedView
          maskElement={
            <Text style={[styles.textStyle, { backgroundColor: "transparent" }]}>
              {props.text}
            </Text>
          }>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#96B3FF", "#FF9699"]}>
            <Text style={[styles.textStyle, { opacity: 0 }]}>{props.text}</Text>
          </LinearGradient>
        </MaskedView>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textbtn}>แตะเพื่อเปิด</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  textStyle: {
    fontSize: 45,
    fontWeight: "bold",
    backgroundColor: "transparent",
    textAlign: "center",
  },
  btn: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35
  },
  textbtn: {
    fontSize: 20,
    color: "#A8A8A8",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default FirstPage;
