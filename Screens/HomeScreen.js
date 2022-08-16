import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, LogBox } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TopBar from "../Components/Home/topBar";
import NewItems from "../Components/Home/NewItems";
import Categories from "../Components/Home/Categories";
import BeforeAfter from "../Components/Home/BeforeAfter";
import RecommendedProducts from "../Components/Home/RecommendedProducts";
import { FONTS, COLORS, assets, users, SIZES, products } from "../constants";
import { SafeAreaContainer } from "../Components";

const HomeScreen = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <SafeAreaContainer bgColor={COLORS.white}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar />
        <NewItems />
        <Categories />
        <BeforeAfter />
        <RecommendedProducts />
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
