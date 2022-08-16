import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

const Button = ({
  text = "button",
  width = 80,
  styleObj = {},
  onPressFunction,
  fontSize = 14,
  fontFamily = FONTS.mul600,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={[
        styles.btn,
        { width: width, borderRadius: width - (width - 5) },
        styleObj,
      ]}
    >
      <Text
        style={[styles.text, { fontSize: fontSize, fontFamily: fontFamily }]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.peach,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  text: {
    color: COLORS.white,
    paddingVertical: 6,
    paddingHorizontal: 10,
    letterSpacing: 0.5,
  },
});
export default Button;
