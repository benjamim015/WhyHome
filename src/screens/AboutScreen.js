import React from 'react';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components';
import arrowimg from '../assets/whiteArrow.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AboutScreen = ({ navigation }) => {
  return (
    <Background style={{ height: '100%', width: '100%' }}>
      <ArrowImg source={arrowimg}></ArrowImg>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text1>Project for Hackathon</Text1>
        <Text2>Call For Code</Text2>
      </View>
    </Background>
  );
};

const Background = styled.View`
  background-color: #006ec2;
`;

const Text1 = styled.Text`
  color: #ffffff;
  margin-top: 560;
  align-items: center;
  font-size: 19;
  font-family: Kanit-Regular;
  width: ${windowWidth * 0.52};
  height: ${windowHeight * 0.04};
`;

const Text2 = styled.Text`
  color: #ffffff;
  font-family: Kanit-Regular;
  font-size: 19;
`;

const ArrowImg = styled.Image`
  margin-top: 15;
  width: ${windowWidth * 0.24};
  height: ${windowHeight * 0.06};
`;

export default AboutScreen;
