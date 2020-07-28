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
  const { restriction } = route.params;
  const { rating } = route.params;

  const Restriction = styled.View`
    width: 40;
    height: 40;
    align-items: center;
    justify-content: center;
    border-radius: 5;
    position: absolute;
    bottom: 20;
    right: 20;
    background-color: ${restriction == 'L' ? (
      '#0C9447'
    ) : restriction == '10' ? (
      '#0F7DC2'
    ) : restriction == '12' ? (
      '#F8C411'
    ) : restriction == '14' ? (
      '#E67824'
    ) : restriction == '16' ? (
      '#DB2827'
    ) : restriction == '18' ? (
      '#1D1815'
    ) : (
      <></>
    )};
  `;

  return (
    <View style={{ flex: 1, backgroundColor: '#0F1218' }}>
      <BackgroundImage source={{ uri: image }}></BackgroundImage>
      <OverlayCard>
        <OverlayCard2>
          <Title>{title}</Title>
          <Synopsis>{synopsis}</Synopsis>
          <InfoView>
            <InfoText>Gêneros: {genres.join(', ')}</InfoText>
            <InfoText>Ano: {year}</InfoText>
            <InfoText>imdbRating: {rating}</InfoText>
            <Restriction>
              <RestrictionText>{restriction}</RestrictionText>
            </Restriction>
          </InfoView>
        </OverlayCard2>
      </OverlayCard>
    </View>
  );
};

export default SeriesCardInfoScreen;

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

const Synopsis = styled.Text`
  color: #ffffff;
  font-size: 14;
  font-family: 'Kanit-Regular';
  text-align: justify;
  width: ${larguraDaTela * 0.8};
  padding-left: 5%;
  padding-right: 5%;
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

const RestrictionText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 20;
  font-family: 'Kanit-Regular';
`;
