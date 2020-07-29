import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import MoviesCard from '../components/MoviesCard';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const MoviesScreen = ({ route, navigation }) => {
  const [movies, setMovies] = useState([]);
  // console.log(route);
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

  return (
    <View style={{ flex: 1, backgroundColor: '#0F1218' }}>
      <Header title="filmes"></Header>
      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {movies.map((res) => {
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
        })}
      </StyledScrollView>
    </View>
  );
};

export default MoviesScreen;

const StyledScrollView = styled.ScrollView`
  width: ${larguraDaTela};
  height: ${alturaDaTela * 0.01};
  background-color: #0f1218;
`;

const MovieCard = styled.TouchableOpacity`
  background-color: #025373;
  width: ${larguraDaTela * 0.9};
  height: ${alturaDaTela * 0.15};
  margin-top: 20;
  border-radius: 25;
`;
