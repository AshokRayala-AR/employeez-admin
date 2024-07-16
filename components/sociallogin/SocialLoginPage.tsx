import React from "react";
import { Pressable, Linking } from "react-native";
import styled from "styled-components/native";

const SocialLoginButtons = () => {
  const handleGoogleLogin = () => {
    Linking.openURL("https://accounts.google.com");
  };

  const handleAppleLogin = () => {};

  return (
    <StyledSocialLoginButton>
      <Pressable onPress={handleGoogleLogin}>
        <StyledButtonText>continue with Google </StyledButtonText>
      </Pressable>
      <Pressable onPress={handleAppleLogin}>
        <StyledButtonText>continue with Apple</StyledButtonText>
      </Pressable>
    </StyledSocialLoginButton>
  );
};

const StyledSocialLoginButton = styled.View`
  align-items: center;
  justify-content: center;
`;

const StyledButtonText = styled.Text`
  color: #1e1e1e;
  font-size: 14px;
  font-weight: 600;
  background-color: white;
  width: 250px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  text-align: center;
  border-radius: 50px;
`;

export default SocialLoginButtons;
