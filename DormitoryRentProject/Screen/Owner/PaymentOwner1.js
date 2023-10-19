import{
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
}from "react-native";

// import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentOwner = () => {
    return(
        <View style = {styles.container}>

            <View style = {{flexDirection: "row", margin:15}}>
                <View style = {styles.box}>
                    <Text style = {{fontSize: 35, fontWeight: 'bold', color: '#96B3FF'}}>
                        กัลยารัตน์2
                    </Text>
                    <Text style = {{fontWeight: 'bold', color: '#96B3FF'}}>
                        RNP 655/2 ซ.ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร
                    </Text>
                </View>
                
                <View style = {styles.box2}>
                    <Image style={styles.pic}
                        source={{
                        uri: 'https://cdn.discordapp.com/attachments/860515428253564978/1139454243137400902/Screenshot_2566-08-11_at_14.03.57.png?ex=6528ebf5&is=651676f5&hm=abe387d30938e5afeb23f400c9d644b27c989c3f576d2e0d753a4dd2e1bd83a7&',
                        }}
                    />
                </View>
            </View>
            
            
            <View style={{alignSelf:"center"}}>
                <TouchableOpacity style={styles.btn}>
                    <Text>
                        แจ้งชำระค่าเช่า
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text>
                        สถานะการชำระค่าเช่า
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
        justifyContent: "center"
    },
    box: {
        flex:2.5,
        marginLeft: 15
    },
    pic:{
        // flex:1,
        width: 100,
        height: 100,
        borderRadius: '100%',
        marginRight: 25
    },
    box2:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    btn:{
        width: 220,
        fontSize: 30,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2.5,
        margin: 5,
        marginTop: 15,
        alignItems:"center",
        borderColor: "#96B3FF"
    },
    btn2:{
        width: 220,
        fontSize: 30,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2.5,
        margin: 5,
        alignItems:"center",
        borderColor: "#FF9699",
    }
});

export default PaymentOwner;