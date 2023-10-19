import{
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
}from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const CheckPayment = () => {
    return(
        <View style = {styles.box2}>
        

            <View style = {styles.box3}>
                <AntDesign name="closecircleo" size={24} color="black"  style={{padding: 3, marginLeft:260, paddingTop:7}}/>
                <Image style={styles.pic}
                                source={{
                                uri: 'https://cdn.discordapp.com/attachments/860515428253564978/1139454243137400902/Screenshot_2566-08-11_at_14.03.57.png?ex=6528ebf5&is=651676f5&hm=abe387d30938e5afeb23f400c9d644b27c989c3f576d2e0d753a4dd2e1bd83a7&',
                                }}/>


                            <TouchableOpacity style={styles.btn3}>
                                <Text style={{textAlign: "center",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 15,}}>
                                    ยืนยัน
                                </Text>
                            </TouchableOpacity>

            </View>
                
        </View>

    );
};

const styles = StyleSheet.create({
    pic:{
        width: 300,
        height: 300,
        borderRadius: 60,
        // marginRight: 25,
        marginTop: 25,
    },
    box2:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: '2',
        // borderColor: '#363C56',
        // backgroundColor: 'red'
    },
    btn3: {
        width: 100,
        height: 45,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#363C56",
        justifyContent: "center",
        marginBottom: 20
    },
    box3:{
        alignItems: "center",
        borderWidth: "2",
        borderColor: '#363C56',
        borderRadius: 10
    }

});

export default CheckPayment;