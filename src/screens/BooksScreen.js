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
  // console.log(route);
  const { myList } = route.params;
  const { token } = route.params;
  const { email } = route.params;

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://rest-api-whyhome.herokuapp.com/books/getAll',
      );
      const data = await res.json();

      console.log(data);

      setBooks(data.books.books);
    })();
  }, []);

  console.log('BOOKS', books);

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Header title="livros"></Header>
      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {books.map((res) => {
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
