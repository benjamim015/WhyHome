import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/SeriesCard';

import mock from '../../mocks/seriesMock';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const SeriesCardInfoScreen = ({ route, navigation }) => {
  console.log(route.params);
  const { title } = route.params;
  const { genres } = route.params;
  const { image } = route.params;
  const { year } = route.params;
  const { synopsis } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#0F1218' }}>
      <BackgroundImage source={{ uri: image }}></BackgroundImage>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 40,
            fontFamily: 'Kanit-Regular',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default SeriesCardInfoScreen;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
`;
