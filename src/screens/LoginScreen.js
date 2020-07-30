import React, { useState, useEffect } from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  Alert,
  CheckBox,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useIsFocused } from '@react-navigation/native';

import styled from 'styled-components';
import LSBackground from '../assets/loginscreen.png';
import LSPeople from '../assets/loginscreenpeople.png';
import Logo from '../assets/logo.png';

const { url } = require('../config/url');

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LoginScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('NAVIGATION', navigation);
    console.log('ROUTE', route);
    console.log(email);
    console.log(password);
  }, [isFocused]);

  // const [keep, setKeep] = useState(false);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log('GUARDADO COM SUCESSO', jsonValue);
      await AsyncStorage.setItem('@storage_KeepLogged', jsonValue);
      await AsyncStorage.setItem('@storage_KeepedEmail', email);
      await AsyncStorage.setItem('@storage_KeepedPassword', password);
    } catch (e) {}
  };

  const getData = async () => {
    try {
      const keepLogged2 = await AsyncStorage.getItem('@storage_KeepLogged');
      const keepedEmail2 = await AsyncStorage.getItem('@storage_KeepedEmail');
      const keepedPassword2 = await AsyncStorage.getItem(
        '@storage_KeepedPassword',
      );
      return {
        keepLogged: keepLogged2 == 'true' ? true : false,
        keepedEmail: keepedEmail2,
        keepedPassword: keepedPassword2,
      };
    } catch (e) {}
  };

  // useEffect(() => {
  //   (async () => {
  //     const res = await getData();
  //     setKeep(res);
  //   })();
  // }, []);

  // useEffect(() => {
  //   setKeepLogged(keep);
  // }, [keep]);

  // const [keepLogged, setKeepLogged] = useState(keep);
  const [keepLogged, setKeepLogged] = useState(false);

  const [keepLoggedAsync, setKeepLoggedAsync] = useState('');
  const [keepedEmail, setKeepedEmail] = useState('');
  const [keepedPassword, setKeepedPassword] = useState('');

  useEffect(() => {
    (async () => {
      const res = await getData();
      console.log('res123', res);
      setKeepLoggedAsync(res.keepLogged);
      setKeepedEmail(res.keepedEmail);
      setKeepedPassword(res.keepedPassword);
      return res;
    })();
  }, []);

  //   useEffect(() => {
  //     (async () => {
  //       const res = await getData();
  //       console.log('res', res);
  //       return res;
  //     })();
  //   }, []),
  // );

  // console.log('KEEP', keepLogged);

  let errors = '';

  const [loading, setLoading] = useState(false);

  if (keepLoggedAsync && route.params == null) {
    console.log(keepedEmail);
    console.log(keepedPassword);
    (async () => {
      await fetch(`${url}/users/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: keepedEmail,
          password: keepedPassword,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          navigation.navigate('WhyHome', {
            email: res.data._id,
            name: res.data.name,
            token: res.token,
          });
        });
    })();
  }

  if (keepLoggedAsync && route.params == null) {
    return (
      <View
        style={{
          // backgroundColor: 'black',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={Logo} style={{ width: '60%', height: '10%' }} />
      </View>
    );
  }

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
                Alert.alert('Erro!', errors);
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
                      Alert.alert('Erro!', 'Falha na autenticação');
                    } else {
                      navigation.navigate('WhyHome', {
                        email: res.data._id,
                        name: res.data.name,
                        token: res.token,
                      });
                      if (keepLogged) {
                        storeData(keepLogged);
                      }
                    }
                  });
              }
            }}>
            <String>Login</String>
          </LoginButton>
          <KeepLoggedView>
            <CheckBox value={keepLogged} onValueChange={setKeepLogged} />
            <KeepLoggedText>Manter conectado?</KeepLoggedText>
          </KeepLoggedView>
        </Container>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

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

const KeepLoggedView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10;
`;

const KeepLoggedText = styled.Text`
  font-size: 20;
  font-family: Kanit-Regular;
`;
