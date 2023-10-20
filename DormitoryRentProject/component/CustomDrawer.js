import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LoginOwner from '../Screen/Owner/LoginOwner';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
        <DrawerContentScrollView
            {...props}>
            <ImageBackground
            source={{uri: 'https://media.discordapp.net/attachments/1094988129192128632/1164849072616767568/IMG_2281.jpeg?ex=6544b53c&is=6532403c&hm=a9a7fed40a23b4fbc51fec091f701225272e19d61d8e81015c5692e099c0ee8b&=&width=526&height=702'}}
            style={{padding: 20}}>
            <Image
                source={{uri: 'https://media.discordapp.net/attachments/1094988129192128632/1164849072616767568/IMG_2281.jpeg?ex=6544b53c&is=6532403c&hm=a9a7fed40a23b4fbc51fec091f701225272e19d61d8e81015c5692e099c0ee8b&=&width=526&height=702'}}
                style={{height: 100, width: 100, borderRadius: 50}}/>
            <Text style={{ color: '#fff', fontSize: 20, marginBottom: 5,}}>
                อนัญพร จอมคำ
            </Text>
            </ImageBackground>
            <View style={{flex: 1, paddingTop: 10}}>
            <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
        <View style={{marginLeft: 20, borderTopWidth: 1, borderTopColor: '#ccc', marginBottom: 20}}>
            <TouchableOpacity onPress={() => {(this.navigation.navigate("Logout"))}} style={{paddingVertical: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="logout" size={24} color="red" />
                    <Text style={{ fontSize: 16, marginLeft: 10, color: 'red'}}>
                        ออกจากระบบ
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default CustomDrawer;