import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
//Import Screens
import StartScreen from "../screens/StartScreen";
import ChooseBlogScreen from "./ChooseBlogScreen";
import {ChooseExercise} from "./ChooseBlogScreen";
import Exercises from "../screens/Exercises/Exercises";
import Nutrition from "../screens/Nutrition";
import {StyleSheet, View, Text} from "react-native";
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {Dimensions} from "react-native";


const Drawer = createDrawerNavigator();

const {width} = Dimensions.get("window");
const sidebarLabelSize = 0.05

const Sidebar = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(CustomDrawerProps) => (
                    <CustomDrawer {...CustomDrawerProps} />
                )}
                screenOptions={{
                    drawerActiveBackgroundColor: "#aa1Bea",
                    drawerActiveTintColor: "#fff",
                    drawerInactiveTintColor: "#333",
                    drawerLabelStyle: {
                        marginLeft: 0, // Set the left margin to 0
                        fontSize: width * sidebarLabelSize,
                        textAlign: 'left',
                    }
                }}
            >
                <Drawer.Screen
                    key={"StartSeite"}
                    name={"Start"}
                    component={StartScreen}
                    options={{
                        drawerIcon: () => (
                            <View style={styles.iconContainer}>
                                <Icon name="home-outline" size={22} color="black"/>
                            </View>

                        ),
                        headerStyle: styles.topBackStyle,
                        headerTintColor: "white"
                    }}
                />
                <Drawer.Screen
                    key={"Blog"}
                    name={"Blog"}
                    component={ChooseBlogScreen}
                    options={{
                        drawerIcon: () => (
                            <View style={styles.iconContainer}>
                                <Icon name={"information-outline"} size={32} color="black"/>
                            </View>

                        ),
                        headerStyle: styles.topBackStyle,
                        headerTintColor: "white"
                    }}
                />
                <Drawer.Screen
                    key={"Exercises"}
                    name={"Übungen"}
                    component={ChooseExercise}
                    options={{
                        drawerIcon: () => (
                            <View style={styles.iconContainer}>
                                <Icon name={"barbell-outline"} size={32} color="black"/>
                            </View>

                        ),
                        headerStyle: styles.topBackStyle,
                        headerTintColor: "white"
                    }}
                />
                <Drawer.Screen
                    key={"Nutrition"}
                    name={"Ernährung"}
                    component={Nutrition}
                    options={{
                        drawerIcon: () => (
                            <View style={styles.iconContainer}>
                                <Icon name={"fast-food-outline"} size={32} color={"black"}/>
                            </View>
                        ),
                        headerStyle: styles.topBackStyle,
                        headerTintColor: "white"
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Sidebar;

const styles = StyleSheet.create({
    iconContainer: {
        marginRight: -15,
        width: 32, // anpassen, je nachdem wie breit das Icon sein soll
        alignItems: 'flex-start',
    },
    topFrontStyle: {
        color: "white"
    },
    topBackStyle: {
        backgroundColor: "#1f1f1f",
    }
})
