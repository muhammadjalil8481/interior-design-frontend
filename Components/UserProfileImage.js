import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants"

const UserProfileImage = ({ width, borderColor, image }) => {
  return (
    <View style={styles(width, borderColor).circle}>
      <View style={styles(width).imageContainer}>
        <Image
          source={image}
          resizeMode="cover"
          style={{ width: "100%", height: "100%", borderRadius: width / 2 }}
        />
      </View>
    </View>
  );
};

const styles = (width, borderColor) =>
  StyleSheet.create({
    circle: {
      width: width ? width : 50,
      height: width ? width : 50,
      borderColor: borderColor ? borderColor : COLORS.peach,
      borderWidth: 2,
      borderRadius: width ? width / 2 : 0,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      width: width ? width - 6 : 48,
      height: width ? width - 6 : 48,
      borderRadius: width ? width / 2 : 0,
    },
    image: {
      width: "100%",
      height: "100%",
    },
  });
export default UserProfileImage;
