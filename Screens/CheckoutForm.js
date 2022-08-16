import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Header, SafeAreaContainer, Checkout } from "../Components";
import { COLORS, FONTS } from "../constants";
import { CartContext } from "../Services/cartContext";
import { useNavigation } from "@react-navigation/native";

const CheckoutForm = () => {
  const navigation = useNavigation();
  const { totalItems, totalAmount } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SafeAreaContainer bgColor={COLORS.white}>
      <Header text="Shipping Details" />
      <Text style={styles.text}>Please fill in the following details</Text>
      <View style={styles.formContainer}>
        <View style={styles.formField}>
          <TextInput
            placeholder="Address"
            style={styles.textInput}
            autoCapitalize={false}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View style={styles.formField}>
          <TextInput
            placeholder="Zip Code"
            style={styles.textInput}
            autoCapitalize={false}
            onChangeText={(text) => setZipCode(text)}
          />
        </View>
        <View style={styles.formField}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize={false}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.formField}>
          <TextInput
            placeholder="Phone Number"
            style={styles.textInput}
            autoCapitalize={false}
            secureTextEntry={false}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
      </View>
      <Checkout
        total={totalAmount + totalItems * 2}
        text="Proceed To Pay"
        onPressFunction={() =>
          // address &&
          // zipCode &&
          // email &&
          // phoneNumber &&
          navigation.navigate("Payment", {
            address,
            zipCode,
            email,
            phoneNumber,
          })
        }
      />
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.mul700,
    fontSize: 17,
    color: COLORS.black_text,
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 36,
  },
  formContainer: {
    marginHorizontal: 20,
    marginBottom: 80,
  },
  formField: {
    marginBottom: 28,
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray,
    paddingHorizontal: 4,
    paddingBottom: 6,
    fontFamily: FONTS.mul700,
    fontSize: 17,
    letterSpacing: 1.5,
  },
});
export default CheckoutForm;
