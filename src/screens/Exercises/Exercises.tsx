import React from "react";
import {Text, View} from "react-native";
import VideoCard from "../../components/VideoCard";
// import Luciano from '../../assets/videos/LucianoVideo.mp4'
import {ExerciseScreen} from "../../types/StackSreens";
import {StackNavigationProp} from "@react-navigation/stack";

type ChooseExerciseScreen = StackNavigationProp<ExerciseScreen, 'ExerciseScreen'>;

type Props = {
    navigation: ChooseExerciseScreen;
};


const Exercises: React.FC<Props> = ({navigation}) => {

    //Navigation
    const navigateToFirstExercise = () => {
        navigation.navigate('FirstExercise');
    };

    const navigateToSecondExercise = () => {
        navigation.navigate('SecondExercise');
    };

    const navigateToThirdExercise = () => {
        navigation.navigate('ThirdExercise');
    };

    //Videos
    const LucianoVideo = require('../../assets/videos/LucianoVideo.mp4')
    const OlympiaParkVideo = require('../../assets/videos/Olympiapark.mp4')
    const AutoVideo = require('../../assets/videos/AutoVideo.mp4')


    return (
        <View>
            <Text>Videos:</Text>
            <VideoCard title={'Übung 1'} video={LucianoVideo} color={'blue'} BulletList1={'• Info 1'} BulletList2={'• Info 2'} BulletList3={'• Info 3'} onPress={navigateToFirstExercise}/>
            <VideoCard title={'Übung 2'} video={OlympiaParkVideo} color={'red'} BulletList1={'• Info 1'} BulletList2={'• Info 2'} BulletList3={'• Info 3'} onPress={navigateToSecondExercise}/>
            <VideoCard title={'Übung 3'} video={AutoVideo} color={'green'} BulletList1={'• Info 1'} BulletList2={'• Info 2'} BulletList3={'• Info 3'} onPress={navigateToThirdExercise}/>
        </View>
    )
}

export default Exercises;
