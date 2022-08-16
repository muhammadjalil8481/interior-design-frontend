import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import { Button } from "./index";

const Checkout = ({ onPressFunction, total = 1000,text="Checkout"}) => {
  return (
    <View style={styles.border}>
      <View style={styles.container}>
        <View style={styles.detail}>
          <Text style={styles.costText}>Total Cost</Text>
          <Text style={styles.costText}>${total}</Text>
        </View>
        <View style={styles.button}>
          <Button
            width={320}
            text={text}
            fontSize={18}
            styleObj={{ height: 50 }}
            onPressFunction={onPressFunction}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingTop: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },
  border: {
    borderTopColor: COLORS.gray_3,
    borderTopWidth: 2,
  },
  detail: {
    flexDirection: "row",
    paddingHorizontal: 25,
    justifyContent: "space-between",
    marginBottom: 8,
  },
  costText: {
    fontFamily: FONTS.mul700,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    alignSelf: "center",
  },
});
export default Checkout;
