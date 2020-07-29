import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import styled from 'styled-components';
import Header from '../components/Header';
import MoviesCard from '../components/MoviesCard';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const MoviesScreen = ({ route, navigation }) => {
  const { token } = route.params;
  const { email } = route.params;

  const isFocused = useIsFocused();

  console.log(email, token);
  // console.log('Token:', token);
  // return <Text>MINHA LISTA</Text>;
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${url}/users/getMyList`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await res.json();

      setUserList(data.userList);
    })();
  }, [isFocused]);

  return (
    <View style={{ flex: 1, backgroundColor: '#0F1218' }}>
      <Header title="filmes"></Header>
      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {userList.map((res) => {
          return (
            <MoviesCard
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
