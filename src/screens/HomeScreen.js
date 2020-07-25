import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {
  return (
    <StyledView1>
      <Text>Home</Text>
      <LoginButton onPress={() => navigation.goBack()}>
        <Text>Entrar</Text>
      </LoginButton>
    </StyledView1>
  );
};

const StyledView1 = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #d5d4d0;
  width: ${larguraDaTela * 0.5};
  height: ${alturaDaTela * 0.05};
  justify-content: center;
  align-items: center;
`;

export default HomeScreen;
