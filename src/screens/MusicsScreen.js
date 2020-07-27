import React from 'react';
import { View, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const MusicsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0F1218' }}>
      <Header title="músicas"></Header>
      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}></StyledScrollView>
    </View>
  );
};

export default MusicsScreen;

const StyledScrollView = styled.ScrollView`
  width: ${larguraDaTela};
  height: ${alturaDaTela * 0.01};
  background-color: #0f1218;
`;
