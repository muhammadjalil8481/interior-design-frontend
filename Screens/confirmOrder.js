import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Header, SafeAreaContainer, Checkout, InfoBox } from "../Components";
import { COLORS, FONTS, assets } from "../constants";
import { CartContext } from "../Services/cartContext";
import { useNavigation } from "@react-navigation/native";

const ConfirmOrder = ({ route }) => {
  const { address, email, phoneNumber, zipCode } = route.params;
  const navigation = useNavigation();
  const { totalItems, totalAmount, items } = useContext(CartContext);
  let today = new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000);
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  const data = [
    {
      label: "Products",
      data: items,
    },
    {
      label: "Address",
      data: address,
    },
    {
      label: "Estimated Delivery",
      data: today,
    },
  ];
  return (
    <SafeAreaContainer bgColor={COLORS.white}>
      <Header text="Confirm Order" />
      <View style={styles.infoBox}>
        <InfoBox data={data} />
      </View>
      <Checkout
        total={totalAmount + totalItems * 2}
        text="Confirm Order"
        onPressFunction={() =>
          navigation.navigate("OrderConfirmed", {
            data: [
              ...data,
              { label: "price", data: totalAmount + totalItems * 2 },
            ],
            address,
            zipCode,
            email,
            phoneNumber,
            price: totalAmount + totalItems * 2,
          })
        }
      />
    </SafeAreaContainer>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({
  infoBox: {
    marginBottom: 60,
  },
});
