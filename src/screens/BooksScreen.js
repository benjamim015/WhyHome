import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import BooksCard from '../components/BooksCard';

const { url } = require('../config/url');

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const BooksScreen = ({ route, navigation }) => {
  const [books, setBooks] = useState([]);
  const { myList } = route.params;
  const { token } = route.params;
  const { email } = route.params;

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://rest-api-whyhome.herokuapp.com/books/getAll',
      );
      const data = await res.json();

      setBooks(data.books.books);
    })();
  }, []);

  const [search, setSearch] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ alignItems: 'center' }}>
        <Header title="livros"></Header>
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
        {books.map((res) => {
          if (
            res.nome.toUpperCase().includes(search.toUpperCase()) ||
            res.ano.toUpperCase().includes(search.toUpperCase()) ||
            res.genero
              .map((resp) => {
                if (resp.toUpperCase().includes(search.toUpperCase())) {
                  return true;
                }
              })
              .indexOf(true) > -1
          ) {
            return (
              <BooksCard
                cardTitle={res.nome}
                cardImage={res.imagem}
                cardYear={res.ano}
                cardGenres={res.genero}
                cardSynopsis={res.sinopse}
                cardAuthor={res.autor}
                cardCopies={res.copias}
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

export default BooksScreen;

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
