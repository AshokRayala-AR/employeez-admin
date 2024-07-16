import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function StyledNextButton({ btnName, disabled, onPress }) {
  return (
      <Pressable disabled={disabled} onPress={onPress} style={[styles.buttonstyle, disabled && styles.disabledButton]} >
    <View  >
        <Text style={{ textAlign: "center", opacity: disabled ? 0.5 : 1 }}>{btnName}</Text>
    </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonstyle: {
    borderRadius: 50,
    padding: 12,
    width: "100%",
    marginVertical: 8,
    backgroundColor: "#EA4080",
    textAlign: "center",
    height:45
  },
  disabledButton: {
    opacity: 0.5,
  },
});