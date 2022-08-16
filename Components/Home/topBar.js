import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SIZES, users, COLORS } from "../../constants";
import { UserProfileImage } from "../index";
import { Ionicons } from "@expo/vector-icons";

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <UserProfileImage width={50} image={users[1].profileImage} />
      <Ionicons
        name="notifications-outline"
        size={40}
        color={COLORS.black_heading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    paddingTop: SIZES.moreLarge,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: SIZES.moreLarge,
  },
});

export default TopBar;
