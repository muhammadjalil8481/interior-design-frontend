import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { COLORS, FONTS } from "../constants";

const datas = [
  {
    label: "Products",
    data: [
      {
        name: "Red Ribbon Chair",
        quantity: 1,
      },
      {
        name: "Wooden Chair",
        quantity: 6,
      },
    ],
  },
  {
    label: "Address",
    data: "XYZ Colony Karachi",
  },
  {
    label: "Estimated Delivery",
    data: "28 sep 2022",
  },
];

const InfoBox = ({ data = datas }) => {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.label}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${index}/${item.label}`}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.label}>{item.label}</Text>
              {item.label === "Products" ? (
                <FlatList
                  data={item.data}
                  keyExtractor={(item, index) => index}
                  renderItem={({ item }) => (
                    <Text
                      style={styles.itemName}
                    >{`${item.quantity}x ${item.name}`}</Text>
                  )}
                />
              ) : (
                <Text style={styles.itemName}>{item.data}</Text>
              )}
            </View>
          )}
        />
      </Text>
    </View>
  );
};

export default InfoBox;

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: COLORS.peach,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 20,
    marginTop: 40,
    borderRadius: 10,
  },
  item: {
    marginBottom: 15,
  },
  label: {
    fontFamily: FONTS.mul600,
    fontSize: 14,
    color: COLORS.white,
    marginBottom: 4,
  },
  itemName: {
    fontFamily: FONTS.mul700,
    fontSize: 18,
    color: COLORS.white,
  },
});
