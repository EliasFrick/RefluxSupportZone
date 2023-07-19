import React from "react";
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import CustomDrawerProps from "../types/Interface";
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#6a7980'}}>
                <ImageBackground source={require('../assets/pictures/StarShopping.jpg')} style={styles.backgroundImage}>
                    <Image source={require('../assets/pictures/Reflux-icon.jpg')} style={styles.userImage}/>
                    <Text style={styles.userName}>RefluxSupportZone</Text>
                </ImageBackground>
                <View style={styles.draweritemList}>
                    <DrawerItemList  {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    userImage: {
        height: 80,
        width: 80,
        borderRadius: 10,
        marginBottom: 10
    },
    backgroundImage: {
        padding: 20,
    },
    userName: {
        color: 'white',
        fontSize: 18,
    },
    draweritemList:{
        flex: 1,
        backgroundColor: '#6a7980',
        paddingTop: 10
    }
})
