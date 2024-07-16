import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, Alert, ScrollView } from "react-native";
import StyledTextInput from "../ui/textinput/StyledTextInput";
import NextButton from "../ui/nextbutton/StyledNextButton";
import Header from "../header/Header";
import EnterDetailTextBold from "../ui/entereddetailtext/EnteredDetailTextBold";
import EnterDetailTextSub from "../ui/entereddetailtext/EnteredDetailsTextSub";
import SocialSignUpText from "../sociallogin/SocialSignUpText";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

interface RootState {
  SignUp: {
    email: string;
  };
}

export default function EmailPage() {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const emailPwdHandler = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.status === 201) {
        navigation.navigate("PersonalDetails");
      } else {
        Alert.alert("Error", "Failed to sign up. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to sign up. Please try again later.");
    }
  };

  const emailId = useSelector((store: RootState) => {
    return store.SignUp.details.email;
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const eml = watch("email");
  const pwd = watch("password");

  return (
    <ScrollView>
    <View style={styles.container}>
      <Header />
      <View style={styles.input}>
        <EnterDetailTextBold title="Company Name" />
        <View style={styles.inputdiv}>
          <StyledTextInput
            control={control}
            editable={false}
            name="companyname"
            mobile=""
            placeholder="Name"
            secureTextEntry={false}
            keyboardType="default"
            email=""
            rules={{
                required: "Company Name is required",
              }}
          />
        </View>
      </View>
      <View style={[styles.input]}>
        <View style={[styles.inputdiv]}>
          <EnterDetailTextBold title="Email" />
          <StyledTextInput
            control={control}
            editable={""}
            name="email"
            mobile=""
            email=""
            placeholder="Email"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter a valid email address",
              },
            }}
          />
        </View>
        <View style={[styles.inputdiv]}>
          <EnterDetailTextBold title="Re-Enter Email" />

          <StyledTextInput
            control={control}
            editable={""}
            name="ReEmail"
            mobile=""
            email=""
            placeholder="Re-Enter Email"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "Email is required",
              validate: (value) => {
                return value === eml || "email Do Not Match";
              },
            }}
          />
        </View>

        <View style={[styles.inputdiv]}>
          <EnterDetailTextBold title="Password" />
          <StyledTextInput
            control={control}
            editable={""}
            name="password"
            mobile=""
            email=""
            placeholder="Password"
            secureTextEntry={true}
            keyboardType="default"
            rules={{
              required: "Password is required",
            }}
          />
        </View>
        <View style={[styles.inputdiv]}>
          <EnterDetailTextBold title="Re-Enter Password" />

          <StyledTextInput
            control={control}
            editable={""}
            name="RePassword"
            mobile=""
            email=""
            placeholder="Re-Enter Password"
            secureTextEntry={true}
            keyboardType="default"
            rules={{
              required: "Password is required",
              validate: (value) => {
                return value === eml || "Password Do Not Match";
              },
            }}
          />
        </View>

          <EnterDetailTextBold title="Mobile Number" />
          <View style={styles.inputdiv}>
            <StyledTextInput
              control={control}
              editable={false}
              name="MobileNumber"
              mobile=""
              placeholder="Mobile Number"
              secureTextEntry={false}
              keyboardType="number-pad"
              email=""
              rules={{
                required: "Mobile Number is required",
                pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Mobile number must be exactly 10 digits",
                  },
              }}
            />
          </View>

        <View style={styles.checkboxContainer}>
          <Pressable
            style={[styles.checkbox, isChecked && styles.checked]}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.checkboxLabel}>
            I agree to the terms and conditions
          </Text>
        </View>
      </View>

      <View style={[{ width: "90%" }, styles.buttondiv]}>
        <NextButton
          btnName={"SignUp"}
          disabled={!isChecked}
          onPress={handleSubmit(emailPwdHandler)}
          style={{ opacity: isChecked ? 1 : 0.6 }}
        />
        <View style={styles.signupTextContainer}>
          <SocialSignUpText
            firstline="Already have an account?"
            secondline="login"
          />
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
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
    flex: 2,
    alignItems: "flex-start",
    marginTop: 24,
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    marginRight: 8,
  },
  checked: {
    backgroundColor: "#EA4080",
    borderColor: "#EA4080",
  },
  checkboxLabel: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

