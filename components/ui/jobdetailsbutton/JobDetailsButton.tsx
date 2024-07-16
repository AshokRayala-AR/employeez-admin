import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

function JobDetailsButton({ btnNameA, btnNameB, onPressA, onPressB, activeButton }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.btnPressable,
          activeButton === "JobDetails" && styles.activeButton,
        ]}
        onPress={onPressA}
      >
        <Text style={[styles.btntext, activeButton === "JobDetails" && styles.activeButtonText]}>{btnNameA}</Text>
      </Pressable>

      <Pressable
        style={[
          styles.btnPressable,
          activeButton === "AboutCompany" && styles.activeButton,
        ]}
        onPress={onPressB}
      >
        <Text style={[styles.btntext, activeButton === "AboutCompany" && styles.activeButtonText]}>{btnNameB}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    justifyContent: "center",
    gap: 8,
    padding: 10,
    borderRadius: 8,
  },
  btnPressable: {
    flex: 1,
    padding: 4,
    paddingVertical: 10,
    borderRadius: 8,
  },
  btntext: {
    textAlign: "center",
    fontSize: 18,
  },
  activeButton: {
    backgroundColor: "#EA4080",
  },
  activeButtonText: {
    color: "#FFF",
  },
});

export default JobDetailsButton;