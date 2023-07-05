import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import Video from "react-native-video";
import StandartButton from "./StandartButton";

export default function VideoCard() {

    const [videoSource, setVideoSource] = useState(false)
    const Luciano = "../components/Luciano.mp4"

    function test() {
        setVideoSource(true)
    }

    return(
        <View>
            {/*<Video source={require('./Luciano.mp4')} style={{ width: 300, height: 200 }} />*/}
            {videoSource && <Video source={require('./Luciano.mp4')} style={{ width: 300, height: 200 }} />}
            <StandartButton text={"Video Anzeigen"} onPress={test} />

        </View>
    )
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
