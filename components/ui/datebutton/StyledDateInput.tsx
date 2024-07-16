import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Controller } from "react-hook-form";

export default function IconInput({
  control,
  name,
  rules = {},
  placeholder,
  keyboardType,
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
        <View style={{ width: "50%" }}>
          <View
            style={[
              styles.inputContainer,
              { borderColor: error ? "red" : "#000" },
              { borderWidth: error ? 3 : 1 },
            ]}
          >
            <TextInput
              style={styles.textInput}
              placeholder={placeholder}
              keyboardType={keyboardType}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            <Icon name="calendar-outline" size={24} />
          </View>
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
  inputContainer: {
    flexDirection: "row",
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  textInput: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 10,
  },
});