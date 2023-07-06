import React, {useRef, useState} from "react";
import {View, StyleSheet, TouchableWithoutFeedback, ImageSourcePropType, TouchableOpacity} from "react-native";
import StandartButton from "./StandartButton";
// import Video from 'react-native-video';
import { Video } from 'expo-av';


export default function VideoCard(props: VideoProps) {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<Video>(null);
    const Luciano = require("../components/Luciano.mp4")

    const handleLongPress  = () => {
        setIsPlaying(true);
    };

    const handlePressOut = () => {
        setIsPlaying(false);
        videoRef.current?.setPositionAsync(0);
    };


    return(
        <View>
            <TouchableWithoutFeedback onPress={props.onPress} onLongPress={handleLongPress} onPressOut={handlePressOut}>
                <View>
                    <Video
                        ref={videoRef}
                        // @ts-ignore
                        source={props.video}
                        // source={require('../assets/videos/LucianoVideo.mp4')}
                        style={{ width: 300, height: 200 }}
                        // useNativeControls
                        isMuted={true}
                        shouldPlay={isPlaying}
                        // shouldPlay={true}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

interface VideoProps {
    video: string,
    onPress: () => void;
}

const styles = StyleSheet.create({
    Video:{
        width: 100,
        height: 100
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})
