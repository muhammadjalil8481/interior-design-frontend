import { View, Text, StyleSheet, FlatList } from "react-native";
import { HeadingInfo, ProductCard } from "../index";
import { SIZES, COLORS } from "../../constants";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Products = ({
  text = "Products",
  numOfProducts,
  data,
  filter = false,
  onPressFunction,
  styleObj = {},
}) => {
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
      <View style={styles.heading}>
        <HeadingInfo
          heading={text}
          filter={filter}
          onPressFunction={onPressFunction}
        />
      </View>
      <View style={[styles.cardsContainer, styleObj]}>
        <FlatList
          data={numOfProducts ? data.slice(0, numOfProducts) : data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProductCard
              width={168}
              image={item.featuredImage}
              pname={item.name}
              category={item.category[0]}
              ratingValue={item.reviews[0].reviewRating}
              ratingNumber={item.reviews.length}
              price={item.price}
              onPressFunction={() =>
                navigation.navigate("ProductDetailsScreen", {
                  data: item,
                })
              }
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: SIZES.moreLarge,
    marginTop: SIZES.mega,
    marginBottom: SIZES.mega,
  },
  cardsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  // container: {
  //   // marginBottom: 80,
  // },
});

export default Products;
