import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TextWithIconButton = ({ text, Icon, onPressFunction }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPressFunction}
    >
      <Text style={styles.text}>{text}</Text>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="cart" size={28} color={COLORS.peach} />
      </View>
    </TouchableOpacity>
  );
};

export default TextWithIconButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.peach,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 22,
    paddingVertical: 8,
  },
  text: {
    fontFamily: FONTS.mont600,
    fontSize: 17,
    color: COLORS.white,
    marginRight: 60,
  },
  iconContainer: {
    width: 42,
    height: 42,
    backgroundColor: COLORS.white,
    borderRadius: 42 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
