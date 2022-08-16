import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import LoginScreen from "../Screens/LoginScreen";

const AccountNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
      ></Stack.Screen>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}></Stack.Screen>
      <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountNavigation;
