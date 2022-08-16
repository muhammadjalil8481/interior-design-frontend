import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Products from "../Components/Shared/Products";
import { products, SIZES, COLORS } from "../constants";
import { Button } from "../Components";

const ProductsScreen = ({ route }) => {
  const { heading, data } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Products
          text={heading}
          data={data}
          filter={true}
          onPressFunction={() => null}
          styleObj={{ marginTop: 12, marginBottom: 50 }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginTop: SIZES.max,
  },
});
export default ProductsScreen;
