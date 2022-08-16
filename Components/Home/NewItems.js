import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HeadingInfo, ProductCard } from "../index";
import { SIZES, products, COLORS, assets } from "../../constants";

const NewItems = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.heading}>
        <HeadingInfo
          heading={"New Arrivals"}
          onPressFunction={() =>
            navigation.navigate("ProductsScreen", {
              heading: "New Arrivals",
              data: products,
            })
          }
        />
      </View>
      <View style={styles.horizontalScroll}>
        <FlatList
          data={products.slice(0, 8)}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          // ItemSeparatorComponent={() => (
          //   <View style={{ width: 8, backgroundColor: COLORS.white }} />
          // )}
          renderItem={({ item }) => (
            <ProductCard
              width={185}
              image={item.featuredImage}
              // image={assets.transfer}
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
    marginTop: SIZES.megamax,
  },
  horizontalScroll: {
    paddingLeft: SIZES.moreLarge,
    paddingBottom: SIZES.moreLarge,
    paddingTop: SIZES.mega,
  },
});
export default NewItems;
