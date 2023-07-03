import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {BlogScreen} from "../../types/StackSreens";
import Card from "../../components/Card";

type ChooseBlogScreen = StackNavigationProp<BlogScreen, 'BlogScreen'>;

type Props = {
    navigation: ChooseBlogScreen;
};

const Blog: React.FC<Props> = ({navigation}) => {

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

    function test() {
        alert("Test")
    }

    const RefluxLogo = require('../../assets/Reflux-Logo.png');
    const MedicationLogo = require('../../assets/Medikament-Logo.png');
    const DoctorsLogo = require('../../assets/Arzt-Logo.png');
    const OPLogo = require('../../assets/Operation- Logo.png');
    const Chirugie = require('../../assets/Chirugie.png')

    return (
        <View>
            <ScrollView>
                <Card title={'What is Reflux'} BulletList1={'All informations about Reflux'} image={RefluxLogo} onPress={navigateToWhatIsRefluxScreen} color={'#0995ea'}/>
                <Card title={'Ärzte'} BulletList1={'Testimonials with doctors'} image={DoctorsLogo} onPress={navigateToDoctorScreen} color={'#fe635f'}/>
                <Card title={'OP Verfahren'} image={Chirugie} onPress={navigateToOPVerfahrenScreen} color={'#05d4b8'}/>
                <Card title={'Medication'} image={MedicationLogo} onPress={navigateToMedikamenteScreen} color={'red'}/>
            </ScrollView>
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
