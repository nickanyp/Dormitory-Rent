import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileOwner = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Image
            source={{
              uri: "https://media.discordapp.net/attachments/1094988129192128632/1164849072616767568/IMG_2281.jpeg?ex=6544b53c&is=6532403c&hm=a9a7fed40a23b4fbc51fec091f701225272e19d61d8e81015c5692e099c0ee8b&=&width=526&height=702",
            }}
          ></Image>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.pic}
            source={{
              uri: "https://media.discordapp.net/attachments/1094988129192128632/1164849072616767568/IMG_2281.jpeg?ex=6544b53c&is=6532403c&hm=a9a7fed40a23b4fbc51fec091f701225272e19d61d8e81015c5692e099c0ee8b&=&width=526&height=702",
            }}
          ></Image>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ marginBottom: 15, fontSize: 16, color: "#363C56" }}>
            The purpose of our lives is to be happy.
          </Text>
        </View>

        <View style={{ flex: 2, alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#EEEEEE",
              borderRadius: 15,
              justifyContent: "center",
              padding: '5%'
            }}>
            <Text
              style={[
                styles.txt,
                {
                  color: "#363C56",
                  fontSize: 20,
                  marginTop: 10,
                  fontWeight: "bold",
                },
              ]}
            >
              <Ionicons style={{color: "#363C56"}} name="ios-flower-outline" size={20} color="black" /> อนัญพร จอมคำ
            </Text>
            <Text
              style={[
                styles.txt,
                { color: "#363C56", fontSize: 16, marginBottom: 15 },
              ]}
            >
              nickysama323
            </Text>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginHorizontal: 10,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Fontisto
                style={styles.icon}
                name="intersex"
                size={24}
                color="#363C56"
              />
              <Text style={[styles.txt, { color: "#363C56", fontSize: 16 }]}>
                หญิง
              </Text>
            </View>
            
            <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="cake-variant-outline"
              size={20}
              color="#363C56"
            />
              <Text style={[styles.txt, { color: "#363C56", fontSize: 16 }]}>
                10/06/2002
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                style={styles.icon}
                name="mail"
                size={20}
                color="#363C56"
              />
              <Text style={[styles.txt, { color: "#363C56", fontSize: 16 }]}>
                nickysama323@gmail.com
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <AntDesign
                style={styles.icon}
                name="phone"
                size={20}
                color="#363C56"
              />
              <Text style={[styles.txt, { color: "#363C56", fontSize: 16 }]}>
                0958575874
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate("EditProfile")}}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}>
                แก้ไข
              </Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  pic: {
    width: 200,
    height: 200,
    borderRadius: "100%",
    marginVertical: 15,
  },
  txt: {
    fontSize: 16,
    marginLeft: 15,
    marginVertical: 5,
    marginHorizontal: 30,
  },
  icon: {
    fontWeight: "bold",
    marginLeft: 15,
    marginVertical: 5,
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
    marginTop: "10%",
  },
});

export default ProfileOwner;
