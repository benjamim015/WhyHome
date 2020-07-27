import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';

import mock from '../../mocks/seriesMock';

// console.log('mock:', mock[0]);

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const SeriesScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0F1218' }}>
      <Header title="séries"></Header>
      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {mock.map((res) => {
          return <SerieCard></SerieCard>;
        })}
      </StyledScrollView>
    </View>
  );
};

export default SeriesScreen;

const StyledScrollView = styled.ScrollView`
  width: ${larguraDaTela};
  height: ${alturaDaTela * 0.01};
  background-color: #0f1218;
`;

const SerieCard = styled.TouchableOpacity`
  background-color: #025373;
  width: ${larguraDaTela * 0.9};
  height: ${alturaDaTela * 0.15};
  margin-top: 20;
  border-radius: 25;
`;
