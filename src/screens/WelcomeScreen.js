import React from 'react';
import { Text, View, ImageBackground, Image, Dimensions } from 'react-native';
import WSBackground from '../assets/welcomescreen.png';
import WSLogo from '../assets/logo.png';
import styled from 'styled-components';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={WSBackground}
      style={{ width: '100%', height: '100%' }}>
      <Text1>BEM-VINDO</Text1>
      <Text2>é bom ter você conosco</Text2>
      <StartButton>
        <Text3>Começar</Text3>
      </StartButton>
      <Text4>Ainda não tem uma conta?</Text4>
      <RegisterButton onPress={() => navigation.navigate('Register')}>
        <Text5>Registre-se</Text5>
      </RegisterButton>
      <Image
        source={WSLogo}
        style={{
          position: 'absolute',
          height: '30%',
          width: '30%',
          resizeMode: 'contain',
          right: '5%',
          top: '-6.5%',
        }}></Image>
    </ImageBackground>
  );
};

const Text1 = styled.Text`
  font-family: Kanit-Regular;
  color: #000000;
  font-size: 40;
  top: 2.5%;
  left: 4.7%;
`;

const Text2 = styled.Text`
  font-size: 18.5;
  top: 0.7%;
  color: #000000;
  left: 5.4%;
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
  top: 76.5%;
  left: 3.6%;
`;

const Text5 = styled.Text`
  font-family: Kanit-Regular;
  font-size: 15.8;
  color: #0000ff;
`;

const RegisterButton = styled.TouchableOpacity`
  width: 85;
  top: 73.07%;
  left: 57.2%;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.TouchableOpacity`
  background-color: #000000;
  width: ${screenWidth * 0.4};
  height: ${screenHeight * 0.05};
  justify-content: center;
  align-items: center;
  border-radius: 35;
  left: 57%;
  top: 28%;
`;

export default WelcomeScreen;
