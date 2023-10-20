import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
  } from "react-native";
//   import { LinearGradient } from "expo-linear-gradient";
  import MaskedView from "@react-native-masked-view/masked-view";
  
  const ProfileOwner = () => {
    return (
      <View style={styles.container}>

        <View style={{alignItems: "center", margin: 20}}>
          <TouchableOpacity style={styles.pic}>
            <Text>อัพโหลดรูปโปรไฟล์</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={[styles.txt, {color: "#363C56"}]}>ชื่อ   <Text style={[styles.txt, {color: '#A9A9A9'}]}>อนัญพร จอมคำ</Text></Text>
            <Text style={[styles.txt, {color: "#363C56"}]}>เพศ   <Text style={[styles.txt, {color: '#A9A9A9'}]}>หญิง</Text></Text>
            <Text style={[styles.txt, {color: "#363C56"}]}>อีเมล   <Text style={[styles.txt, {color: '#A9A9A9'}]}>nickysama</Text></Text>
            <Text style={[styles.txt, {color: "#363C56"}]}>เบอร์โทร   <Text style={[styles.txt, {color: '#A9A9A9'}]}>0958575874</Text></Text>

        <View style={{ justifyContent: "center", flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16,}}>
              แก้ไข
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16,}}>
              ยกเลิก
            </Text>
          </TouchableOpacity>
        </View>
       
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: 'white'
    },
    pic:{
      width: 180,
      height: 180,
      borderRadius: 180/2,
      display:'flex',
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: '#D9D9D9',
    },
    txt: {
      fontSize: 16,
      fontWeight: "bold",
      padding: 10,
      marginLeft: 10,
    },
    input: {
      width: 240,
      height: 40,
      borderColor: "#96B3FF",
      borderWidth: 1.5,
      borderRadius: 25,
      backgroundColor: "white",
      margin: 5,
    },
    textStyle: {
      fontSize: 20,
      fontWeight: "bold",
      backgroundColor: "transparent",
      textAlign: "center",
    },
    btn: {
      width: 100,
      padding: 10,
      borderRadius: 20,
      backgroundColor: "#363C56",
      marginTop: 30,
      margin: 10,
    },
  });
  
  export default ProfileOwner;