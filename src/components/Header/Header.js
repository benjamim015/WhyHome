import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const SeriesScreen = ({ title }) => {
  const StyledView = styled.View`
    background-color: ${title == 'séries'
      ? '#0d1d26'
      : title == 'filmes'
      ? '#F20732 '
      : title == 'receitas'
      ? '#025373'
      : title == 'músicas'
      ? '#025E73'
      : '#ffffff'};
    width: ${larguraDaTela};
    height: ${alturaDaTela * 0.15};
    border-bottom-left-radius: 30;
    border-bottom-right-radius: 30;
    align-items: center;
    justify-content: center;
  `;

  return (
    <StyledView>
      <StyledText>{title}</StyledText>
    </StyledView>
  );
};

export default SeriesScreen;

const StyledText = styled.Text`
  color: #ffffff;
  font-size: 50;
  text-transform: uppercase;
  font-family: Kanit-Regular;
`;
