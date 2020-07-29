import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/MusicsCard';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const MusicsCardInfoScreen = ({ route, navigation }) => {
  console.log(route.params);
  const { name } = route.params;
  const { genres } = route.params;
  const { year } = route.params;
  const { artists } = route.params;
  const { image } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#0F1218' }}>
      <BackgroundImage source={{ uri: image }}></BackgroundImage>
      <OverlayCard>
        <OverlayCard2>
          <Title>{name}</Title>
          <InfoView>
            <InfoText>Gênero(s): {genres.join(', ')}</InfoText>
            <InfoText>Ano: {year}</InfoText>
            <InfoText>Artista(s): {artists}</InfoText>
          </InfoView>
        </OverlayCard2>
      </OverlayCard>
    </View>
  );
};

const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const OverlayCard = styled.View`
  flex: 1;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const OverlayCard2 = styled.View`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  border-radius: 25;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 40;
  font-family: 'Kanit-Regular';
  margin-bottom: 15;
  text-align: center;
  max-width: ${larguraDaTela * 0.8};
  margin-left: 10;
  margin-right: 10;
  border-bottom-width: 0.2;
  border-color: #ffffff;
`;

const InfoView = styled.View`
  /* background-color: red; */
  margin-top: 10;
  width: 100%;
  height: 100;
  padding-left: 5%;
  padding-right: 5%;
`;

const InfoText = styled.Text`
  color: #ffffff;
  font-size: 16;
  font-family: 'Kanit-Regular';
`;

export default MusicsCardInfoScreen;
