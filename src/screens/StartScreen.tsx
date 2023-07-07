import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import slides from "../constants/slides";

export default function StartScreent() {
    return (
        <View style={styles.container}>
            <OnBoarding />
            {/*<View style={styles.imageContainer}>*/}
            {/*    <Image*/}
            {/*        source={require('../assets/pictures/Reflux-icon.jpg')}*/}
            {/*        style={styles.image}*/}
            {/*    />*/}
            {/*</View>*/}
        </View>
    )
}

const OnBoarding = () => {
    return(
        <View>
            <Text>Test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 1920 / 4,
        height: 1080 / 4,

    }
})
