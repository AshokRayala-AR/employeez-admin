import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function EnterDetailTextBold({ title }) {
  return (
    <View>
      <Text style={styles.textstylesa}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textstylesa: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
    
  },
});