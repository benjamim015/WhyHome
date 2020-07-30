import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/MusicsCard';
import addToListIcon from '../assets/plus.png';
import checkIcon from '../assets/check.png';
import ArrowImage from '../assets/whiteArrow.png';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const MusicsCardInfoScreen = ({ route, navigation }) => {
  console.log(route.params);
  const { name } = route.params;
  const { genres } = route.params;
  const { year } = route.params;
  const { artists } = route.params;
  const { image } = route.params;
  const { myList } = route.params;
  const { token } = route.params;
  const { email } = route.params;

  // console.log('ASDASDASDASD', route.params);

  const [isInMyList, setIsInMyList] = useState(false);

  useEffect(() => {
    if (myList.includes(name)) {
      setIsInMyList(true);
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#0F1218' }}>
      <BackgroundImage source={{ uri: image }}></BackgroundImage>
      <OverlayCard>
        <ArrowB onPress={() => navigation.goBack()}>
          <ArrowImg source={ArrowImage}></ArrowImg>
        </ArrowB>
        <OverlayCard2>
          <Title>{name}</Title>
          <InfoView>
            <InfoText>Gênero(s): {genres.join(', ')}</InfoText>
            <InfoText>Ano: {year}</InfoText>
            <InfoText>Artista(s): {artists}</InfoText>
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
                  type: 'music',
                  nome: name,
                  genero: genres,
                  ano: year,
                  artista: artists,
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
                  nome: name,
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

export default MusicsCardInfoScreen;

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
