import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  renderLabel,
  SafeAreaView,
} from "react-native";
import { useEffect,  useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import DetailPaymentOwner from "./DetailPaymentOwner";
import {firebase, initializeApp} from 'firebase/app'; 
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../../database/FirebaseConfig";

const InformPaymentOwner = ({navigation, route}) => {
  const today = new Date();
  const day = today.getDate();
  const year = today.getFullYear();
  let month = today.getMonth();
  if (day >= 26) {
    month += 1;
  }

  const code = route.params.code
  const [empArr, setEmpRoom] = useState([]);
  const [fullArr, setFullRoom] = useState([]);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const fetchData = async () => {
      const empQuery = await getDocs(query(collection(db, 'room'), where('code', '==', code)));
      const empRoom = [];
      const fullRoom = [];
      empQuery.forEach((doc) => {
        if (doc.data().status == false){
          fullRoom.push({ id: doc.id, ...doc.data() })
        }else if(doc.data().status == true) {
          empRoom.push({ id: doc.id, ...doc.data() })
        }
      })
      setEmpRoom(empRoom)
      setFullRoom(fullRoom)
    };

    fetchData();
  }, [code]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: "row", marginTop: "9%", marginHorizontal: "5%", alignItems: "center", marginBottom:15}}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#96B3FF", margin: 10, marginBottom:15}}>
          แจ้งชำระค่าเช่า
        </Text>
        <View style={styles.dropdown}>
          <Text style={[styles.txt, {color: "#fff", fontSize: 18}]}>{month} / {year}</Text>
        </View>
      </View>

      <View style={styles.grid}>
        {fullArr.map((item, i) => {
          return(
            <TouchableOpacity key={i} style={[styles.btn, styles.shadowProp, {backgroundColor: item.inform? '#96B3FF' : '#fff', }]}
              onPress={() => {navigation.navigate("DetailPayment", {room: item, month: month})}}
            >
              <Text style={[styles.txt,{ color: item.inform? '#fff' : '#363C56'}]}>{item.room}</Text>
            </TouchableOpacity>
          )
        })}
        {empArr.map((item, i) => {
          return(
            <TouchableOpacity key={i} style={[styles.btn, styles.shadowProp, {borderColor:"#cfcfcf"}]}>
              <Text style={styles.txt}>{item.room}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  grid: {
    justifyContent:"center",
    alignItems:"center"
  },
  btn: {
    width: 200,
    fontSize: 30,
    padding: 10,
    borderRadius: 20,
    borderWidth: 2.5,
    margin: 7,
    alignItems: "center",
    borderColor: "#96B3FF",
    shadowColor: "#9B9B9B",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: "white",
  },
  txt: {
    fontWeight: "bold",
    color: "#363C56",
    fontSize: 15,
  },
  dropdown: {
    width: 140,
    height: 40,
    borderColor: "gray",
    borderRadius: 20,
    backgroundColor: "#96B3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default InformPaymentOwner;