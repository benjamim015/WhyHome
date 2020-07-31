import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import styled from 'styled-components';
import Header from '../components/Header';
import MoviesCard from '../components/MoviesCard';
import MusicsCard from '../components/MusicsCard';
import BooksCard from '../components/BooksCard';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const MyListScreen = ({ route, navigation }) => {
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
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Header title="Minha Lista"></Header>
      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {userList.map((res) => {
          return res.tipo == 'movie' || res.tipo == 'serie' ? (
            <MoviesCard
              cardTitle={res.nome}
              cardImage={res.imagem}
              cardYear={res.ano}
              cardGenres={res.generos}
              cardSynopsis={res.sinopse}
              cardRestriction={res.restricao}
              cardRating={res.imdbRating}
              myList={res.nome}
              token={token}
              email={email}
            />
          ) : res.tipo == 'music' ? (
            <MusicsCard
              cardName={res.nome}
              cardImage={res.imagem}
              cardYear={res.ano}
              cardArtists={res.artista}
              cardGenres={res.genero}
              myList={res.nome}
              token={token}
              email={email}
            />
          ) : (
            <BooksCard
              cardTitle={res.nome}
              cardImage={res.imagem}
              cardYear={res.ano}
              cardGenres={res.genero}
              cardSynopsis={res.sinopse}
              cardAuthor={res.autor}
              cardCopies={res.copias}
              myList={res.nome}
              token={token}
              email={email}
            />
          );
        })}
      </StyledScrollView>
    </View>
  );
};

export default MyListScreen;

const StyledScrollView = styled.ScrollView`
  width: ${larguraDaTela};
  height: ${alturaDaTela * 0.01};
  background-color: #ffffff;
`;

const MovieCard = styled.TouchableOpacity`
  background-color: #025373;
  width: ${larguraDaTela * 0.9};
  height: ${alturaDaTela * 0.15};
  margin-top: 20;
  border-radius: 25;
`;
