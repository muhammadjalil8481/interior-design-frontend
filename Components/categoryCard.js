import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { assets, COLORS, SIZES, FONTS } from "../constants";

const CategoryCard = ({
  width = 160,
  image = assets.catFurniture,
  category = "Furniture",
}) => {
  return (
    <View style={{ padding: 3 }}>
      <View style={[styles.container, { width: width }]}>
        <View
          style={[
            styles.imageContainer,
            { width: width - 16, height: width - 8 },
          ]}
        >
          <Image
            source={image}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
          />
        </View>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: SIZES.base,
    backgroundColor: COLORS.white,
    marginRight: 6,
    marginBottom: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    // flexGrow: 1,
  },
  imageContainer: {
    borderRadius: 5,
    alignSelf: "center",
  },
  categoryText: {
    color: COLORS.black_heading,
    fontFamily: FONTS.mul700,
    fontSize: 17,
    lineHeight: 25,
    paddingLeft: 4,
    marginTop: 4,
  },
  productName: {
    fontFamily: FONTS.mul700,
    fontSize: 17,
    color: COLORS.black_heading,
    lineHeight: 25,
    paddingLeft: 4,
  },
});

export default CategoryCard;
