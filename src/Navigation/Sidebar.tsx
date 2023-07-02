import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomDrawer from "./CustomDrawer";
//Import Screens
import ChooseBlogScreen from "./ChooseBlogScreen";
import Blog from "../screens/Blog/Blog";
import Exercises from "../screens/Exercises";
import Nutrition from "../screens/Nutrition";

const Drawer = createDrawerNavigator();

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
          drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
        }}
      >
        <Drawer.Screen
          key={"Blog"}
          name={"Blog"}
          component={ChooseBlogScreen}
          options={{
            drawerIcon: () => (
              <FontAwesome name={"info"} size={32} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          key={"Exercises"}
          name={"Übungen"}
          component={Exercises}
          options={{
            drawerIcon: () => (
              <FontAwesome name={"train"} size={32} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          key={"Nutrition"}
          name={"Ernährung"}
          component={Nutrition}
          options={{
            drawerIcon: () => (
              <FontAwesome name={"apple"} size={32} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Sidebar;
