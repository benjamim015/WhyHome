import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Picker, Modal } from 'react-native';

import styled from 'styled-components';
import Header from '../components/Header';
import MoviesCard from '../components/MoviesCard';
import Lupa from '../assets/lupa.png';

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

  const [search, setSearch] = useState('');

  const [isFiltering, setIsFiltering] = useState(false);
  const [filter, setFilter] = useState('Todos');

  const pickerValues = ['Ano', 'imdbRating'];

  const compareByYear = (a, b) => {
    return b.ano - a.ano;
  };

  const compareByImdbRating = (a, b) => {
    return b.imdbRating - a.imdbRating;
  };

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
          <FilterBox
            onPress={() => {
              setIsFiltering(!isFiltering);
            }}>
            <StyledImage source={Lupa} />
          </FilterBox>
        </View>
        <Modal
          visible={isFiltering}
          transparent={true}
          animationType={'slide'}
          onRequestClose={() => {
            setIsFiltering(false);
          }}>
          <PickerView>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: 55,
                backgroundColor: 'rgba(255, 255, 255, 0.99)',
                borderColor: '#000000',
                borderBottomWidth: 1,
              }}>
              <FilterText>Filtrar por:</FilterText>
            </View>
            {pickerValues.map((res) => {
              console.log(res);
              return (
                <PickerItemButton
                  onPress={() => {
                    setIsFiltering(false);
                    setFilter(res);
                  }}>
                  <PickerItemText>{res}</PickerItemText>
                </PickerItemButton>
              );
            })}
          </PickerView>
        </Modal>
      </View>
      <StyledScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {movies
          .sort(filter == 'imdbRating' ? compareByImdbRating : compareByYear)
          .map((res) => {
            if (
              res.nome.toUpperCase().includes(search.toUpperCase()) ||
              res.ano.toUpperCase().includes(search.toUpperCase())
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
  padding-left: 10;
  font-size: 16;
  border-width: 1;
`;

const FilterBox = styled.TouchableOpacity`
  width: 50;
  height: 50;
  align-items: center;
  justify-content: center;
  /* background-color: black; */
`;

const PickerView = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FilterText = styled.Text`
  font-size: 24;
  color: black;
  font-family: Kanit-Regular;
`;

const PickerItemButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.99);
  width: 100%;
  height: 55;
  border-color: #000000;
  border-bottom-width: 1;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 2; */
`;

const PickerItemText = styled.Text`
  font-size: 20;
  color: black;
  font-family: Kanit-Regular;
`;

const StyledImage = styled.Image`
  width: 25;
  height: 30;
`;
