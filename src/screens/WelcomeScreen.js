import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import WSBackground from '../assets/welcomescreen.png';
import Dimensions from 'react-native';
import styled from 'styled-components';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={WSBackground}
      style={{ width: '100%', height: '100%' }}>
      <Text1>BEM-VINDO</Text1>
      <Text2>é bom ter você conosco</Text2>
      <LoginButton>
        <Text3>Entrar</Text3>
      </LoginButton>
      <Text4>Ainda não tem uma conta?</Text4>
      <RegisterButton>
        <Text5>Registre-se</Text5>
      </RegisterButton>
    </ImageBackground>
  );
};

const Text1 = styled.Text`
  font-family: Kanit-Regular;
  color: #000000;
  font-size: 40;
  margin-top: 40;
  margin-left: 15;
`;

const Text2 = styled.Text`
  font-size: 18.5;
  margin-top: -12.5;
  color: #000000;
  margin-left: 18;
  font-family: Kanit-Regular;
`;

const Text3 = styled.Text`
  font-family: Kanit-Regular;
  font-size: 18;
  color: #ffffff;
`;

const Text4 = styled.Text`
  font-family: Kanit-Regular;
  color: #ffffff;
  font-size: 15.8;
  margin-top: 295;
  margin-left: 11;
`;

const Text5 = styled.Text`
  font-family: Kanit-Regular;
  font-size: 15.8;
  color: #0000ff;
`;

const RegisterButton = styled.TouchableOpacity`
  width: 85;
  margin-top: -22.5;
  margin-left: 206;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #000000;
  width: 150;
  height: 35;
  justify-content: center;
  align-items: center;
  border-radius: 35;
  margin-left: 200;
  margin-top: 168;
`;

export default WelcomeScreen;
