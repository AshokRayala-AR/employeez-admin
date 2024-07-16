import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function EnterDetailTextSub({ subtitle }) {
  return (
    <View>
      <Text style={styles.textstylesb}>{subtitle}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textstylesb: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
});