import React from "react";
import { View, Text, Pressable, StyleSheet, SafeAreaView } from "react-native";
import SocialLoginPage from "./SocialLoginPage";
import SocialSignUpText from "./SocialSignUpText";

export default function SocialLoginWrapper() {
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.container}>
        <View>
          <SocialLoginPage />
        </View>
        <View>
          <SocialSignUpText firstline="New to App?" secondline='SignUp' targetPage='SignUpPage'/>
        </View>
        <View>
          <SocialSignUpText firstline="Already have an account?" secondline='LogIn' targetPage='LoginPage'/>
        </View>
        <View>
          <Text style={styles.instruction}>
            By clicking Sign Up, Continue with Apple, Continue with Google, or
            continue with Facebook, you agree to Voice Chat Terms of Services,
            Privacy Policy, and Cookie Policy.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },

  container: {
    width: "100%",
    backgroundColor: "#2D2B2B",
    padding: 20,
    alignItems: "center",
    gap: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  instruction: {
    color: "white",
    fontSize: 10,
    lineHeight: 15,
    paddingHorizontal: 25,
    textAlign: "center",
  },
});