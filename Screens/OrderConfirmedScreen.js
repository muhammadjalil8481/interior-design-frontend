import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaContainer, Checkout, InfoBox, Button } from "../Components";
import { COLORS, FONTS, assets } from "../constants";
import { CartContext } from "../Services/cartContext";
import { useNavigation } from "@react-navigation/native";

const OrderConfirmedScreen = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaContainer bgColor={COLORS.white}>
      <Text style={styles.text}>
        Congratulations, Your order has been successfully placed
      </Text>
      <InfoBox data={data} />
      <View style={styles.button}>
        <Button
          text="Go To Home"
          width={180}
          styleObj={{ paddingVertical: 6 }}
          fontSize={16}
          onPressFunction={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default OrderConfirmedScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.mul700,
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 30,
    marginTop: 40,
    letterSpacing: 0.6,
  },
  button: {
    alignSelf: "center",
    marginTop: 35,
  },
});
