import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  Picker,
  Modal,
  TouchableOpacity,
} from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import MoviesCard from '../components/MoviesCard';
import Lupa from '../assets/lupa.png';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const MoviesScreen = ({ route, navigation }) => {
  const [movies, setMovies] = useState([]);
  const { myList } = route.params;
  const { token } = route.params;
  const { email } = route.params;

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://rest-api-whyhome.herokuapp.com/movies/getAll',
      );
      const data = await res.json();

      setMovies(data.movies.movies);
    })();
  }, []);

  const [search, setSearch] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ alignItems: 'center' }}>
        <Header title="filmes"></Header>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SearchBox
            placeholder={'Pesquisa...'}
            placeholderTextColor={'#ccc'}
            onChangeText={(newSearch) => setSearch(newSearch)}
          />
        </View>
      </View>

      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {movies.map((res) => {
          if (
            res.nome.toUpperCase().includes(search.toUpperCase()) ||
            res.ano.toUpperCase().includes(search.toUpperCase()) ||
            res.generos
              .map((resp) => {
                if (resp.toUpperCase().includes(search.toUpperCase())) {
                  return true;
                }
              })
              .indexOf(true) > -1
          ) {
            return (
              <MoviesCard
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

export default MoviesScreen;

const StyledScrollView = styled.ScrollView`
  width: ${larguraDaTela};
  height: ${alturaDaTela * 0.01};
  background-color: #ffffff;
`;

const SearchBox = styled.TextInput`
  background-color: transparent;
  width: ${larguraDaTela * 0.6};
  height: ${alturaDaTela * 0.05};
  border-radius: 20;
  margin-top: 10;
  margin-bottom: 10;
  padding-left: 15;
  font-size: 16;
  border-width: 1;
`;
