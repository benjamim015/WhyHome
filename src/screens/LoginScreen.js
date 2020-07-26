import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Dimensions } from 'react-native';

import styled from 'styled-components';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const LoginScreen = ({ navigation }) => {
  return (
    <StyledView1>
      <LoginText>Login</LoginText>
      <LoginButton onPress={() => navigation.navigate('WhyHome')}>
        <Text>Entrar</Text>
      </LoginButton>
    </StyledView1>
  );
};

const Reer = styled.Text`
  color: #ff0000;
`;
const StyledView1 = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoginText = styled.Text`
  color: #ff0000;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #bb0000;
  width: ${larguraDaTela * 0.5};
  height: ${alturaDaTela * 0.05};
  justify-content: center;
  align-items: center;
`;

export default LoginScreen;
