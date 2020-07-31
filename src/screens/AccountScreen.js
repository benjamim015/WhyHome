import React from 'react';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components';
import peopleimg from '../assets/peopleimg.png';
import arrowimg from '../assets/whiteArrow.png';
import AsyncStorage from '@react-native-community/async-storage';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AccountScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const { name } = route.params;

  return (
    <RedBG style={{ height: '40%', width: '100%' }}>
      <ArrowButton onPress={() => navigation.navigate('WhyHome')}>
        <ArrowImg source={arrowimg}></ArrowImg>
      </ArrowButton>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <PeopleImg source={peopleimg} />
        <View>
          <StyledText>Nome: {name}</StyledText>
          <StyledText>Email: {email}</StyledText>
        </View>
        <LeaveButton
          onPress={() => {
            (async () => {
              try {
                await AsyncStorage.setItem('@storage_KeepLogged', 'false');
                await AsyncStorage.setItem('@storage_KeepedEmail', '');
                await AsyncStorage.setItem('@storage_KeepedPassword', '');
                navigation.navigate('Login', { fromAccoutScreen: true });
              } catch (e) {}
            })();
          }}>
          <LeaveText>Sair da Conta</LeaveText>
        </LeaveButton>
      </View>
    </RedBG>
  );
};

const RedBG = styled.View`
  background-color: rgba(242, 7, 50, 0.8);
  border-bottom-left-radius: 30;
  border-bottom-right-radius: 30;
`;

const PeopleImg = styled.Image`
  width: ${screenWidth * 0.35};
  height: ${screenHeight * 0.15};
  align-self: center;
  margin-bottom: 10;
`;

const StyledText = styled.Text`
  font-size: 18;
  font-family: Kanit-Regular;
  color: #ffffff;
  /* margin-right: 70; */
`;

const ArrowImg = styled.Image`
  margin-top: 15;
  width: ${screenWidth * 0.24};
  height: ${screenHeight * 0.06};
`;

const ArrowButton = styled.TouchableOpacity``;

const LeaveButton = styled.TouchableOpacity`
  /* background-color: black; */
  height: 30;
  justify-content: center;
  align-items: center;
  margin-top: 15;
`;

const LeaveText = styled.Text`
  font-size: 18;
  font-family: Kanit-Regular;
  color: #ffffff;
  border-bottom-width: 1;
  border-color: #ffffff;
`;

export default AccountScreen;
