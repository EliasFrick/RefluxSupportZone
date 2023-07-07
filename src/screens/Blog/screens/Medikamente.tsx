import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {RefluxMedikamente, MedikamenteTitle} from "../../../constants/BlogTexts";

export default function Medikamente() {
    return(
        <View>
            <Text style={styles.mainTitle}>{MedikamenteTitle}</Text>
            <Text style={styles.descriptionText}>{RefluxMedikamente}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 30,
        marginBottom: 30,
        textAlign: 'center'
    },
    descriptionText: {
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    Title: {
        marginTop: 50,
        fontSize: 30,
        marginBottom: 30,
        textAlign: 'center'
    },
})
