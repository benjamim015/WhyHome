import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import SeriesCard from '../components/SeriesCard';
import mock from '../../mocks/seriesMock';

const { url } = require('../config/url');

// console.log('mock:', mock[0]);

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const SeriesScreen = () => {
  const [series, setSeries] = useState([]);

  useEffect(async () => {
    const res = await fetch(
      'https://rest-api-whyhome.herokuapp.com/series/getAll',
    );
    const data = await res.json();

    setSeries(data.series.series);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#0F1218' }}>
      <Header title="séries"></Header>
      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {series.map((res) => {
          return (
            <SeriesCard
              cardTitle={res.nome}
              cardImage={res.imagem}
              cardYear={res.ano}
              cardGenres={res.generos}
              cardSynopsis={res.sinopse}
              cardRestriction={res.restricao}
              cardRating={res.imdbRating}
            />
          );
        })}
      </StyledScrollView>
    </View>
  );
};

export default SeriesScreen;

const StyledScrollView = styled.ScrollView`
  width: ${larguraDaTela};
  height: ${alturaDaTela * 0.01};
  background-color: #0f1218;
`;

const SerieCard = styled.TouchableOpacity`
  background-color: #025373;
  width: ${larguraDaTela * 0.9};
  height: ${alturaDaTela * 0.15};
  margin-top: 20;
  border-radius: 25;
`;
