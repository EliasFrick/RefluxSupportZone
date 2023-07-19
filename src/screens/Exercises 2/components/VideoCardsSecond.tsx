import React, {useRef, useState} from "react";
import {Dimensions, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View} from "react-native";
import {Video} from 'expo-av';


const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const {width} = Dimensions.get('window');
const CardWidth = ScreenWidth * 0.95;
const titleSize = 0.07;
const cardTextSize = 0.04 * width;

const VideoCardsSecond = () => {

//Video starten und Pausieren
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<Video>(null);

    const Erde = require('../../../assets/videos/Erde-unscreen.gif')
    const Dancer = require('../../../assets/videos/Dancer.gif')
    const Pointer = require('../../../assets/videos/Ponter.gif')

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Informationen über Reflux</Text>
                <View style={styles.CardContainer}>
                    <View style={styles.row}>
                        <View style={[styles.card, {backgroundColor: '#412d2e'}]}>
                            <Image
                                source={Erde}
                                style={styles.video}
                                resizeMode={'cover'}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Übung 1</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.card, {backgroundColor: '#412d2e'}]}>
                            <Image
                                source={Dancer}
                                style={styles.video}
                                resizeMode={'cover'}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Übung 2</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.card, {backgroundColor: '#412d2e'}]}>
                            <Image
                                source={Pointer}
                                style={styles.videoPointer}
                                resizeMode={'cover'}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Übung 3</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.card, {backgroundColor: '#412d2e'}]}>
                            <Image
                                source={Erde}
                                style={styles.video}
                                resizeMode={'cover'}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Übung 4</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.card, {backgroundColor: '#412d2e'}]}>
                            <Image
                                source={Dancer}
                                style={styles.video}
                                resizeMode={'cover'}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Übung 5</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.card, {backgroundColor: '#412d2e'}]}>
                            <Image
                                source={Pointer}
                                style={styles.videoPointer}
                                resizeMode={'cover'}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Übung 6</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.card, {backgroundColor: '#412d2e'}]}>
                            <Image
                                source={Erde}
                                style={styles.video}
                                resizeMode={'cover'}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Übung 7</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.card, {backgroundColor: '#412d2e'}]}>
                            <Image
                                source={Dancer}
                                style={styles.video}
                                resizeMode={'cover'}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Übung 8</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.card, {backgroundColor: '#412d2e'}]}>
                            <Image
                                source={Pointer}
                                style={styles.videoPointer}
                                resizeMode={'cover'}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Übung 9</Text>
                            </View>
                        </View>
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

export default VideoCardsSecond;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#351d1c'
        backgroundColor: 'black'
    },
    row: {
        flexDirection: 'row',
        marginBottom: "1.5%",
        marginTop: ScreenHeight * 0.001
    },
    card: {
        width: CardWidth,
        height: ScreenHeight * 0.12,
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
    video: {
        width: "25%",
        height: "85%",
        position: 'absolute',
        right: "75%",
        marginTop: "1%"
    },
    videoContainer: {},
    videoPointer: {
        width: "25%",
        height: "85%",
        position: 'absolute',
        right: "67%",
        marginTop: "1%"
    },
    text: {
        color: 'white',
        marginLeft: '75%',
        marginTop: '5%',
        fontSize: cardTextSize
    },
    textContainer: {

    }
});
