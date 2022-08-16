import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { products } from "../../constants";
import Products from "../Shared/Products";
import { useNavigation } from "@react-navigation/native";

const RecommendedProducts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Products
        text={"Recommended For You"}
        numOfProducts={6}
        data={products}
        onPressFunction={() =>
          navigation.navigate("ProductsScreen", {
            heading: "Recommended For You",
            data: products,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
});
export default RecommendedProducts;
