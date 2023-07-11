import {View, Text, useWindowDimensions, StyleSheet, Image} from "react-native";
import * as item from '../constants/slides'

export default function OnBoardingItem() {

    const {width} = useWindowDimensions();

    return(
        <View style={[styles.container, {width}]}>
            <Text>Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        flex: 0.7,
        justifyContent: 'center',
    }
})
