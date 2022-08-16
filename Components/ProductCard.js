import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES, COLORS, FONTS } from "../constants";
import { RatingComponent } from "./index";
import { AntDesign } from "@expo/vector-icons";

const ProductCard = ({
  width = 185,
  image,
  category = "Category",
  pname = "Product Name",
  ratingValue = 4.5,
  ratingNumber = 48,
  price = 100,
  onPressFunction,
}) => {
  return (
    <TouchableOpacity
      style={{ padding: 3 }}
      onPress={onPressFunction}
      activeOpacity={0.8}
    >
      <View style={[styles.container, { width: width }]}>
        <View
          style={[
            styles.imageContainer,
            { width: width - 15, height: width - 15 },
          ]}
        >
          <Image
            source={image}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
          />
        </View>
        <Text style={styles.categoryText}>{category}</Text>
        <Text style={styles.productName}>{pname}</Text>
        <RatingComponent
          ratingNumber={ratingNumber}
          ratingValue={ratingValue}
        />
        <View style={styles.priceAndHeart}>
          <Text style={styles.price}>${price}</Text>
          <AntDesign name="hearto" size={28} color={COLORS.peach} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.small,
    backgroundColor: COLORS.white,
    marginRight: 6,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    flexGrow: 1,
  },
  imageContainer: {
    borderRadius: 5,
    alignSelf: "center",
  },
  categoryText: {
    color: COLORS.gray_text_2,
    fontFamily: FONTS.mul700,
    fontSize: 13,
    letterSpacing: 0.5,
    marginTop: 5,
    paddingLeft: 4,
  },
  productName: {
    fontFamily: FONTS.mul700,
    fontSize: 17,
    color: COLORS.black_heading,
    lineHeight: 25,
    paddingLeft: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginLeft: 6,
    marginTop: 5,
    marginBottom: 20,
  },
  ratingNumber: {
    fontSize: 12,
    fontFamily: FONTS.mul600,
    marginLeft: 4,
    color: COLORS.gray_text,
  },
  priceAndHeart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
    flexGrow: 1,
    alignItems: "flex-end",
  },
  price: {
    fontFamily: FONTS.mul700,
    fontSize: 20,
  },
});
export default ProductCard;
