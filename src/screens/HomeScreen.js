import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components';

import Card from '../components/Card';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <>
      <StyledView>
        <StyledScrollView showsVerticalScrollIndicator={false}>
          <StyledTouchableOpacity>
            <StyledText>INÍCIO</StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity>
            <StyledText>CONTA</StyledText>
          </StyledTouchableOpacity>
        </StyledScrollView>
      </StyledView>
      <StyledView2>
        <StyledScrollView2
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Card title="séries"></Card>
          <Card title="filmes"></Card>
          <Card title="músicas"></Card>
          <Card title="receitas"></Card>
        </StyledScrollView2>
      </StyledView2>
    </>
  );
};

export default HomeScreen;

const StyledView = styled.View`
  /* background-color: black; */
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10;
`;

const StyledScrollView = styled.ScrollView`
  background-color: #0f1218;
  max-height: ${alturaDaTela * 0.07};
  height: ${alturaDaTela * 0.07};
  border-radius: 15;
  margin-top: 35;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  height: ${alturaDaTela * 0.07};
  width: ${larguraDaTela * 0.5};
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: white;
  font-family: Kanit-Regular;
  font-size: 25;
`;

const StyledView2 = styled.View`
  /* background-color: red; */
  width: ${larguraDaTela};
  height: ${alturaDaTela * 0.7};
`;

const StyledScrollView2 = styled.ScrollView`
  /* background-color: #0f1218; */
  flex: 1;
`;
