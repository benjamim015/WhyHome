import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/MoviesCard';
import addToListIcon from '../assets/plus.png';
import checkIcon from '../assets/check.png';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const BooksCardInfoScreen = ({ route, navigation }) => {
  console.log(route.params);
  const { title } = route.params;
  const { genres } = route.params;
  const { image } = route.params;
  const { year } = route.params;
  const { synopsis } = route.params;
  const { author } = route.params;
  const { copies } = route.params;
  const { myList } = route.params;
  const { token } = route.params;
  const { email } = route.params;

  const [isInMyList, setIsInMyList] = useState(false);

  console.log(author);

  useEffect(() => {
    if (myList.includes(title)) {
      setIsInMyList(true);
    }
  }, []);

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
            <InfoText>Autor: {author}</InfoText>
            <InfoText>Cópias: {copies}</InfoText>
          </InfoView>
        </OverlayCard2>
        <AddToListButton
          onPress={async () => {
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
                  type: 'book',
                  nome: title,
                  generos: genres,
                  ano: year,
                  autor: author,
                  copias: copies,
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
                    console.log('ITEM ADICIONADO COM SUCESSO');
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
                    console.log('ITEM REMOVIDO COM SUCESSO');
                  }
                });
            }
          }}>
          <AddToListImage source={isInMyList ? checkIcon : addToListIcon} />
        </AddToListButton>
      </OverlayCard>
    </View>
  );
};

export default BooksCardInfoScreen;

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