import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import styled from 'styled-components';
import LSBackground from '../assets/loginscreen.png';
import LSPeople from '../assets/loginscreenpeople.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={LSBackground}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <Container>
          <InputEmail placeholder="Email"></InputEmail>
          <InputPassword
            placeholder="Senha"
            secureTextEntry={true}></InputPassword>
        </Container>
        <LoginButton onPress={() => navigation.navigate('Login')}>
          <String>Login</String>
        </LoginButton>
        <Text1>WHY HOME</Text1>
        <PeopleImg source={LSPeople}></PeopleImg>
      </View>
    </ImageBackground>
  );
};

const PeopleImg = styled.Image`
  width: ${screenWidth * 0.4};
  height: ${screenHeight * 0.2};
  top: -12%;
  margin: 0 auto;
`;
const Text1 = styled.Text`
  margin: 0 auto;
  top: -22.5%;
  font-size: 40;
  font-family: Kanit-Regular;
`;

const Container = styled.View``;

const InputEmail = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.3);
  border-color: #cccccc;
  border-width: 1;
  border-radius: 16;
  top: 350%;
  margin: 0 auto;
  width: ${screenWidth * 0.55};
  height: ${screenHeight * 0.06};
  font-family: Kanit-Regular;
`;

const InputPassword = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.3);
  border-color: #cccccc;
  border-width: 1;
  border-radius: 16;
  top: 360%;
  margin: 0 auto;
  width: ${screenWidth * 0.55};
  height: ${screenHeight * 0.06};
  font-family: Kanit-Regular;
`;

const LoginButton = styled.TouchableOpacity`
  width: ${screenWidth * 0.3};
  height: ${screenHeight * 0.04};
  top: 101%;
  left: 23%;
  border-radius: 16;
  background-color: #000000;
  justify-content: center;
  align-items: center;
`;

const String = styled.Text`
  font-size: 17;
  color: #ffffff;
  font-family: Kanit-Regular;
`;

export default LoginScreen;
