import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const Card = ({
  cardTitle,
  cardImage,
  cardYear,
  cardGenres,
  cardSynopsis,
  cardAuthor,
  cardCopies,
  cardAvailableIn,
  myList,
  token,
  email,
}) => {
  const { navigate } = useNavigation();

  const gotoInfoScreen = () => {
    navigate('BooksCardInfoScreen', {
      title: cardTitle,
      image: cardImage,
      year: cardYear,
      genres: cardGenres,
      synopsis: cardSynopsis,
      author: cardAuthor,
      copies: cardCopies,
      availableIn: cardAvailableIn,
      myList: myList,
      token: token,
      email: email,
    });
  };

  return (
    <MovieCard onPress={gotoInfoScreen}>
      <ImageCard
        source={{
          uri: cardImage,
        }}></ImageCard>
      <OverlayCard></OverlayCard>
      <TitleText>{cardTitle}</TitleText>
    </MovieCard>
  );
};

export default Card;

const MovieCard = styled.TouchableOpacity`
  background-color: #025373;
  width: ${larguraDaTela * 0.9};
  height: ${alturaDaTela * 0.15};
  margin-top: 10;
  margin-bottom: 10;
  border-radius: 25;
  justify-content: center;
  align-items: center;
`;

const ImageCard = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 25;
`;

const OverlayCard = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 25;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
`;

const TitleText = styled.Text`
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  font-size: 30;
  font-family: Kanit-Regular;
  text-align: center;
  padding-left: 2%;
  padding-right: 2%;
`;
