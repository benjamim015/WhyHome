import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const HomeCard = ({ title }) => {
  const TouchableCard = styled.TouchableOpacity`
    height: ${alturaDaTela * 0.7};
    width: ${larguraDaTela * 0.8};
    justify-content: center;
    align-items: center;
    background-color: ${title == 'séries'
      ? '#0d1d26'
      : title == 'filmes'
      ? '#F20732 '
      : title == 'receitas'
      ? '#025373'
      : title == 'músicas'
      ? '#025E73'
      : '#ffffff'};
    margin-left: 10;
    margin-right: 10;
    border-radius: 20;
  `;

  const { navigate } = useNavigation();

  const gotoScreen = () => {
    if (title == 'séries') {
      navigate('SeriesScreen');
    }
  };

  return (
    <TouchableCard onPress={gotoScreen}>
      <Title>{title}</Title>
    </TouchableCard>
  );
};

export default HomeCard;

const Title = styled.Text`
  color: #ffffff;
  font-size: 50;
  text-transform: uppercase;
  font-family: Kanit-Regular;
`;
