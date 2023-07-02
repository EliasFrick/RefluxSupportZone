import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
//import Screens
import RefluxInformationen from "../screens/Blog/screens/RefluxInformationen";
import Doctor from "../screens/Blog/screens/Doctor";
import OPVerfahren from "../screens/Blog/screens/OPVerfahren";
import Medikamente from "../screens/Blog/screens/Medikamente";
import Blog from "../screens/Blog/Blog";

const Stack = createStackNavigator();


export default function ChooseBlogScreen () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ChooseBlogScreen" component={Blog} options={{headerShown: false}} />
            <Stack.Screen name="Was ist Reflux" component={RefluxInformationen} />
            <Stack.Screen name="Doctor" component={Doctor} />
            <Stack.Screen name="OPVerfahren" component={OPVerfahren} />
            <Stack.Screen name="Medikamente" component={Medikamente} />
        </Stack.Navigator>
    );
}
