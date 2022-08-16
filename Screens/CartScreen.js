import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Header, SafeAreaContainer, Checkout } from "../Components";
import { COLORS, products, FONTS } from "../constants";
import CartItem from "../Components/Cart/CartItem";
import { FlatList } from "react-native-gesture-handler";
import { CartContext } from "../Services/cartContext";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  const { items, increment, decrement, totalItems, totalAmount } =
    useContext(CartContext);

  return (
    <SafeAreaContainer bgColor={COLORS.white}>
      <Header text="My Cart" />
      <ScrollView>
        <View style={styles.list}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartItem
                image={item.featuredImage}
                name={item.name}
                price={item.price}
                incrementFunction={() => increment(item.id)}
                decrementFunction={() => decrement(item.id)}
                quantity={item.quantity}
              />
            )}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.costText}>Sub Total</Text>
            <Text style={styles.costText}>${totalAmount}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.costText}>Shipping Cost</Text>
            <Text style={styles.costText}>${totalItems * 2}</Text>
          </View>
        </View>
        <Checkout
          total={totalAmount + totalItems * 2}
          onPressFunction={() => navigation.navigate("CheckoutForm")}
        />
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    marginBottom: 20,
  },
  details: {
    paddingTop: 30,
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
});
export default CartScreen;
