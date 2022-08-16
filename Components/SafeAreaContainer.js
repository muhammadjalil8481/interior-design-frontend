import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";

const SafeAreaContainer = ({ children, bgColor }) => {
  return (
    <SafeAreaView style={styles(bgColor).container}>{children}</SafeAreaView>
  );
};

const styles = (bgColor) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
      backgroundColor: bgColor ? bgColor : null,
    },
  });
export default SafeAreaContainer;
