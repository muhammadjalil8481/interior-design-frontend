import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Rating } from "react-native-elements";
import { COLORS, FONTS } from "../constants";

const RatingComponent = ({
  ratingNumber = 45,
  ratingValue = 4.8,
  size = 14,
  fontSize = 12,
  ratingText = true,
}) => {
  return (
    <View style={styles.ratingContainer}>
      <Rating
        imageSize={size}
        ratingColor={COLORS.yellow}
        type="custom"
        minValue={1}
        startingValue={ratingValue}
        fractions={1}
        readonly
      />
      {ratingText && (
        <Text style={[styles.ratingNumber, { fontSize: fontSize }]}>
          ({ratingNumber})
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginLeft: 6,
    // height: 50,
    marginTop: 5,
    marginBottom: 20,
  },
  ratingNumber: {
    fontFamily: FONTS.mul600,
    marginLeft: 4,
    color: COLORS.gray_text,
  },
});

export default RatingComponent;
