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
        navigation.navigate('RefluxInformations');
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

    const RefluxLogo = require('../../assets/pictures/Reflux-Logo.png');
    const MedicationLogo = require('../../assets/pictures/Medikament-Logo.png');
    const DoctorsLogo = require('../../assets/pictures/Arzt-Logo.png');
    const OPLogo = require('../../assets/pictures/Chirugie.png')

    return (
        <View>
            <ScrollView>
                <Card title={'Was ist Reflux'} BulletList1={'• All informations about Reflux'} BulletList2={'• All informations about Reflux'} image={RefluxLogo} onPress={navigateToWhatIsRefluxScreen} color={'#0995ea'}/>
                <Card title={'Ärzte'} BulletList1={'• Testimonials with doctors'} image={DoctorsLogo} onPress={navigateToDoctorScreen} color={'#fe635f'}/>
                <Card title={'OP Verfahren'} BulletList1={'• Tips for the operation'} image={OPLogo} onPress={navigateToOPVerfahrenScreen} color={'#05d4b8'}/>
                <Card title={'Medication'} BulletList1={'• Best Medications'} image={MedicationLogo} onPress={navigateToMedikamenteScreen} color={'red'}/>
            </ScrollView>
        </View>
    );
}

export default Blog;

