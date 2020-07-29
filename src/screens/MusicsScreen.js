import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import MusicsCard from '../components/MusicsCard';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const MusicsScreen = ({ navigation }) => {
  const [musics, setMusics] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://rest-api-whyhome.herokuapp.com/musics/getAll',
      );
      const data = await res.json();

      setMusics(data.musics.musics);
    })();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#0F1218' }}>
      <Header title="músicas"></Header>
      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {musics.map((res) => {
          return (
            <MusicsCard
              cardName={res.nome}
              cardGenres={res.genero}
              cardYear={res.ano}
              cardArtists={res.artista}
              cardImage={res.imagem}
            />
          );
        })}
      </StyledScrollView>
    </View>
  );
};

export default MusicsScreen;

const StyledScrollView = styled.ScrollView`
  width: ${larguraDaTela};
  height: ${alturaDaTela * 0.01};
  background-color: #0f1218;
`;
