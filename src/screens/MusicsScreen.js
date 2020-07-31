import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import MusicsCard from '../components/MusicsCard';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const MusicsScreen = ({ route, navigation }) => {
  const [musics, setMusics] = useState([]);

  const { myList } = route.params;
  const { token } = route.params;
  const { email } = route.params;

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://rest-api-whyhome.herokuapp.com/musics/getAll',
      );
      const data = await res.json();

      setMusics(data.musics.musics);
    })();
  }, []);

  const [search, setSearch] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: 'ffffff' }}>
      <View style={{ alignItems: 'center' }}>
        <Header title="musicas"></Header>
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
        {musics.map((res) => {
          if (
            res.nome.toUpperCase().includes(search.toUpperCase()) ||
            res.ano.toUpperCase().includes(search.toUpperCase())
          ) {
            return (
              <MusicsCard
                cardName={res.nome}
                cardGenres={res.genero}
                cardYear={res.ano}
                cardArtists={res.artista}
                cardImage={res.imagem}
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

export default MusicsScreen;

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
  padding-left: 10;
  font-size: 16;
  border-width: 1;
`;
