import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { assets, COLORS, FONTS } from "../constants";
import { UserProfileImage, RatingComponent } from "./index";

const Review = ({
  image = assets.natasha,
  name = "Username",
  title = "Review Title",
  date = "28/01/22",
  ratingValue,
  description,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.image}>
          <UserProfileImage image={image} width={46} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.rating}>
          <RatingComponent
            ratingText={false}
            ratingValue={ratingValue}
            size={18}
          />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 2,
    marginTop: 20,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent :
  },
  image: {
    marginRight: 10,
  },
  name: {
    fontFamily: FONTS.mul700,
    fontSize: 16,
  },
  rating: {
    position: "absolute",
    top: 9,
    right: 0,
  },
  middle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  title: {
    fontFamily: FONTS.mul700,
    fontSize: 18,
    color: COLORS.peach,
    maxWidth: 234,
  },
  date: {
    fontFamily: FONTS.mul700,
    fontSize: 14,
    color: COLORS.black_text_2,
  },
  bottom: {
    marginTop: 12,
    marginBottom: 20,
  },
  description: {
    fontFamily: FONTS.mul600,
    fontSize: 14,
    color: COLORS.black_text_2,
    letterSpacing: 0.4,
    lineHeight: 22,
  },
});
