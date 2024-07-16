import React from "react";
import { View, StyleSheet } from "react-native";
import StyledTextInput from "../ui/textinput/StyledTextInput";
import Header from "../header/Header";
import EnterDetailText from "../ui/entereddetailtext/EnteredDetailTextBold";
import SocialSignUpText from "../sociallogin/SocialSignUpText";
import Next from "../ui/nextbutton/Next";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import axios from "axios";

interface RootState {
  SignUp: {
    phoneNumber: string;
  };
}
export default function MobileSignUp() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function otpPress() {
    console.log("ahsok");
  }
  const signUpPress = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.status === 201) {
        // navigation.navigate("EmailPage");
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
        <EnterDetailText
          title="Enter Your Phone Number"
        />
        <View style={styles.inputdiv}>
          <StyledTextInput
            control={control}
            name="number"
            email=""
            editable={false}
            mobile=""
            secureTextEntry={false}
            keyboardType="number-pad"
            placeholder="Phone Number"
            rules={{
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "Phone Number should contain only numbers",
              },
              minLength: {
                value: 10,
                message: "Phone Number should be 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Phone Number should be 10 digits",
              },
            }}
          />
        </View>
      </View>
      <View style={[styles.input, { marginTop: 24 }]}>
        <EnterDetailText
          title="Enter otp number"
        />
        <View style={[styles.inputdiv, styles.inputmarg]}>
          <StyledTextInput
            control={control}
            editable={""}
            name="otp"
            mobile=""
            email=""
            placeholder="Enter OTP"
            secureTextEntry={false}
            keyboardType="number-pad"
            rules={{
              required: "OTP is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "OTP should contain only numbers",
              },
              minLength: {
                value: 6,
                message: "OTP should be 6 digits",
              },
              maxLength: {
                value: 6,
                message: "OTP should be 6 digits",
              },
            }}
          />
          <View style={{ width: "35%" }}>
            <Next btnName="Verify" onPress={otpPress} />
          </View>
        </View>
      </View>

      <View style={[{ width: "90%" }, styles.buttondiv]}>
        <Next btnName="LOGIN" onPress={handleSubmit(signUpPress)} />

        <View style={[styles.signupTextContainer]}>
          <SocialSignUpText
            firstline="New to App?"
            secondline="Sign Up"
            targetPage="SignUpPage"
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
  inputmarg: {
    marginBottom: 54,
  },
  buttondiv: {
    alignItems: "flex-start",
    marginTop: 24,
    gap: 32
  },
  inputdiv: {
    width: "100%",
  },
  signupTextContainer: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    justifyContent: "center",
    marginTop: 8,
  },
  signupButton: {
    marginLeft: 5,
  },
});