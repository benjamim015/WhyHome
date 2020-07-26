import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const Card = ({ title }) => {
  const TouchableCard = styled.TouchableOpacity`
    height: ${alturaDaTela * 0.7};
    width: ${larguraDaTela * 0.8};
    justify-content: center;
    align-items: center;
    /* background-color: #0d1d26; */
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

  return (
    <TouchableCard>
      <Title>{title}</Title>
    </TouchableCard>
  );
};

export default Card;

const Title = styled.Text`
  color: #ffffff;
  font-size: 50;
  text-transform: uppercase;
  font-family: Kanit-Regular;
`;
