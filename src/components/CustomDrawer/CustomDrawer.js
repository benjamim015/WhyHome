import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import styled from 'styled-components';

import PeopleImg from '../../assets/loginscreenpeople.png';
import logoIcon from '../../assets/logo.png';
import ListIcon from '../../assets/listIcon.png';
import InfoIcon from '../../assets/infoIcon.png';
import PeopleIcon from '../../assets/peopleIcon.png';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const CustomDrawer = ({ email, name, token, navigation, ...props }) => {
  const [whyHomeIsFocused, setWhyHomeIsFocused] = useState(false);
  const [myListFocused, setMyListFocused] = useState(false);
  const [aboutIsFocused, setAboutIsFocused] = useState(false);
  const [accountIsFocused, setAccountIsFocused] = useState(false);

  const index = props.state.index;

  useEffect(() => {
    index == '0'
      ? setWhyHomeIsFocused(true) &
        setMyListFocused(false) &
        setAccountIsFocused(false) &
        setAboutIsFocused(false)
      : index == '1'
      ? setMyListFocused(true) &
        setWhyHomeIsFocused(false) &
        setAccountIsFocused(false) &
        setAboutIsFocused(false)
      : index == '2'
      ? setAccountIsFocused(true) &
        setWhyHomeIsFocused(false) &
        setMyListFocused(false) &
        setAboutIsFocused(false)
      : setAboutIsFocused(true) &
        setAccountIsFocused(false) &
        setWhyHomeIsFocused(false) &
        setMyListFocused(false);
  }, [index]);

  const WhyHomeText = styled.Text`
    color: ${whyHomeIsFocused ? '#06a2cc' : '#000000'};
    font-size: 20;
    margin-left: 10;
    font-family: Kanit-Regular;
  `;

  const MyListText = styled.Text`
    color: ${myListFocused ? '#06a2cc' : '#000000'};
    font-size: 20;
    margin-left: 10;
    font-family: Kanit-Regular;
  `;

  const AccoutText = styled.Text`
    color: ${accountIsFocused ? '#06a2cc' : '#000000'};
    font-size: 20;
    margin-left: 10;
    font-family: Kanit-Regular;
  `;

  const AboutText = styled.Text`
    color: ${aboutIsFocused ? '#06a2cc' : '#000000'};
    font-size: 20;
    margin-left: 10;
    font-family: Kanit-Regular;
  `;

  return (
    <DrawerContentScrollView {...props}>
      <StyledView>
        <BackgroundImage>
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <StyledImage source={PeopleImg} />
            <UserName>{name}</UserName>
          </View>
        </BackgroundImage>
        <ScreensContainerView>
          <ScreensButton
            onPress={() => {
              navigation.navigate('WhyHome');
            }}>
            <LogoIconImage source={logoIcon} />
            <WhyHomeText>WhyHome</WhyHomeText>
          </ScreensButton>
          <ScreensButton
            onPress={() => {
              navigation.navigate('MyListScreen', { email, token });
            }}>
            <ListIconImage
              tintColor={myListFocused ? '#06a2cc' : '#000000'}
              source={ListIcon}
            />
            <MyListText>Minha Lista</MyListText>
          </ScreensButton>
          <ScreensButton
            onPress={() => {
              navigation.navigate('AccountScreen', { email, name });
            }}>
            <AccountIconImage
              tintColor={accountIsFocused ? '#06a2cc' : '#000000'}
              source={PeopleIcon}
            />
            <AccoutText>Conta</AccoutText>
          </ScreensButton>
          <ScreensButton
            onPress={() => {
              navigation.navigate('AboutScreen', { email });
            }}>
            <AboutIconImage
              tintColor={aboutIsFocused ? '#06a2cc' : '#000000'}
              source={InfoIcon}
            />
            <AboutText>Sobre</AboutText>
          </ScreensButton>
        </ScreensContainerView>
      </StyledView>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.View`
  background-color: rgba(6, 162, 204, 1);
  width: 100%;
  height: 270;
  margin-top: -20;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: ${larguraDaTela * 0.4};
  height: ${alturaDaTela * 0.2};
  margin-top: 10;
`;

const UserName = styled.Text`
  color: #000000;
  font-size: 30;
  font-family: Kanit-Regular;
`;

const ScreensContainerView = styled.View`
  width: 90%;
`;

const ScreensButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  width: 100%;
  height: 40;
  margin-top: 10;
  border-radius: 10;
  flex-direction: row;
  border-bottom-width: 0.4;
  border-bottom-color: rgba(6, 162, 204, 1);
`;

const LogoIconImage = styled.Image`
  margin-left: 10;
  width: 30;
  height: 13;
`;

const ListIconImage = styled.Image`
  margin-left: 10;
  width: 30;
  height: 25;
`;

const AccountIconImage = styled.Image`
  margin-left: 10;
  width: 30;
  height: 25;
`;

const AboutIconImage = styled.Image`
  margin-left: 10;
  width: 30;
  height: 30;
`;
