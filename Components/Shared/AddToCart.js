import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton, TextWithIconButton } from "../index";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";

const AddToCart = ({ onPressFunction }) => {
  return (
    <View style={styles.border}>
      <View style={styles.container}>
        <View style={styles.iconButton}>
          <IconButton>
            <AntDesign name="hearto" size={36} color={COLORS.peach} />
          </IconButton>
        </View>
        <View style={styles.button}>
          <TextWithIconButton
            text={"Add To Cart"}
            onPressFunction={onPressFunction}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.moreLarge,
    marginBottom: 20,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    marginRight: 20,
  },
  border: {
    borderTopColor: COLORS.gray_3,
    borderTopWidth: 2,
  },
  button: {
    position: "absolute",
    right: 0,
    top: 15,
  },
});
export default AddToCart;
