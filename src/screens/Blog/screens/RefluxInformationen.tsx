import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {refluxBeschreibung, wasIstReflux, unterstuetzendeMassnahmen, beschreibungUnterstuetzendeMassnahmen} from "../../../constants/BlogTexts";

export default function RefluxInformationen() {
    return(
        <View>
            <Text style={styles.mainTitle}>{wasIstReflux}</Text>
            <Text style={styles.descriptionText}>{refluxBeschreibung}</Text>
            <Text style={styles.Title}>{unterstuetzendeMassnahmen}</Text>
            <Text style={styles.descriptionText}>{beschreibungUnterstuetzendeMassnahmen}</Text>
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
