import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <View >
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ height: 80, width: 80 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.rightlogo}>
          <Image
            source={require("../../assets/images/name.png")}
            style={{ width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 129,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    gap: 14,
    alignItems: "center",
  },

  rightlogo: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
  },
});