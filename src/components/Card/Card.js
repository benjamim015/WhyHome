import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const Card = () => {
  return <SerieCard></SerieCard>;
};

export default Card;

const SerieCard = styled.TouchableOpacity`
  background-color: #025373;
  width: ${larguraDaTela * 0.9};
  height: ${alturaDaTela * 0.15};
  margin-top: 20;
  border-radius: 25;
`;
