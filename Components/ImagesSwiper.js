import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { SIZES, COLORS } from "../constants";

const ImagesSwiper = ({ data }) => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swipper}
        activeDot={
          <View
            style={{
              backgroundColor: COLORS.peach,
              width: 12,
              height: 12,
              borderRadius: 6,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
      >
        {data.map((item) => {
          return (
            <View style={styles.imageContainer}>
              <Image
                source={item}
                resizeMode="contain"
                style={{ width: "100%", height: "100%", borderRadius: 8 }}
              />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 0.6,
  },
  swipper: {
    height: 360,
    justifyContent: "center",
    marginTop: 40,
  },
  imageContainer: {
    width: 350,
    height: 300,
    alignSelf: "center",
  },
});
export default ImagesSwiper;
