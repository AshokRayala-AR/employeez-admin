import { TextInput, View, StyleSheet, Text } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

export default function StyledTextInput({
  control,
  name,
  placeholder,
  secureTextEntry,
  keyboardType,
  rules = {},
  mobile,
  editable,
  email
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          <TextInput
            style={[
              styles.textstyle,
              { borderColor: error ? "red" : "#000" },
              { borderWidth: error ? 3 : 1 },
            ]}
            value={(mobile && !email) ? mobile : (email ? email : value)}
            editable={editable?false : true}
            keyboardType={keyboardType}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
          />
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "error"}
            </Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  textstyle: {
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
    marginVertical: 8,
  },
});