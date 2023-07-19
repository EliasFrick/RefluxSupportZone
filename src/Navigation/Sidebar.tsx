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
import {StyleSheet, View} from "react-native";
import BlogNew from "../screens/Blog/BlogNew";
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {Dimensions} from "react-native";
import ExercisesSecond from "../screens/Exercises 2/ExercisesSecond";

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
                    drawerActiveBackgroundColor: "white",
                    drawerActiveTintColor: "black",
                    drawerInactiveTintColor: "#333",
                    drawerStyle:{
                        backgroundColor: '#6a7980'
                    },
                    drawerLabelStyle: {
                        marginLeft: 0, // Set the left margin to 0
                        fontSize: width * sidebarLabelSize,
                        textAlign: 'left',
                    },
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
                {/*<Drawer.Screen*/}
                {/*    key={"Exercises"}*/}
                {/*    name={"Übungen"}*/}
                {/*    component={ChooseExercise}*/}
                {/*    options={{*/}
                {/*        drawerIcon: () => (*/}
                {/*            <View style={styles.iconContainer}>*/}
                {/*                <Icon name={"barbell-outline"} size={32} color="black"/>*/}
                {/*            </View>*/}

                {/*        ),*/}
                {/*        headerStyle: styles.topBackStyle,*/}
                {/*        headerTintColor: "white"*/}
                {/*    }}*/}
                {/*/>*/}
                <Drawer.Screen
                    key={"ExercisesSecond"}
                    name={"Übungen"}
                    component={ExercisesSecond}
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
        width: "13%", // anpassen, je nachdem wie breit das Icon sein soll
        alignItems: 'flex-start',
    },
    topBackStyle: {
        backgroundColor: "#6a7980",
    }
})
