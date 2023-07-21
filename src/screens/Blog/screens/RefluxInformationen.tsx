import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {
    beschreibungUnterstuetzendeMassnahmen,
    refluxBeschreibung,
    unterstuetzendeMassnahmen,
    wasIstReflux
} from "../../../constants/BlogTexts";

export default function RefluxInformationen() {
    return (
        <View>
            <ScrollView>
                <Text style={styles.mainTitle}>{wasIstReflux}</Text>
                <Text style={styles.descriptionText}>{refluxBeschreibung}</Text>
                <Text style={styles.Title}>{unterstuetzendeMassnahmen}</Text>
                <Text style={styles.descriptionText}>{beschreibungUnterstuetzendeMassnahmen}</Text>
            </ScrollView>
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
