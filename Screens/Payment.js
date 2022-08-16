import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { Header, SafeAreaContainer, Checkout } from "../Components";
import { COLORS, FONTS, assets } from "../constants";
import { CartContext } from "../Services/cartContext";
import { useNavigation } from "@react-navigation/native";

const paymentOptions = [
  {
    icon: assets.creditcard,
    text: "Credit/Debit Card",
  },
  {
    icon: assets.transfer,
    text: "Bank Transfer",
  },
  {
    icon: assets.paypal,
    text: "Paypal",
  },
  {
    icon: assets.easypaisa,
    text: "EasyPaisa",
  },
  {
    icon: assets.jazzcash,
    text: "JazzCash",
  },
  {
    icon: assets.cash,
    text: "Cash On Delivery",
  },
];

const Payment = ({ route }) => {
  const { address, phoneNumber, zipCode, email } = route.params;
  const navigation = useNavigation();
  const [active, setActive] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const { totalItems, totalAmount, items } = useContext(CartContext);
  return (
    <SafeAreaContainer bgColor={COLORS.white}>
      <Header text="Payment" />
      <Text style={styles.text}>Please choose your payment method</Text>
      <FlatList
        data={paymentOptions}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.paymentOption}
              activeOpacity={1}
              onPress={() => {
                setActive(item.text);
                setPaymentMethod(item.text);
              }}
            >
              <View style={styles.icon}>
                <Image
                  source={item.icon}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <Text style={styles.paymentText}>{item.text}</Text>
              <View style={styles.selectContainer}>
                <View
                  style={[
                    styles.active,
                    {
                      backgroundColor:
                        active === item.text ? COLORS.peach : COLORS.white,
                    },
                  ]}
                ></View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Checkout
        total={totalAmount + totalItems * 2}
        text="Confirm Order"
        onPressFunction={() =>
          paymentMethod
            ? navigation.navigate("ConfirmOrder", {
                address,
                zipCode,
                email,
                phoneNumber,
                paymentMethod,
              })
            : null
        }
      />
    </SafeAreaContainer>
  );
};

export default Payment;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.mul700,
    fontSize: 17,
    color: COLORS.black_text,
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 36,
  },
  paymentOption: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    marginHorizontal: 24,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray,
    paddingBottom: 8,
    marginBottom: 25,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 30,
  },
  paymentText: {
    fontFamily: FONTS.mul700,
    fontSize: 16,
    color: COLORS.black_text,
  },
  selectContainer: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: COLORS.peach,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 8,
  },
  active: {
    width: 22,
    height: 22,
    borderRadius: 25 / 2,
  },
});
