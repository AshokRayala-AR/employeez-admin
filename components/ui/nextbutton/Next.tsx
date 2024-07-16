import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function Next({ btnName, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.buttonstyle}>
      <View>
        <Text
          style={{ textAlign: "center", fontSize: 20, alignItems: "center", width: "100%" }}
        >
          {btnName}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonstyle: {
    borderRadius: 50,
    padding: 8,
    width: "100%",
    marginVertical: 8,
    backgroundColor: "#EA4080",
    textAlign: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
});