import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FONTS } from "../constants";
import { Button } from "./index";

const HeadingInfo = ({
  heading = "Heading",
  onPressFunction,
  filter = false,
  fontSize = 24,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { maxWidth: "80%", fontSize: fontSize }]}>
        {heading}
      </Text>
      {onPressFunction ? (
        filter ? (
          <Button text={"filter"} onPressFunction={onPressFunction} />
        ) : (
          <TouchableOpacity onPress={onPressFunction}>
            <Ionicons name="arrow-forward" size={32} color="black" />
          </TouchableOpacity>
        )
      ) : (
        <Ionicons name="arrow-forward" size={32} color="black" />
        // <Button text={"filter"} onPressFunction={onPressFunction} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    // fontSize: 24,
    fontFamily: FONTS.mont600,
    lineHeight: 34,
  },
});
export default HeadingInfo;
