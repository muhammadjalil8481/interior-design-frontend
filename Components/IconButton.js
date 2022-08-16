import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const IconButton = ({ children }) => {
  return <View style={styles.button}>{children}</View>;
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 58,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
