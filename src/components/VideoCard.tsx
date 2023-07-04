import React from "react";
import {View, StyleSheet} from "react-native";
import Video from "react-native-video";

export default function VideoCard() {

    const Luciano = "C:\\Users\\Elias.Frick\\Downloads\\Luciano Video.mp4"

    return(
        <View>
            <Video source={{uri: Luciano}}   // Can be a URL or a local file.
                   style={styles.backgroundVideo} />
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
