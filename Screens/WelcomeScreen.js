import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { assets, FONTS, COLORS } from "../constants";
import { Button } from "../Components";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={assets.WelcomeImage}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <View style={styles.content}>
        <View style={styles.logo}>
          <Image
            source={assets.Logo}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </Text>
        <Button
          text="Get Started"
          width={240}
          styleObj={{ paddingVertical: 6 }}
          fontSize={18}
          fontFamily={FONTS.mont600}
          onPressFunction={() => navigation.navigate("SignUpScreen")}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    position: "absolute",
    bottom: 80,
    left: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 100,
  },
  text: {
    fontFamily: FONTS.mont500,
    fontSize: 14,
    color: COLORS.white,
    textAlign: "center",
    maxWidth: 350,
    letterSpacing: 1.4,
    marginBottom: 56,
    marginTop: 8,
  },
});
