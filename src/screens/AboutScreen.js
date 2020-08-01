import React from 'react';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components';
import arrowimg from '../assets/whiteArrow.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AboutScreen = ({ navigation }) => {
  return (
    <Background style={{ height: '100%', width: '100%' }}>
      <ArrowButton onPress={() => navigation.navigate('WhyHome')}>
        <ArrowImg source={arrowimg}></ArrowImg>
      </ArrowButton>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Projeto para o Hackathon</Text>
        <Text>Call For Code 2020</Text>
      </View>
    </Background>
  );
};

const Background = styled.View`
  background-color: #006ec2;
`;

const Text = styled.Text`
  color: #ffffff;
  font-size: 19;
  font-family: Kanit-Regular;
`;

const ArrowImg = styled.Image`
  margin-top: 15;
  width: ${windowWidth * 0.24};
  height: ${windowHeight * 0.06};
`;

const ArrowButton = styled.TouchableOpacity``;

export default AboutScreen;
