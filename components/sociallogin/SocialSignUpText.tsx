import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SocialSignUpText({ firstline, secondline,targetPage }) {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate(targetPage); 
  };

  return (
    <View style={styles.signupTextContainer}>
      <View>
        <Text style={{ color: "white", fontSize: 14 }}>{firstline}</Text>
      </View>
      <View>
        <Pressable style={styles.signupButton} onPress={handleSignUpPress}>
          <Text
            style={{
              color: "#6D16F9",
              fontSize: 14,
              textDecorationLine: "underline",
            }}
          >
            {secondline}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signupTextContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  signupButton: {
    marginLeft: 5,
  },
});