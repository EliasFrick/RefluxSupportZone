import React from "react";
import {View, Text} from "react-native";
import VideoCard from "../../../components/VideoCard";

export default function SecondExercise() {
    const test = () => {
        console.log('Klappt bei Übung 3')
    }
    return(
        <View>
            <Text>Zweite Übung</Text>
            <VideoCard video={require('../../../assets/videos/LucianoVideo.mp4')} onPress={test} />

        </View>
    )
}
