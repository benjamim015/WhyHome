import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const Card = ({ cardTitle, cardImage, cardYear, cardGenres, cardSynopsis }) => {
  const { navigate } = useNavigation();

  const gotoInfoScreen = () => {
    navigate('SeriesCardInfoScreen', {
      title: cardTitle,
      image: cardImage,
      year: cardYear,
      genres: cardGenres,
      synopsis: cardSynopsis,
    });
  };

  return (
    <SerieCard onPress={gotoInfoScreen}>
      <ImageCard
        source={{
          uri: cardImage,
        }}></ImageCard>
      <TitleText>{cardTitle}</TitleText>
    </SerieCard>
  );
};

export default Card;

const SerieCard = styled.TouchableOpacity`
  background-color: #025373;
  width: ${larguraDaTela * 0.9};
  height: ${alturaDaTela * 0.15};
  margin-top: 20;
  border-radius: 25;
  justify-content: center;
  align-items: center;
`;

const ImageCard = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 25;
`;

const TitleText = styled.Text`
  position: absolute;
  color: rgba(255, 255, 255, 0.6);
  font-size: 40;
  font-family: Kanit-Regular;
`;
