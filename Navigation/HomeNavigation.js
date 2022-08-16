import React, { useLayoutEffect, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ProductsScreen from "../Screens/ProductsScreen";
import ProductDetailsScreen from "../Screens/ProductDetailsScreen";
import CartNavigation from "./CartNavigation";
import CategoriesNavigation from "./CategoriesNavigation";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const HomeNavigation = ({ navigation, route }) => {
  useEffect(() => {
    const routes = ["ProductDetailsScreen"];
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="CategoriesNav"
        component={CategoriesNavigation}
      ></Stack.Screen>
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      ></Stack.Screen>
      <Stack.Screen name="CartScreen" component={CartNavigation}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigation;
