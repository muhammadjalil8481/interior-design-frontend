import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import CategoryCard from "../Components/categoryCard";
import { HeadingInfo } from "../Components";
import { categories, COLORS, SIZES } from "../constants";
import { SafeAreaContainer } from "../Components";

const CategoriesScreen = () => {
  return (
    <SafeAreaContainer bgColor={COLORS.white}>
      <View style={styles.container}>
        <HeadingInfo heading={"Categories"} />
        <FlatList
          style={styles.cards}
          data={categories}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryCard image={item.image} category={item.title} />
          )}
        />
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.max,
    marginHorizontal: SIZES.extraLarge,
  },
  cards: {
    marginTop: SIZES.mega,
  },
});
export default CategoriesScreen;
