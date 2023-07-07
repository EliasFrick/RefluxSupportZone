import React from "react";
import {ScrollView, Text, View} from "react-native";
import VideoCard from "../../components/VideoCard";
import {ExerciseScreen} from "../../types/StackSreens";
import {StackNavigationProp} from "@react-navigation/stack";
import VideoCardKopie from "../../components/VideoCards - Kopire";

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
    const FiveMinMeditation = require('../../assets/videos/5MinMeditation.mp4')
    const ZwerchfellVideo = require('../../assets/videos/EntspannedeinZwerchfell.mp4')
    const SodbrennVideo = require('../../assets/videos/SodbrennenProbierediesenTrick.mp4')


    return (
        <View>
            <ScrollView>
                <VideoCard title={'Meditation'} video={FiveMinMeditation} color={'blue'} BulletList1={'• Geführte Meditation'}
                           BulletList2={'• Info 2'} BulletList3={'• Info 3'} onPress={navigateToFirstExercise}/>
                <VideoCard title={'Zwerchfell entspannen'} video={ZwerchfellVideo} color={'red'} BulletList1={'• Zwerschfell entspannen'}
                           BulletList2={'• Info 2'} BulletList3={'• Info 3'} onPress={navigateToSecondExercise}/>
                <VideoCard title={'Sodbrennen'} video={SodbrennVideo} color={'green'} BulletList1={'• Tips gegen Sodbrennen'}
                           BulletList2={'• Info 2'} BulletList3={'• Info 3'} onPress={navigateToThirdExercise}/>
            </ScrollView>
        </View>
    )
}

export default Exercises;
