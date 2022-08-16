import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Header, SafeAreaContainer, Checkout } from "../Components";
import { COLORS, FONTS, assets } from "../constants";
import { Button } from "../Components";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer bgColor={COLORS.white}>
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.textLine}>Please fill in the following details</Text>
      <View style={styles.form}>
        <View style={styles.formField}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize={false}
            // onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.formField}>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            autoCapitalize={false}
            secureTextEntry={true}
            // onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Button
          text="Sign Up"
          width={170}
          fontSize={16}
          fontFamily={FONTS.mont600}
          styleObj={{ paddingVertical: 4 }}
        />
      </View>
      <Text style={styles.textLogin}>
        New User?{" "}
        <Text
          style={styles.login}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          Sign Up
        </Text>
      </Text>
      <Text style={styles.textFaded}>or continue with</Text>
      <View style={styles.social}>
        <TouchableOpacity style={styles.socialIcon}>
          <Image
            source={assets.google}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image
            source={assets.facebook}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  heading: {
    fontFamily: FONTS.mont600,
    fontSize: 32,
    color: COLORS.black_heading,
    paddingHorizontal: 25,
    marginTop: 100,
  },
  textLine: {
    fontFamily: FONTS.mul600,
    fontSize: 16,
    color: COLORS.black_text,
    paddingHorizontal: 25,
    marginTop: 12,
  },
  form: {
    marginHorizontal: 25,
    marginTop: 40,
  },
  formField: {
    marginBottom: 28,
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray,
    paddingHorizontal: 4,
    paddingBottom: 6,
    fontFamily: FONTS.mul700,
    fontSize: 17,
    letterSpacing: 1.5,
  },
  button: {
    alignSelf: "center",
    marginTop: 40,
  },
  textFaded: {
    fontFamily: FONTS.mul600,
    fontSize: 16,
    color: COLORS.gray_text,
    alignSelf: "center",
    marginTop: 30,
  },
  social: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 35,
    marginLeft: 10,
  },
  socialIcon: {
    width: 45,
    height: 45,
    marginRight: 30,
  },
  textLogin: {
    fontFamily: FONTS.mul700,
    alignSelf: "center",
    marginTop: 10,
    color: COLORS.black_text_2,
    fontSize: 14,
  },
  login: {
    color: COLORS.peach,
    fontSize: 16,
  },
});
