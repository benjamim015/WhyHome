import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground } from 'react-native';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const HomeCard = ({ myList, token, email, title }) => {
  const TouchableCard = styled.TouchableOpacity`
    height: ${alturaDaTela * 0.65};
    width: ${larguraDaTela * 0.8};
    justify-content: center;
    align-items: center;
    margin-left: 10;
    margin-right: 10;
    border-radius: 20;
  `;

  const urls = [
    'https://wallpapers.moviemania.io/phone/tv/70523/796198/dark-phone-wallpaper.jpg?w=1536&h=2732',
    'https://s2.best-wallpaper.net/wallpaper/iphone/1906/Game-of-Thrones-hot-TV-series_iphone_1080x1920.jpg',
    'https://wallpaperaccess.com/full/1692037.jpg',
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
        <ImageBackground
          source={
            title == 'séries'
              ? {
                  uri: urls[0],
                }
              : title == 'livros'
              ? {
                  uri:
                    'https://i.pinimg.com/564x/31/3d/e2/313de2c40b2e2cfb2790f7e976d7418c.jpg',
                }
              : title == 'músicas'
              ? {
                  uri:
                    'https://www.buymixtapes.com/upload/members/images/blameitonbaby_dababy.jpg',
                }
              : title == 'filmes'
              ? {
                  uri:
                    'https://www.nerdsandbeyond.com/wp-content/uploads/2020/05/image.jpg',
                }
              : null
          }
          style={{
            width: '100%',
            height: '100%',
          }}></ImageBackground>
      </Cards>

      <Title>{title}</Title>
    </TouchableCard>
  );
};

export default HomeCard;

const Title = styled.Text`
  color: #ffffff;
  font-size: 50;
  align-items: center;
  top: -290;
  text-transform: uppercase;
  font-family: Kanit-Regular;
`;

const Cards = styled.View`
  width: 100%;
  height: 100%;
`;
