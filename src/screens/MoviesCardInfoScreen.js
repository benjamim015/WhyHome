import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';

import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/MoviesCard';
import addToListIcon from '../assets/plus.png';
import checkIcon from '../assets/check.png';
import ArrowImage from '../assets/whiteArrow.png';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const MoviesCardInfoScreen = ({ route, navigation }) => {
  const { title } = route.params;
  const { genres } = route.params;
  const { image } = route.params;
  const { year } = route.params;
  const { synopsis } = route.params;
  const { restriction } = route.params;
  const { rating } = route.params;
  const { myList } = route.params;
  const { token } = route.params;
  const { email } = route.params;

  const [isInMyList, setIsInMyList] = useState(false);

  useEffect(() => {
    if (myList.includes(title)) {
      setIsInMyList(true);
    }
  }, []);

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
        <ArrowB onPress={() => navigation.goBack()}>
          <ArrowImg source={ArrowImage}></ArrowImg>
        </ArrowB>
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
        <AddToListButton
          onPress={async () => {
            showMessage({
              message: isInMyList ? 'Removido da lista' : 'Adicionado a lista',
              type: 'info',
            });
            setIsInMyList(!isInMyList);
            if (isInMyList == false) {
              await fetch(`${url}/users/addToMyList`, {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  email: email,
                  type: 'movie',
                  nome: title,
                  generos: genres,
                  ano: year,
                  imdbRating: rating,
                  restricao: restriction,
                  sinopse: synopsis,
                  imagem: image,
                }),
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  if (res.response === null) {
                    console.log('ERRO');
                  } else {
                    console.log('ADICIONADO COM SUCESSO');
                  }
                });
            } else {
              await fetch(`${url}/users/removeFromMyList`, {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  email: email,
                  nome: title,
                }),
              })
                .then((response) => {
                  return response.json();
                })
                .then((res) => {
                  if (res.response === null) {
                    console.log('ERRO');
                  } else {
                    console.log('REMOVIDO COM SUCESSO');
                  }
                });
            }
          }}>
          <AddToListImage source={isInMyList ? checkIcon : addToListIcon} />
        </AddToListButton>
        <FlashMessage
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000000',
          }}
          titleStyle={{
            fontSize: 20,

            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            textAlignVertical: 'center',
          }}
          position="bottom"
        />
      </OverlayCard>
    </View>
  );
};

export default MoviesCardInfoScreen;

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
  font-size: 35;
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
  font-size: 14;
  font-family: 'Kanit-Regular';
`;

const RestrictionText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 20;
  font-family: 'Kanit-Regular';
`;

const AddToListButton = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  bottom: 80;
  border-radius: 100;
`;

const AddToListImage = styled.Image`
  width: 50;
  height: 50;
`;

const ArrowB = styled.TouchableOpacity`
  top: -330;
  left: -160;
  width: 62;
  height: 51;
`;

const ArrowImg = styled.Image`
  height: 100;
  width: 100;
  top: -23;
  left: -20;
`;
