import React, { useState } from 'react';
import { Alert, Dimensions, ImageBackground, Image } from 'react-native';

import styled from 'styled-components';
import ResgisterBackgroundImage from '../assets/registerScreen.png';
import ArrowBackImage from '../assets/arrow.png';
import Logo from '../assets/logo.png';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let errors = '';

  return (
    <BackgroundImage source={ResgisterBackgroundImage}>
      <StyledView>
        <ArrowButton onPress={() => navigation.goBack()}>
          <ArrowImage source={ArrowBackImage} />
        </ArrowButton>
        <LogoImage source={Logo}></LogoImage>
        <Container>
          <StyledTextInput
            placeholder="Nome"
            placeholderTextColor="#cccccc"
            value={name}
            onChangeText={(newName) => setName(newName)}></StyledTextInput>
          <StyledTextInput
            placeholder="Sobrenome"
            placeholderTextColor="#cccccc"
            value={surname}
            onChangeText={(newSurname) =>
              setSurname(newSurname)
            }></StyledTextInput>
          <StyledTextInput
            placeholder="E-mail"
            placeholderTextColor="#cccccc"
            autoCapitalize="none"
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}></StyledTextInput>
          <StyledTextInput
            placeholder="Senha"
            placeholderTextColor="#cccccc"
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={(newPassword) =>
              setPassword(newPassword)
            }></StyledTextInput>
          <StyledTextInput
            placeholder="Confirmar senha"
            placeholderTextColor="#cccccc"
            autoCapitalize="none"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(newConfirmPassword) =>
              setConfirmPassword(newConfirmPassword)
            }></StyledTextInput>
          <RegisterButton
            onPress={async () => {
              if (name === '') errors += 'Preencha o campo de nome! \n';
              if (surname === '') errors += 'Preencha o campo de sobrenome! \n';
              if (email === '') errors += 'Preencha o campo de email! \n';
              if (password === '') errors += 'Preencha o campo de senha! \n';
              if (confirmPassword === '')
                errors += 'Preencha o campo de confirmar senha \n';

              if (errors !== '') {
                Alert.alert('Erro!', errors);
                errors = '';
              } else {
                if (password !== confirmPassword) {
                  Alert.alert(
                    'Erro!',
                    'Confirmar Senha está diferente de Senha!',
                  );
                } else {
                  await fetch(`${url}/users/emailVerification`, {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: name,
                      surname: surname,
                      email: email,
                      password: password,
                    }),
                  })
                    .then((response) => response.json())
                    .then((res) => {
                      if (res.response !== null) {
                        Alert.alert('Verifique seu e-mail', '');
                        navigation.navigate('Login');
                      }
                    });
                }
              }
            }}>
            <RegisterText>Registrar</RegisterText>
          </RegisterButton>
        </Container>
      </StyledView>
    </BackgroundImage>
  );
};

const ArrowButton = styled.TouchableOpacity`
  width: 50;
  height: 50;
  position: absolute;
  top: 15;
  left: 15;
`;

const ArrowImage = styled.Image`
  position: relative;
  width: 80;
  height: 80;
  top: -15;
  left: -20;
`;

const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  width: ${larguraDaTela * 0.7};
  height: ${alturaDaTela * 0.5};
`;

const StyledTextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.2);
  border-color: #cccccc;
  border-width: 2;
  border-radius: 15;
  height: ${alturaDaTela * 0.065};
  margin-bottom: 10;
  font-size: 20;
  color: #0f1218;
  padding-left: 15;
  font-family: Kanit-Regular;
`;

const RegisterButton = styled.TouchableOpacity`
  background-color: #0f1218;
  width: ${larguraDaTela * 0.5};
  height: ${alturaDaTela * 0.065};
  border-radius: 100;
  margin-top: 20;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const RegisterText = styled.Text`
  color: #ffffff;
  font-size: 20;
  font-family: Kanit-Regular;
`;

const LogoImage = styled.Image`
  position: relative;
  width: 200;
  height: 70;
  top: -50;
  left: -20;
`;

export default RegisterScreen;
