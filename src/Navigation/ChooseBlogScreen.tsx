import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
//import Screens
import RefluxInformationen from "../screens/Blog/screens/RefluxInformationen";
import Doctor from "../screens/Blog/screens/Doctor";
import OPVerfahren from "../screens/Blog/screens/OPVerfahren";
import Medikamente from "../screens/Blog/screens/Medikamente";
import Blog from "../screens/Blog/Blog";
import Exercises from "../screens/Exercises/Exercises";
import FirstExercise from "../screens/Exercises/screens/FirstExercise";
import SecondExercise from "../screens/Exercises/screens/SecondExercise";
import ThirdExercise from "../screens/Exercises/screens/ThirdExercise";
import BlogNew from "../screens/Blog/BlogNew";

const Stack = createStackNavigator();


export default function ChooseBlogScreen () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ChooseBlogScreen" component={BlogNew} options={{headerShown: false}} />
            <Stack.Screen name="RefluxInformations" component={RefluxInformationen} />
            <Stack.Screen name="Doctor" component={Doctor} />
            <Stack.Screen name="OPVerfahren" component={OPVerfahren} />
            <Stack.Screen name="Medikamente" component={Medikamente} />
        </Stack.Navigator>
    );
}


export function ChooseExercise () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ExerciseScreen" component={Exercises} options={{headerShown: false}} />
            <Stack.Screen name="FirstExercise" component={FirstExercise} />
            <Stack.Screen name="SecondExercise" component={SecondExercise} />
            <Stack.Screen name="ThirdExercise" component={ThirdExercise} />
        </Stack.Navigator>
    );
}


