import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Divider = ({ stylesObj = {} }) => {
  return <View style={[styles.divider, stylesObj]}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 8,
    backgroundColor: COLORS.gray,
    borderRadius: 3,
  },
});
