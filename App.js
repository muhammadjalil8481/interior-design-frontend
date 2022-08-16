// ********* IMPORTS *************** //
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import * as firebase from "firebase";
// import TabNavigation from "./Navigation/TabNavigation";
import Navigation from "./Navigation";
import CartContextProvider from "./Services/cartContext";
import {
  useFonts as useMontserrat,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import {
  useFonts as useMulish,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";

// ******** MAIN CODE ***************
export default function App() {
  const [montserratLoaded] = useMontserrat({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  const [mulishLoaded] = useMulish({
    Mulish_400Regular,
    Mulish_500Medium,
    Mulish_600SemiBold,
    Mulish_700Bold,
  });

  if (!montserratLoaded || !mulishLoaded) return null;

  return (
    <>
      <CartContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </CartContextProvider>
      <StatusBar style="dark" backgroundColor="white" />
    </>
  );
}

// ******** STYLES ***************

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
