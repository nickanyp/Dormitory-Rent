import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight
}from "react-native";
import { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];


const PaymentOwner2 = () => {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Dropdown label
            </Text>
          );
        }
        return null;
      };

    return(
        <View style = {styles.container}>

            <View style = {{flexDirection: "row"}}>
                <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#96B3FF', margin: 10}}>
                    แจ้งชำระค่าเช่า
                </Text>
                {renderLabel()}
                <Dropdown style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle} 
          data={data}></Dropdown>


            </View>


            <View style = {styles.grid}>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.grid}>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.grid}>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.grid}>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.grid}>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.grid}>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.grid}>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.grid}>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.txt}>
                        A101
                    </Text>
                </TouchableOpacity>
            </View>
            



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    grid: {
        flexDirection: 'row',
        gap: 5,
    },
    btn: {
        width: 75,
        fontSize: 30,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2.5,
        margin: 7,
        // marginTop: 15,
        alignItems:"center",

        borderColor: "#96B3FF",
        shadowColor: '#9B9B9B',
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    txt: {
        fontWeight: "bold", 
        color: '#363C56',
        fontSize: 15
    }



});

export default PaymentOwner2;