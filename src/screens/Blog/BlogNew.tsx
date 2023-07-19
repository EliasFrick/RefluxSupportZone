import React from "react";
import {Dimensions, Image, ImageSourcePropType, Pressable, StatusBar ,ScrollView, StyleSheet, Text, View} from "react-native";
import Refluxtransparent from '../../assets/pictures/Reflux-transparent.png'
import Meditation from '../../assets/pictures/MeditierendeFrau-transparent.png'
import Krankenhaus from '../../assets/pictures/Krankenhaus-transpraent-remove.png'
import Medikamente from '../../assets/pictures/Medikamente-transparent.png'
import {StackNavigationProp} from "@react-navigation/stack";
import {BlogScreen} from "../../types/StackSreens";

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const {width} = Dimensions.get('window');
const CardWidth = ScreenWidth * 0.45;
const titleSize = 0.07;
const cardTextSize = 0.04;


type ChooseBlogScreen = StackNavigationProp<BlogScreen, 'BlogScreen'>;

type Props = {
    navigation: ChooseBlogScreen;
};


const BlogNew: React.FC<Props> = ({navigation}) => {

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


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Informationen über Reflux</Text>
                <View style={styles.CardContainer}>
                    <View style={styles.row}>
                        <Pressable onPress={navigateToWhatIsRefluxScreen}>
                            <View style={[styles.card, {marginRight: 1, backgroundColor: '#f9eec0'}]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.CardText}>Reflux</Text>
                                </View>
                                <Image source={Refluxtransparent} style={styles.image}/>
                            </View>
                        </Pressable>
                        <Pressable onPress={navigateToMedikamenteScreen}>
                            <View style={[styles.card, {backgroundColor: '#fadcc3'}]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.CardText}>Meditation</Text>
                                </View>
                                <Image source={Meditation} style={styles.image}/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        <Pressable onPress={navigateToDoctorScreen}>
                            <View style={[styles.card, {marginRight: 1, backgroundColor: '#f9eec0'}]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.CardText}>Ärzte</Text>
                                </View>
                                <Image source={Krankenhaus} style={styles.image}/>
                            </View>
                        </Pressable>
                        <Pressable onPress={navigateToMedikamenteScreen}>
                            <View style={[styles.card, {backgroundColor: '#dafbbe'}]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.CardText}>Medikamente</Text>
                                </View>
                                <Image source={Medikamente} style={styles.image}/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        <Pressable onPress={navigateToOPVerfahrenScreen}>
                            <View style={[styles.card, {marginRight: 1, backgroundColor: '#d0e0fa'}]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.CardText}>Operationen</Text>
                                </View>
                                <Image source={Krankenhaus} style={styles.image}/>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => alert('Es muss noch ein Screen hinterlegt werden')}>
                            <View style={[styles.card, {backgroundColor: '#b6e6fa'}]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.CardText}>Platzhalter</Text>
                                </View>
                                <Image source={Medikamente} style={styles.image}/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        <Pressable onPress={() => alert('Es muss noch ein Screen hinterlegt werden')}>
                            <View style={[styles.card, {marginRight: 1, backgroundColor: '#c9e7c1'}]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.CardText}>Platzhalter</Text>
                                </View>
                                <Image source={Krankenhaus} style={styles.image}/>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => alert('Es muss noch ein Screen hinterlegt werden')}>
                            <View style={[styles.card, {backgroundColor: '#bfe8ec'}]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.CardText}>Platzhalter</Text>
                                </View>
                                <Image source={Medikamente} style={styles.image}/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        <Pressable onPress={() => alert('Es muss noch ein Screen hinterlegt werden')}>
                            <View style={[styles.card, {marginRight: 1, backgroundColor: '#fad8f0'}]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.CardText}>Platzhalter</Text>
                                </View>
                                <Image source={Krankenhaus} style={styles.image}/>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => alert('Es muss noch ein Screen hinterlegt werden')}>
                            <View style={[styles.card, {backgroundColor: '#dbe1f9'}]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.CardText}>Platzhalter</Text>
                                </View>
                                <Image source={Medikamente} style={styles.image}/>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

interface CardProps {
    title: string;
    BulletList1?: string,
    BulletList2?: string,
    BulletList3?: string,
    BulletList4?: string,
    image: ImageSourcePropType,
    onPress: () => void;
    color: string
}

export default BlogNew;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    row: {
        flexDirection: 'row',
        marginBottom: "1.5%",
        marginTop: ScreenHeight * 0.001
    },
    card: {
        width: CardWidth,
        height: ScreenHeight * 0.15,
        backgroundColor: 'lightgray',
        marginLeft: "2%",
        marginRight: "2%",
        borderRadius: 25,
        overflow: 'hidden'
    },
    title: {
        color: 'white',
        fontSize: width * titleSize,
        justifyContent: 'flex-start',
        marginTop: ScreenHeight * 0.01,
    },
    CardContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: ScreenHeight * 0.02
    },
    image: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        marginLeft: "70%",
        marginTop: "10%"
    },
    CardText: {
        color: 'black',
        textAlign: 'center',
        fontSize: width * cardTextSize,
        marginTop: "20%",
        position: 'absolute',
        marginLeft: "10%"
    },
    textContainer: {
        // flex: 1,
        // justifyContent: 'center',
    }
});
