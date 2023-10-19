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

        <View style={{alignItems: "center"}}>
          <Image style={styles.pic}
        source={{
          uri: 'https://cdn.discordapp.com/attachments/860515428253564978/1139454243137400902/Screenshot_2566-08-11_at_14.03.57.png?ex=6528ebf5&is=651676f5&hm=abe387d30938e5afeb23f400c9d644b27c989c3f576d2e0d753a4dd2e1bd83a7&',
        }}
        />
        </View>
        
        
        <Text style={styles.txt}>ชื่อ  อนัญพร จอมคำ</Text>
        <Text style={styles.txt}>เพศ  หญิง</Text>
        <Text style={styles.txt}>อีเมล  nicksama@gmail.com</Text>
        <Text style={styles.txt}>เบอร์โทร  0958575874</Text>

        <View style={{ alignItems: "center"}}>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
                แก้ไข
              
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              ยืนยัน
            </Text>
          </TouchableOpacity>
        </View>
       
        <MaskedView
          style={styles.footer}
          maskElement={
            <Text style={[styles.textStyle, { backgroundColor: "transparent" }]}>
              DÖrmitory Rent
            </Text>
          }>
        </MaskedView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    pic:{
      width: 300,
      height: 300,
      display:'flex',
      alignItems: "center",
      justifyContent: 'center',
      borderRadius: '100%'
    },
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
    },
    label: {
      color: "#363C56",
      fontSize: 15,
      fontWeight: "bold",
      padding: 5,
    },
    txt: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "left",
      color: "#363C56",
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
    footer: {
      alignSelf: "center",
      position: "absolute",
      bottom: 35,
    },
    shadowProp: {
      shadowColor: "#9B9B9B",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
    },
    btn: {
      width: 100,
      padding: 10,
      borderRadius: 20,
      backgroundColor: "#363C56",
      margin: 20,
    },
  });
  
  export default ProfileOwner;