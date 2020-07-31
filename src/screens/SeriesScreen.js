import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import SeriesCard from '../components/SeriesCard';
import mock from '../../mocks/seriesMock';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const SeriesScreen = ({ route, navigation }) => {
  const [series, setSeries] = useState([]);

  const { myList } = route.params;
  const { token } = route.params;
  const { email } = route.params;

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://rest-api-whyhome.herokuapp.com/series/getAll',
      );
      const data = await res.json();

      setSeries(data.series.series);
    })();
  }, []);

  const [search, setSearch] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ alignItems: 'center' }}>
        <Header title="series"></Header>
        <SearchBox
          placeholder={'Pesquisa...'}
          placeholderTextColor={'#ccc'}
          onChangeText={(newSearch) => setSearch(newSearch)}
        />
      </View>
      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {series.map((res) => {
          if (
            res.nome.toUpperCase().includes(search.toUpperCase()) ||
            res.ano.toUpperCase().includes(search.toUpperCase())
          ) {
            return (
              <SeriesCard
                cardTitle={res.nome}
                cardImage={res.imagem}
                cardYear={res.ano}
                cardGenres={res.generos}
                cardSynopsis={res.sinopse}
                cardRestriction={res.restricao}
                cardRating={res.imdbRating}
                myList={myList}
                token={token}
                email={email}
              />
            );
          }
        })}
      </StyledScrollView>
    </View>
  );
};

export default SeriesScreen;

const StyledScrollView = styled.ScrollView`
  width: ${larguraDaTela};
  height: ${alturaDaTela * 0.01};
  background-color: #ffffff;
`;

const SerieCard = styled.TouchableOpacity`
  background-color: #ffffff;
  width: ${larguraDaTela * 0.9};
  height: ${alturaDaTela * 0.15};
  margin-top: 20;
  border-radius: 25;
`;

const SearchBox = styled.TextInput`
  background-color: transparent;
  width: ${larguraDaTela * 0.6};
  height: ${alturaDaTela * 0.05};
  border-radius: 20;
  margin-top: 10;
  margin-bottom: 10;
  padding-left: 10;
  font-size: 16;
  border-width: 1;
`;
