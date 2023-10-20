import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
  } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
  
  const ProfileOwner = () => {
    return (
      <View style={styles.container}>

        <View style={styles.box}>
            <Image source={{uri: 'https://media.discordapp.net/attachments/1094988129192128632/1164849072616767568/IMG_2281.jpeg?ex=6544b53c&is=6532403c&hm=a9a7fed40a23b4fbc51fec091f701225272e19d61d8e81015c5692e099c0ee8b&=&width=526&height=702'}}></Image>
        </View>

        <View>
            <Image style={styles.pic} source={{uri: 'https://media.discordapp.net/attachments/1094988129192128632/1164849072616767568/IMG_2281.jpeg?ex=6544b53c&is=6532403c&hm=a9a7fed40a23b4fbc51fec091f701225272e19d61d8e81015c5692e099c0ee8b&=&width=526&height=702'}}></Image>
        </View>

        <View style={{alignItems: 'center'}}>
            <View style={{backgroundColor: '#D9D9D9', width: '80%', borderRadius: 10}}>
                <Text style={[styles.txt, {color: '#363C56', fontSize: 20, marginTop: 10, fontWeight: "bold",}]}>อนัญพร จอมคำ</Text>
                <Text style={[styles.txt, {color: '#363C56', fontSize: 16, marginBottom: 15}]}>nickysama323</Text>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 10 }}/>
                <View style= {{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                    <Fontisto style={styles.icon} name="intersex" size={24} color="#363C56" />
                    <Text style={[styles.txt, {color: '#363C56', fontSize: 16}]}>หญิง</Text>
                </View>
                <View style= {{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign style={styles.icon} name="mail" size={20} color="#363C56" />
                    <Text style={[styles.txt, {color: '#363C56', fontSize: 16}]}>nickysama323@gmail.com</Text>
                </View>
                <View style= {{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    <AntDesign style={styles.icon} name="phone" size={20} color="#363C56" />
                    <Text style={[styles.txt, {color: '#363C56', fontSize: 16}]}>0958575874</Text>
                </View>
            </View>
        </View>

        <View style={{ justifyContent: "center", flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16,}}>
              แก้ไข
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.btn}>
            <Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16,}}>
              ยกเลิก
            </Text>
          </TouchableOpacity> */}
        </View>
       
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    pic:{
        width: 130,
        height: 130,
        borderRadius: 130/2,
        borderWidth: 7,
        borderColor: 'white',
        display:'flex',
        alignItems: "center",
        justifyContent: 'center',
        bottom: '50%',
        marginLeft: 30
    },
    txt: {
        fontSize: 16,
        marginLeft: 15,
        marginVertical: 5
    },
    icon: {
        marginLeft: 15,
        marginVertical: 5
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
    box: {
        width: '100%',
        height: '20%',
        backgroundColor: 'grey'
    },
  });
  
  export default ProfileOwner;