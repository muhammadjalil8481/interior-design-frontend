import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { HeadingInfo } from "../index";
import { SIZES, categories } from "../../constants";
import CategoryCard from "../categoryCard";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.heading}>
        <HeadingInfo
          heading={"Categories"}
          onPressFunction={() => navigation.navigate("CategoriesNav")}
        />
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={categories.slice(0, 4)}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <CategoryCard
              width={165}
              category={item.title}
              image={item.image}
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
  },
  cardContainer: {
    marginTop: SIZES.mega,
    marginBottom: SIZES.promax,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Categories;
