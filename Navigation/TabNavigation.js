import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import HomeNavigation from "./HomeNavigation";
import CategoriesNavigation from "./CategoriesNavigation";
import FavouritesScreen from "../Screens/FavouritesScreen";
import SearchScreen from "../Screens/SearchScreen";
import CategoriesScreen from "../Screens/CategoriesScreen";
import CartNavigation from "./CartNavigation";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import CircleButton from "../Components/CircleButton";
import BottomBorder from "../Components/bottomBorder";
import { COLORS, SHADOWS } from "../constants";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 60,
          borderTopColor: COLORS.gray_3,
          borderTopWidth: 1,
          shadowOffset: 1,
          shadowColor: "black",
        },
        tabBarInactiveTintColor: "#A5A7A8",
        tabBarActiveTintColor: "#18120C",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View>
                {focused ? (
                  <BottomBorder>
                    <AntDesign name="home" size={size} color={color} />
                  </BottomBorder>
                ) : (
                  <AntDesign name="home" size={size} color={color} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View>
                {focused ? (
                  <BottomBorder>
                    <MaterialIcons
                      name="favorite-border"
                      size={size}
                      color={color}
                    />
                  </BottomBorder>
                ) : (
                  <MaterialIcons
                    name="favorite-border"
                    size={size}
                    color={color}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <CircleButton top={-30}>
                <Feather name="search" size={36} color="#ffffff" />
              </CircleButton>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View>
                {focused ? (
                  <BottomBorder>
                    <Feather name="server" size={size} color={color} />
                  </BottomBorder>
                ) : (
                  <Feather name="server" size={size} color={color} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View>
                {focused ? (
                  <BottomBorder>
                    <AntDesign name="shoppingcart" size={size} color={color} />
                  </BottomBorder>
                ) : (
                  <AntDesign name="shoppingcart" size={size} color={color} />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
