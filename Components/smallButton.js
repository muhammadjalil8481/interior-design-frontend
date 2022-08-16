import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

const SmallButton = ({ text = "button", width = 66, styleObj = {} }) => {
  return (
    <View
      style={[
        styles.btn,
        { width: width, borderRadius: width - (width - 20) },
        styleObj,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </View>
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
    fontSize: 14,
    fontFamily: FONTS.mul600,
    color: COLORS.white,
    paddingVertical: 4,
    paddingHorizontal: 10,
    letterSpacing: 0.5,
  },
});
export default SmallButton;
