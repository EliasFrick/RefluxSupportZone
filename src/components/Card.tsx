import React from "react";
import {Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Dimensions} from "react-native";

const Card = (props: CardProps) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                    <View style={[styles.button, {backgroundColor: props.color}]}>
                        <Text style={styles.buttonText}>{props.title}</Text>
                        <View style={styles.underline} />
                            <Text style={styles.BulletList}>{props.BulletList1}</Text>
                            <Text style={styles.BulletList}>{props.BulletList2}</Text>
                            <Text style={styles.BulletList}>{props.BulletList3}</Text>
                            <Text style={styles.BulletList}>{props.BulletList4}</Text>
                    </View>
                    <View>
                        <Image
                            source={props.image}
                            style={styles.image}
                        />
                    </View>
            </View>
        </TouchableOpacity>
    );
};

export default Card

interface CardProps {
    title: string;
    BulletList1?: string,
    BulletList2?: string,
    BulletList3?: string,
    BulletList4?: string,
    image: ImageSourcePropType,
    onPress: () => void;
    color: string
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        left: (Dimensions.get('window').width / 2) - 225,
    },
    image: {
        width: 200,
        height: 230,
        position: 'absolute',
        bottom: 30,
        right: 100,
        borderRadius: 40
    },
    button: {
        width: 400,
        height: 230,
        borderRadius: 40,
    },
    buttonText: {
        color: "white",
        fontSize: 33,
        marginLeft: 110,
        marginTop: 15,
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: "white",
        width: 400,
    },
    BulletList:{
        color: 'white',
        fontSize: 15,
        marginTop: 13,
        marginLeft: 110,
    },
})
