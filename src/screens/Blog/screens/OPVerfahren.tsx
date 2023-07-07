import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {OperationBeschreibung, OpertionTitle} from "../../../constants/BlogTexts";

export default function OPVerfahren() {
    return(
        <View>
            <Text style={styles.mainTitle}>{OpertionTitle}</Text>
            <Text style={styles.descriptionText}>{OperationBeschreibung}</Text>
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
