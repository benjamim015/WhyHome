import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const Card = ({
  cardName,
  cardGenres,
  cardYear,
  cardArtists,
  cardImage,
  myList,
  token,
  email,
}) => {
  const { navigate } = useNavigation();

  // console.log(token);

  const gotoInfoScreen = () => {
    navigate('MusicsCardInfoScreen', {
      name: cardName,
      genres: cardGenres,
      year: cardYear,
      artists: cardArtists,
      image: cardImage,
      myList: myList,
      token: token,
      email: email,
    });
  };

  return (
    <MusicCard onPress={gotoInfoScreen}>
      <ImageCard
        source={{
          uri: cardImage,
        }}></ImageCard>
      <OverlayCard></OverlayCard>
      <TitleText>{cardName}</TitleText>
    </MusicCard>
  );
};

export default Card;

const MusicCard = styled.TouchableOpacity`
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
  font-size: 40;
  font-family: Kanit-Regular;
  text-align: center;
`;
