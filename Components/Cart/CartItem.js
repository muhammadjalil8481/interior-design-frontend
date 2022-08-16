import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { assets, FONTS, COLORS } from "../../constants";

const CartItem = ({
  image,
  name = "Product Name",
  price = "100",
  quantity = 0,
  incrementFunction,
  decrementFunction,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image
          source={image}
          resizeMode="cover"
          style={{ width: "100%", height: "100%", borderRadius: 5 }}
        />
      </View>
      <View style={styles.nameAndPrice}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View style={styles.quantity}>
        <TouchableOpacity style={styles.icon} onPress={incrementFunction}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.icon} onPress={decrementFunction}>
          <Text style={styles.text}>--</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: 25,
    borderRadius: 5,
    marginBottom: 8,
    flexDirection: "row",
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 8,
  },
  image: {
    width: 152,
    height: 170,
  },
  nameAndPrice: {
    marginLeft: 12,
  },
  name: {
    fontFamily: FONTS.mont600,
    fontSize: 16,
    color: COLORS.black_heading,
    maxWidth: 152,
    lineHeight: 25,
    marginBottom: 4,
  },
  price: {
    fontFamily: FONTS.mul700,
    fontSize: 16,
    color: COLORS.black_heading,
  },
  quantity: {
    position: "absolute",
    bottom: 10,
    right: 20,
    flexDirection: "row",
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.peach,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: 22,
    position: "relative",
    bottom: 6,
    letterSpacing: -1,
  },
  quantityText: {
    fontFamily: FONTS.mul700,
    fontSize: 17,
    marginHorizontal: 11,
  },
});
