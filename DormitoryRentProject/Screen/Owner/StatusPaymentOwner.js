import { Component } from "react";
import{
    Text,
    View,
    StyleSheet,
    TouchableOpacity
}from "react-native";

class StatusPaymentOwner extends Component {
    render() {
        return (
            <View style = {{padding:20, justifyContent: 'center', marginTop: '20%', flex: 1}}>
        <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#96B3FF', margin: 10}}>
            รายละเอียดค่าเช่าหอพัก
        </Text>

        <TouchableOpacity style = {styles.btn2}>
            <Text style = {{color: '#fff', fontSize:20, fontWeight: 'bold'}}>
                A101
            </Text>
        </TouchableOpacity>

        <View style = {{padding: 15}}>
            <Text style = {styles.txt}>
                ชื่อผู้เช่า1 : 
            </Text>

            <Text style = {styles.txt}>
                ชื่อผู้เช่า2 : 
            </Text>

            <Text style = {styles.txt}>
                ประเภทห้องพัก : 
        </Text>
        </View>

        <View style = {{flexDirection: 'row', justifyContent: "center"}}>
            <View>
                <Text style = {styles.txt2}>
                    ปริมาณน้ำ : 
                </Text>
                <TouchableOpacity style={styles.btn}>
                </TouchableOpacity>
            </View>
            <View>
                <Text style = {styles.txt2}>
                    ค่าน้ำ : 
                </Text>
                <TouchableOpacity style={styles.btn}>
                </TouchableOpacity>
            </View>
        </View>

        <View style = {{flexDirection: 'row', justifyContent: "center"}}>
            <View>
                <Text style = {styles.txt2}>
                    ปริมาณไฟ : 
                </Text>
                <TouchableOpacity style={styles.btn}>
                </TouchableOpacity>
            </View>
            <View>
                <Text style = {styles.txt2}>
                    ค่าไฟ : 
                </Text>
                <TouchableOpacity style={styles.btn}>
                </TouchableOpacity>
            </View>
        </View>

        <View style = {{justifyContent: "center", alignItems: "center", margin: 15}}>
            <TouchableOpacity style={styles.btn3}>
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
        
    </View>
        )
    }
}

const styles = StyleSheet.create({
btn: {
    width: 140,
    height: 60,
    padding: 10,
    borderRadius: 40,
    borderWidth: 2.5,
    margin: 5,
    alignItems:"center",
    borderColor: "#96B3FF",
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
},

txt:{
    fontSize: 20,
    color: '#363C56',
    fontWeight: 'bold'
    
     
},
txt2:{
    fontSize: 17,
    color: '#363C56',
    fontWeight: 'bold',
    
     
},
btn2: {
    width: 130,
    height: 60,
    padding: 10,
    borderRadius: 40,
    borderWidth: 2.5,
    margin: 5,
    alignItems:"center",
    borderColor: "#96B3FF",
    backgroundColor: '#96B3FF',
    justifyContent: 'center'
},
btn3: {
    width: 100,
    height: 45,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#363C56",
    justifyContent: "center"
}


});

export default StatusPaymentOwner;