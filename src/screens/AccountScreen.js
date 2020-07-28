import React from 'react';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components';
import peopleimg from '../assets/peopleimg.png';
import arrowimg from '../assets/whiteArrow.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AccountScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const { name } = route.params;

  return (
    <RedBG style={{ height: '32%', width: '100%' }}>
      <ArrowButton onPress={() => navigation.navigate('WhyHome')}>
        <Image3 source={arrowimg}></Image3>
      </ArrowButton>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PeopleImg source={peopleimg}></PeopleImg>
        <Text1>USER: {name}</Text1>
        <Text2>EMAIL: {email}</Text2>
      </View>
    </RedBG>
  );
};

const RedBG = styled.View`
  background-color: rgba(242, 7, 50, 0.9);
`;

const PeopleImg = styled.Image`
  width: ${screenWidth * 0.22};
  height: ${screenHeight * 0.13};
  margin-top: -100;
  margin-left: -210;
`;

const Text1 = styled.Text`
  margin-top: -60;
  margin-left: 70;
  font-size: 13;
  font-family: Kanit-Regular;
  color: #ffffff;
`;

const Text2 = styled.Text`
  margin-top: -45;
  margin-left: 75;
  font-size: 13;
  font-family: Kanit-Regular;
  color: #ffffff;
`;

const Image3 = styled.Image`
  margin-top: 10;
  width: ${screenWidth * 0.2};
  height: ${screenHeight * 0.07};
`;

const ArrowButton = styled.TouchableOpacity``;

export default AccountScreen;
