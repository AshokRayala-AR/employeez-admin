import React from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import StyledTextInput from "../ui/textinput/StyledTextInput";
import Header from "../header/Header";
import EnterDetailText from "../ui/entereddetailtext/EnteredDetailTextBold";
import SocialSignUpText from "../sociallogin/SocialSignUpText";
import Next from "../ui/nextbutton/Next";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateEmail, updatePhoneNumber } from "../../store/slices/SignUpSlice";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import EnterDetailTextBold from "../ui/entereddetailtext/EnteredDetailTextBold";

export default function MobileSignUp() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpPress = async (data) => {
    try {
      dispatch(updatePhoneNumber(data.number));
      dispatch(updateEmail(data.email));

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.status === 201) {
        navigation.navigate("MobileOtpPage");
      } else {
        Alert.alert("Error", "Failed to sign up. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to sign up. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.input}>
        <EnterDetailText title="User Name" />
        <View style={styles.inputdiv}>
          <StyledTextInput
            control={control}
            name="number"
            email=""
            mobile=""
            editable={""}
            placeholder="Email or Mobile Number"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "Phone Number is required",
              pattern: {
                message: "Phone Number should contain only numbers",
              },
            }}
          />
        </View>
      </View>
      <View style={[styles.input, { marginTop: 24 }]}>
        <EnterDetailTextBold title="Enter Password" />
        <View style={[styles.inputdiv]}>
          <StyledTextInput
            control={control}
            name="password"
            email=""
            mobile=""
            editable={""}
            placeholder="Password"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "Password is required",
              pattern: {
                message: "Invalid Password",
              },
            }}
          />
        </View>
        <View style={styles.otpTextContainer}>
          <SocialSignUpText
            firstline="or login with"
            secondline="OTP"
            targetPage="LoginOtpPage"
          />
        </View>
      </View>

      <View style={[{ width: "90%" }, styles.buttondiv]}>
        <Next btnName="LOGIN" onPress={handleSubmit(signUpPress)} />

        <View style={[styles.signupTextContainer]}>
          <SocialSignUpText
            firstline="New to App?"
            secondline="Sign Up"
            targetPage="MobileSignUp"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  input: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",
    gap: 12,
  },
  buttondiv: {
    alignItems: "center",
    marginTop: 24,
    gap: 36
  },
  inputdiv: {
    width: "100%",
  },
  otpTextContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
  },
  signupTextContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  signupButton: {
    marginLeft: 5,
  },
  signup: {
    alignItems: "center"
  }
});