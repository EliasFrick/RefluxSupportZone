import React from "react";
import { StyleSheet, Text, View} from "react-native";
import {refluxBeschreibung, wasIstReflux, unterstuetzendeMassnahmen, beschreibungUnterstuetzendeMassnahmen} from "../../constants/BlogTexts";
import StandartButton from "../../components/StandartButton";
import { StackNavigationProp } from '@react-navigation/stack';
import {BlogScreen} from "../../types/StackSreens";

type ChooseBlogScreen = StackNavigationProp<BlogScreen, 'BlogScreen'>;

type Props = {
    navigation: ChooseBlogScreen;
};

const Blog: React.FC<Props> = ({ navigation }) => {

    const navigateToWhatIsRefluxScreen = () => {
        navigation.navigate('RefluxInformationen');
    };

    const navigateToDoctorScreen = () => {
        navigation.navigate('Doctor');
    };

    const navigateToOPVerfahrenScreen = () => {
        navigation.navigate('OPVerfahren');
    };

    const navigateToMedikamenteScreen = () => {
        navigation.navigate('Medikamente');
    };
    return (
        <View>
            <StandartButton text={'What is Reflux'} onPress={navigateToWhatIsRefluxScreen} />
            <StandartButton text={'Ärzte'} onPress={navigateToDoctorScreen} />
            <StandartButton text={'OP Verfahren'} onPress={navigateToOPVerfahrenScreen} />
            <StandartButton text={'Medikamente'} onPress={navigateToMedikamenteScreen} />
        </View>
    );
}

export default Blog;

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
