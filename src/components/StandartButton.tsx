import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

const ChooseButton = (props: ButtonProps) => {

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={style.container}>
        <View style={style.button}>
          <Text style={style.buttonText}>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "grey",
    width: 340,
    height: 100,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});

export default ChooseButton;
