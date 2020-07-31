import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, Image } from 'react-native';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const HomeCard = ({ myList, token, email, title }) => {
  const urls = [
    'https://wallpaperaccess.com/full/1692037.jpg',
    'https://i.pinimg.com/564x/31/3d/e2/313de2c40b2e2cfb2790f7e976d7418c.jpg',
    'https://www.buymixtapes.com/upload/members/images/blameitonbaby_dababy.jpg',
    'https://static01.nyt.com/images/2020/07/04/arts/02eurovision1/02eurovision1-videoSixteenByNineJumbo1600-v2.jpg',
  ];

  const { navigate } = useNavigation();

  const gotoScreen = () => {
    if (title == 'séries') {
      navigate('SeriesScreen', { myList, token, email });
    } else if (title == 'filmes') {
      navigate('MoviesScreen', { myList, token, email });
    } else if (title == 'livros') {
      navigate('BooksScreen', { myList, token, email });
    } else if (title == 'músicas') {
      navigate('MusicsScreen', { myList, token, email });
    }
  };

  return (
    <TouchableCard onPress={gotoScreen}>
      <Cards>
        <BackgroundImage
          source={
            title == 'séries'
              ? {
                  uri: urls[0],
                }
              : title == 'livros'
              ? {
                  uri: urls[1],
                }
              : title == 'músicas'
              ? {
                  uri: urls[2],
                }
              : title == 'filmes'
              ? {
                  uri: urls[3],
                }
              : null
          }
        />
        <Title>{title}</Title>
      </Cards>
    </TouchableCard>
  );
};

export default HomeCard;

const TouchableCard = styled.TouchableOpacity`
  height: ${alturaDaTela * 0.65};
  width: ${larguraDaTela * 0.8};
  justify-content: center;
  align-items: center;
  margin-left: 10;
  margin-right: 10;
  border-radius: 20;
`;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 50;
  align-items: center;
  text-transform: uppercase;
  font-family: Kanit-Regular;
  position: absolute;
`;

const Cards = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 20;
`;
