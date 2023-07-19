import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Video} from "expo-av";
import {Sodbrennen} from "../../../constants/VideoTexts";

export default function FirstExercise() {
    const test = () => {
        console.log('Klappt bei Übung 3')
    }

    const FiveMinMeditation = require('../../../assets/videos/SodbrennenProbierediesenTrick.mp4')

    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>Tips gegen Sodbrennen</Text>
                <View style={styles.VideoContainer}>
                    <Video source={FiveMinMeditation}
                           useNativeControls
                        // @ts-ignore
                           resizeMode={'cover'}
                           style={styles.video} />
                </View>
                <View style={styles.Text}>
                    <Text>
                        {Sodbrennen}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Text: {
        padding: 20,
        marginTop: 30
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        textAlign: 'center'
    },
    video: {
        width: 1920 / 4,
        height: 1080 / 4,
    },
    VideoContainer:{
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
