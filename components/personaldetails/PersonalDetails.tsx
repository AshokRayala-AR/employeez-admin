import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import IconInput from "./IconInput";
import { PersonalDetailsData } from "./PersonalDetailsData";
import Header from "../header/Header";
import Next from "../ui/nextbutton/Next";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import EnterDetailTextBold from "../ui/entereddetailtext/EnteredDetailTextBold";
import { Alert } from "react-native";
// import DocumentPicker from "react-native-document-picker"
interface RootState {
  SignUp: {
    email: string;
    phoneNumber: string;
  };
}

export default function PersonalDetails() {
  function documentHandler() {
    // async () =>{
    //   try{
    //     const doc = await DocumentPicker.pickSingle({
    //       type: [DocumentPicker.types.pdf]
    //     })
    //     console.log(doc)
    //   } catch(err) {
    //     if(DocumentPicker.isCancel(err)) {
    //       console.log("user cancelled the upload", err);
    //     }
    //     else {
    //       console.log(err)
    //     }
    //   }
  }
  const navigation = useNavigation();
  const detailHandler = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.status === 201) {
        navigation.navigate("EducationalDetails");
      } else {
        Alert.alert("Error", "Failed to sign up. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to sign up. Please try again later.");
    }
  };
  const signUpNumber = useSelector(
    (store: RootState) => store.SignUp.details.phoneNumber
  );
  const emailId = useSelector((store: RootState) => {
    return store.SignUp.details.email;
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Add your personal details</Text>
        <FlatList
          data={PersonalDetailsData}
          style={{ width: "80%" }}
          renderItem={({ item }) => (
            <View>
              <EnterDetailTextBold title={item.title} />
              <IconInput
                control={control}
                name={item.name}
                email=""
                mobile=""
                keyboardType={item.keyboardType}
                placeholder={item.placeholder}
                icon={item.icon}
                iicon={item.iicon}
                text={item.text}
                uploadicon={item.uploadicon}
                rules={{
                  required: "please fill this feild",
                }}
                onPress={documentHandler}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Next btnName="Submit" onPress={handleSubmit(detailHandler)} />
      </View>
    </View>
  );
}

{
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "80%",
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 16,
  },
});