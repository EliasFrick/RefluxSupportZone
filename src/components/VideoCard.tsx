import React, {useRef, useState} from "react";
import {Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
// import Video from 'react-native-video';
import {Video} from 'expo-av';


export default function VideoCard(props: VideoProps) {


    //Video starten und Pausieren
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<Video>(null);

    //Video abspielen, wenn lange auf den Container gedrückt wird
    const handleLongPress = () => {
        setIsPlaying(true);
    };

    //Video von vorne zeigen, wenn losgelassen wird
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
                        usePoster={false}
                        posterSource={require('../assets/pictures/Reflux-Logo.png')}
                        // @ts-ignore
                        resizeMode={'cover'}
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

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        left: (width / 2) - 210,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: 250,
        height: 230,
        position: 'absolute',
        bottom: 30,
        right: 350,
        borderRadius: 40,
    },
    button: {
        width: 400,
        height: 230,
        borderRadius: 40,
    },
    buttonText: {
        color: "white",
        fontSize: 33,
        marginLeft: 150,
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
        marginLeft: 150,
    },
})
