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
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const data = [
  { label: "มกราคม 66", value: "1" },
  { label: "กุมภาพันธ์ 66", value: "2" },
  { label: "มีนาคม 66", value: "3" },
  { label: "เมษายน 66", value: "4" },
  { label: "พฤษภาคม 66", value: "5" },
  { label: "มิถุนายน 66", value: "6" },
  { label: "กรกฎาคม 66", value: "7" },
  { label: "สิงหาคม 66", value: "8" },
  { label: "กันยายน 66", value: "9" },
  { label: "ตุลาคม 66", value: "10" },
  { label: "พฤศจิกายน 66", value: "11" },
  { label: "ธันวาคม 66", value: "12" },
];

const InformPaymentOwner = ({navigation, route}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [month, setMonth] = useState();

  const code = route.params.code
  const [roomArr, setRoom] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const roomQuery = query(collection(db, 'room'), where('code', '==', code));

      try {
        const querySnapshot = await getDocs(roomQuery);

        if (querySnapshot.empty) {
          console.log('No rooms found');
        } else {
          const rooms = [];
          querySnapshot.forEach((doc) => {
            rooms.push({ id: doc.id, data: doc.data() });
          });
          setRoom(rooms);
          console.log(roomArr)
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchData();
  }, [code]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: "10%",
          marginHorizontal: "5%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#96B3FF",
            margin: 10,
          }}
        >
          แจ้งชำระค่าเช่า
        </Text>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={{
            fontSize: 14,
            color: "#363C56",
            fontWeight: "bold",
            textAlign: "center",
          }}
          selectedTextStyle={{
            fontSize: 14,
            color: "#363C56",
            fontWeight: "bold",
            textAlign: "center",
          }}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "เดือน" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onChange={(item) => {
            setValue(item.value);
            setMonth(item.value)
            setIsFocus(false);
          }}
        />
      </View>

      <View style={styles.grid}>
        {roomArr.map((item) => {
          return(
            <TouchableOpacity
              style={[styles.btn, styles.shadowProp]}
              onPress={() => {navigation.navigate("DetailPayment", {room: item.data.room, code: item.data.code, type: item.data.type, month: month, price: item.data.price})}}
            >
              <Text style={styles.txt}>{item.data.room}</Text>
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
    borderRadius: 16,
    paddingHorizontal: 8,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: "#9B9B9B",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default InformPaymentOwner;