import { View, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const CircleButton = ({ width = 75, top = 0, children }) => {
  return (
    <View style={[{ width: width, height: width, top: top }, styles.circleBtn]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  circleBtn: {
    borderRadius: 75 / 2,
    backgroundColor: COLORS.peach,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "white",
  },
});
export default CircleButton;
