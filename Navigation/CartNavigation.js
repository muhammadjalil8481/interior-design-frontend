import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../Screens/CartScreen";
import CheckoutForm from "../Screens/CheckoutForm";
import Payment from "../Screens/Payment";
import ConfirmOrder from "../Screens/confirmOrder";
import OrderConfirmedScreen from "../Screens/OrderConfirmedScreen";
import HomeNavigation from "./HomeNavigation";
import HomeScreen from "../Screens/HomeScreen";
import ProductDetailsScreen from "../Screens/ProductDetailsScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const CartNavigation = ({ navigation, route }) => {
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
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="CheckoutForm" component={CheckoutForm} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      <Stack.Screen name="OrderConfirmed" component={OrderConfirmedScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default CartNavigation;
