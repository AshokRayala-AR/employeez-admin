import React from "react";
import { Controller } from "react-hook-form";
import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function IconInput({
  control,
  name,
  keyboardType,
  placeholder,
  icon,
  iicon,
  uploadicon,
  rules = {},
  email,
  mobile,
  onPress,
  text,
}) {
  const infoHandler = () => {};
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.inputContainer,
              { borderColor: error ? "red" : "#000" },
              { borderWidth: error ? 3 : 1 },
              { height : text ? 130 : 'auto'}
            ]}
          >
            <Icon name={icon} size={24} style={styles.icon} />
            <TextInput
              style={[styles.textInput]}
              value={mobile && !email ? mobile : email ? email : value}
              keyboardType={keyboardType}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
            />
            {iicon && (
              <Icon
                name="information-circle-outline"
                size={24}
                style={styles.icon}
              />
            )}
            {uploadicon && (
              <Pressable onPress={onPress}>
                <Icon
                  name="cloud-upload-outline"
                  size={24}
                  style={styles.icon}
                />
              </Pressable>
            )}
          </View>
          <View>
            {error && (
              <Text style={{ color: "red", alignSelf: "stretch" }}>
                {error.message || "error"}
              </Text>
            )}
          </View>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
    marginVertical: 8,
  },
  icon: {
    marginRight: 12,
  },
  textInput: {
    width: "70%",
    fontSize: 16,
    color: "#000",
  },
});

// export default function StyledTextInput({
//   control,
//   name,
//   placeholder,
//   secureTextEntry,
//   keyboardType,
//   rules = {},
//   mobile,
//   editable,
//   email
// }) {
//   return (
//     <Controller
//       control={control}
//       name={name}
//       rules={rules}
//       render={({
//         field: { value, onChange, onBlur },
//         fieldState: { error },
//       }) => (
//         <View>
//           <TextInput
//             style={[
//               styles.textstyle,
//               { borderColor: error ? "red" : "#000" },
//               { borderWidth: error ? 3 : 1 },
//             ]}
//             value={(mobile && !email) ? mobile : (email ? email : value)}
//             editable={editable?false : true}
//             keyboardType={keyboardType}
//             onChangeText={onChange}
//             onBlur={onBlur}
//             placeholder={placeholder}
//             secureTextEntry={secureTextEntry}
//           />
//           {error && (
//             <Text style={{ color: "red", alignSelf: "stretch" }}>
//               {error.message || "error"}
//             </Text>
//           )}
//         </View>
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   textstyle: {
//     borderRadius: 50,
//     padding: 10,
//     paddingHorizontal: 24,
//     backgroundColor: "#fff",
//     borderColor: "#000",
//     borderWidth: 1,
//     width: "100%",
//     marginVertical: 8,
//   },
// });
