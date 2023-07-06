import React, {useRef, useState} from "react";
import {Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
// import Video from 'react-native-video';
import {Video} from 'expo-av';


export default function VideoCard(props: VideoProps) {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<Video>(null);

    const handleLongPress = () => {
        setIsPlaying(true);
    };

    const handlePressOut = () => {
        setIsPlaying(false);
        videoRef.current?.setPositionAsync(0);
    };


    return (
        <TouchableWithoutFeedback onPress={props.onPress} onLongPress={handleLongPress} onPressOut={handlePressOut}>
                <View style={styles.container}>
                    <View style={[styles.button, {backgroundColor: props.color}]}>
                        <Text style={styles.buttonText}>{props.title}</Text>
                        <View style={styles.underline}/>
                        <Text style={styles.BulletList}>{props.BulletList1}</Text>
                        <Text style={styles.BulletList}>{props.BulletList2}</Text>
                        <Text style={styles.BulletList}>{props.BulletList3}</Text>
                        <Text style={styles.BulletList}>{props.BulletList4}</Text>
                    </View>
                    <Video
                        ref={videoRef}
                        // @ts-ignore
                        source={props.video}
                        style={styles.video}
                        // useNativeControls
                        isMuted={true}
                        shouldPlay={isPlaying}
                    />
                </View>
        </TouchableWithoutFeedback>
    )
}

interface VideoProps {
    title: string;
    BulletList1?: string,
    BulletList2?: string,
    BulletList3?: string,
    BulletList4?: string,
    video: string,
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
    video: {
        width: 250,
        height: 230,
        position: 'absolute',
        bottom: 30,
        right: 310,
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
    BulletList: {
        color: 'white',
        fontSize: 15,
        marginTop: 13,
        marginLeft: 110,
    },
})
