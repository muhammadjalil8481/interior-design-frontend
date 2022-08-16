import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../Screens/CategoriesScreen";

const CategoriesNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CategoriesNavigation;
