import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { HeadingInfo, SmallButton } from "../index";
import { SIZES, assets, COLORS, beforeAfter } from "../../constants";
import Swiper from "react-native-swiper";

const BeforeAfter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <HeadingInfo heading={"Before And After"} />
      </View>
      <Swiper
        style={styles.slideWrapper}
        activeDot={
          <View
            style={{
              backgroundColor: COLORS.peach,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
      >
        <View style={styles.slide}>
          <SmallButton
            text="Before"
            width={90}
            styleObj={{ position: "absolute", right: 18, top: 32 }}
          />
          <Image
            source={beforeAfter[0].before}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={[styles.slide, { width: "100%" }]}>
          <SmallButton
            text="After"
            width={90}
            styleObj={{ position: "absolute", right: 18, top: 32 }}
          />
          <Image
            source={beforeAfter[0].after}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.megamax,
  },
  heading: {
    marginHorizontal: SIZES.moreLarge,
    marginTop: SIZES.mega,
  },
  slideWrapper: {
    marginTop: SIZES.large,
    height: 350,
  },
  slide: {
    height: 300,
    flex: 1,
  },
});
export default BeforeAfter;
