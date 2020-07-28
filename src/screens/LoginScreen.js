import React, { useState } from 'react';
import { View, Dimensions, ImageBackground, Alert } from 'react-native';

import styled from 'styled-components';
import LSBackground from '../assets/loginscreen.png';
import LSPeople from '../assets/loginscreenpeople.png';

const { url } = require('../config/url');

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('a');
  const [password, setPassword] = useState('a');

  let errors = '';

  return (
    <ImageBackground
      source={LSBackground}
      style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PeopleImg source={LSPeople}></PeopleImg>
        <Container>
          <StyledTextInput
            placeholder="Email"
            placeholderTextColor="#cccccc"
            value={email}
            autoCapitalize="none"
            onChangeText={(newEmail) => setEmail(newEmail)}></StyledTextInput>
          <StyledTextInput
            placeholder="Senha"
            placeholderTextColor="#cccccc"
            secureTextEntry={true}
            value={password}
            autoCapitalize="none"
            onChangeText={(newPassword) =>
              setPassword(newPassword)
            }></StyledTextInput>
          <LoginButton
            onPress={async () => {
              if (email === '') errors += 'Preencha o campo de email! \n';
              if (password === '') errors += 'Preencha o campo de senha! \n';

              if (errors !== '') {
                Alert.alert('Erro!', errors, [
                  {
                    text: 'OK',
                    style: 'Cancel',
                  },
                ]);
                errors = '';
              } else {
                await fetch(`${url}/users/login`, {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json',
                  },
                  body: JSON.stringify({
                    email: email,
                    password: password,
                  }),
                })
                  .then((response) => response.json())
                  .then((res) => {
                    if (res.response === null) {
                      Alert.alert('Erro!', 'Falha na autenticação', [
                        {
                          text: 'OK',
                          style: 'cancel',
                        },
                      ]);
                    } else {
                      navigation.navigate('WhyHome');
                    }
                  });
              }
            }}>
            <String>Login</String>
          </LoginButton>
        </Container>
      </View>
    </ImageBackground>
  );
};

const PeopleImg = styled.Image`
  width: 150;
  height: 150;
  align-self: center;
  margin-top: 20;
  margin-bottom: 20;
  /* resize-mode: contain; */
  /* background-color: red; */
`;

const Container = styled.View`
  width: ${screenWidth * 0.7};
  height: ${screenHeight * 0.5};
`;

const StyledTextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.2);
  border-color: #cccccc;
  border-width: 2;
  border-radius: 15;
  height: ${screenHeight * 0.065};
  margin-bottom: 10;
  font-size: 20;
  color: #0f1218;
  padding-left: 15;
  font-family: Kanit-Regular;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #0f1218;
  width: ${screenWidth * 0.5};
  height: ${screenHeight * 0.065};
  border-radius: 100;
  margin-top: 20;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const String = styled.Text`
  font-size: 17;
  color: #ffffff;
  font-family: Kanit-Regular;
`;

export default LoginScreen;
