import React from 'react';
import { Text, View, ImageBackground, Image, Dimensions } from 'react-native';
import WSBackground from '../assets/welcomescreen.png';
import WSLogo from '../assets/logo.png';
import styled from 'styled-components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AboutScreen = ({ navigation }) => {
  return <Text>SOBRE</Text>;
};

export default AboutScreen;
