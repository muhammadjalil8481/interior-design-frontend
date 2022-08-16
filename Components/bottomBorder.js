import { View, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const BottomBorder = ({ children }) => {
  return (
    <View>
      {children}
      <View style={styles.btmBorder}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  btmBorder: {
    left: 0,
    top: 2,
    height: 2,
    width: 25,
    backgroundColor: COLORS.black_heading,
  },
});

export default BottomBorder;
