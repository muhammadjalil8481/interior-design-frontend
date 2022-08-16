import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FONTS, COLORS } from "../constants";

const Description = ({ text }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{showFull ? text : text.slice(0, 170)}</Text>
      <Text style={styles.read} onPress={() => setShowFull(!showFull)}>
        {showFull ? "Read less" : "Read more"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  text: {
    fontFamily: FONTS.mul700,
    fontSize: 14,
    color: COLORS.gray_text,
    letterSpacing: 0.4,
    lineHeight: 22,
    marginBottom: 12,
  },
  read: {
    fontFamily: FONTS.mul700,
    fontSize: 15,
    color: COLORS.peach,
    alignSelf: "flex-end",
    marginRight: 10,
  },
});

export default Description;
