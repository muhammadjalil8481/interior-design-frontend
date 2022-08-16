import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { CircleButton } from "./index";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../constants";

const Header = ({ text = "Details" }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <CircleButton width={52}>
          <AntDesign name="arrowleft" size={24} color={COLORS.white} />
        </CircleButton>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: SIZES.large,
    marginTop: SIZES.base,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray,
    paddingBottom: 6,
  },
  icon: {
    flexGrow: 1,
  },
  textContainer: {
    flexGrow: 1,
    marginRight: 20,
  },
  text: {
    fontFamily: FONTS.mont600,
    fontSize: 18,
    color: COLORS.black_heading,
  },
});

export default Header;
