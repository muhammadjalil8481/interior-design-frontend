import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import React from "react";
import {
  Header,
  SafeAreaContainer,
  ImagesSwiper,
  Divider,
  RatingComponent,
  Description,
  HeadingInfo,
  Review,
  ProductCard,
} from "../Components";
import AddToCart from "../Components/Shared/AddToCart";
import { COLORS, products, SIZES, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const ProductDetailsScreen = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaContainer bgColor={COLORS.white}>
      <Header />
      <ScrollView style={{ flex: 0.85 }}>
        <ImagesSwiper data={data.images} />
        <Divider stylesObj={{ marginHorizontal: 20 }} />
        <View style={styles.titleAndPrice}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.price}>${data.price}</Text>
        </View>
        <Text style={styles.brand}>By {data.brand}</Text>
        <View style={styles.rating}>
          <RatingComponent
            ratingValue={data.rating}
            ratingNumber={data.reviews.length}
            size={20}
            fontSize={16}
          />
        </View>
        <View style={styles.description}>
          <Description text={data.description} />
        </View>
        <Divider stylesObj={{ marginHorizontal: 20 }} />
        <View style={styles.reviewContainer}>
          <HeadingInfo heading="Customer Reviews" fontSize={18} />
          <View style={styles.reviews}>
            <FlatList
              data={data.reviews}
              keyExtractor={(item, index) => index}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Review
                  name={item.reviewUsername}
                  ratingValue={item.reviewRating}
                  title={item.reviewTitle}
                  date={item.reviewDate}
                  description={item.review}
                />
              )}
            />
          </View>
        </View>
        <View style={styles.relatedProducts}>
          <HeadingInfo heading="Related Products" fontSize={18} />
          <View style={styles.horizontalScroll}>
            <FlatList
              data={products.slice(0, 8)}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ProductCard
                  width={185}
                  image={item.featuredImage}
                  pname={item.name}
                  category={item.category[0]}
                  ratingValue={item.reviews[0].reviewRating}
                  ratingNumber={item.reviews.length}
                  price={item.price}
                  onPressFunction={() =>
                    navigation.navigate("ProductDetailsScreen", {
                      heading: "New Arrivals",
                      data: products,
                    })
                  }
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <View>
        <AddToCart
          onPressFunction={() => navigation.navigate("CartScreen", {})}
        />
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  titleAndPrice: {
    flexDirection: "row",
    marginHorizontal: SIZES.large + 2,
    marginTop: SIZES.extraLarge,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontFamily: FONTS.mul700,
    letterSpacing: 0.7,
    maxWidth: 230,
  },
  price: {
    fontSize: 22,
    fontFamily: FONTS.mul700,
    letterSpacing: 0.7,
  },
  brand: {
    fontSize: 13,
    fontFamily: FONTS.mul700,
    marginHorizontal: SIZES.extraLarge,
    color: COLORS.gray_text,
    marginTop: 4,
    marginBottom: 14,
  },
  rating: {
    marginHorizontal: SIZES.medium,
  },
  description: {
    marginHorizontal: SIZES.extraLarge,
    marginBottom: 24,
  },
  reviewContainer: {
    marginHorizontal: SIZES.moreLarge,
    marginVertical: SIZES.moreLarge,
  },
  reviews: {
    marginBottom: 20,
  },
  relatedProducts: {
    marginHorizontal: SIZES.moreLarge,
    marginBottom: 40,
  },
  horizontalScroll: {
    paddingBottom: SIZES.moreLarge,
    paddingTop: SIZES.mega,
  },
});

export default ProductDetailsScreen;
