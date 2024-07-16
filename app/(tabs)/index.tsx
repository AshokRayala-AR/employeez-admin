import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "../../components/login/LoginPage";
import LoginOtpPage from "../../components/login/LoginOtpPage";
import SignUpPage from "../../components/signup/SignUpPage";
import PresonalDetails from "../../components/personaldetails/PersonalDetails";
import store from "../../store/Store";
import PersonalDetails from "../../components/personaldetails/PersonalDetails";
import JobGridTile from "../../components/jobgrid/JobGridTile";
import SocialLoginWrapper from "@/components/sociallogin/SocialLoginWrapper";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen
          name="SocialLoginWrapper"
          component={SocialLoginWrapper}
        />
        <Stack.Screen name="JobGridTile" component={JobGridTile} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="LoginOtpPage" component={LoginOtpPage} />
      </Stack.Navigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
