import React from 'react';
import { Text, View, ImageBackground, Image, Dimensions } from 'react-native';
import WSBackground from '../assets/welcomescreen.png';
import WSLogo from '../assets/logo.png';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const WelcomeScreen = ({ navigation }) => {
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_FisrtTime', jsonValue);
      console.log(jsonValue);
    } catch (e) {}
  };

  const getData = async () => {
    try {
      const firstTime = await AsyncStorage.getItem('@storage_FisrtTime');
      return firstTime;
    } catch (e) {}
  };

  if (
    async () => {
      await getData();
    }
  ) {
    navigation.replace('Login');
  }

  return (
    <ImageBackground
      source={WSBackground}
      style={{ width: '100%', height: '100%' }}>
      <View style={{ height: '50%' }}>
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row-reverse',
          }}>
          <View style={{ flexDirection: 'column' }}>
            <Text1>SEJA BEM-VINDO</Text1>
            <Text2>é bom ter você conosco</Text2>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 130,
            width: '100%',
          }}>
          <StartButton
            onPress={async () => {
              storeData(true);
              navigation.navigate('Register');
            }}>
            <Text3>Começar</Text3>
          </StartButton>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          flex: 1,
          alignSelf: 'flex-start',
          marginBottom: 10,
          marginLeft: 10,
        }}></View>
    </ImageBackground>
  );
};

const Text1 = styled.Text`
  font-family: Kanit-Regular;
  color: #000000;
  font-size: 45;
  align-self: flex-end;
  margin-right: 20;
`;

const Text2 = styled.Text`
  font-size: 20;
  color: #000000;
  font-family: Kanit-Regular;
  align-self: flex-end;
  margin-top: -15;
  margin-right: 22;
`;

const Text3 = styled.Text`
  color: #ffffff;
  font-size: 20;
  font-family: Kanit-Regular;
`;

const Text4 = styled.Text`
  font-family: Kanit-Regular;
  color: #ffffff;
  font-size: 16;
`;

const Text5 = styled.Text`
  font-family: Kanit-Regular;
  font-size: 18;
  color: #0000ff;
  margin-left: -15;
  margin-top: 3;
`;

const RegisterButton = styled.TouchableOpacity`
  width: ${screenWidth * 0.32};
  height: ${screenHeight * 0.037};
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.TouchableOpacity`
  background-color: #0f1218;
  width: ${screenHeight * 0.25};
  height: ${screenHeight * 0.065};
  border-radius: 100;
  justify-content: center;
  align-items: center;
  margin-right: 20;
  margin-top: 30;
`;

export default WelcomeScreen;
