import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import styled from 'styled-components';

import HomeCard from '../components/HomeCard';
import CustomDrawer from '../components/CustomDrawer';
import MyListScreen from './MyListScreen';
import AccountScreen from './AccountScreen';
import AboutScreen from './AboutScreen';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

const Drawer = createDrawerNavigator();

const HomeScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const { name } = route.params;
  const { token } = route.params;

  const ThisScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <StyledView>
          <StyledScrollView
            showsVerticalScrollIndicator={false}></StyledScrollView>
        </StyledView>
        <StyledView2>
          <StyledScrollView2
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <HomeCard title="séries"></HomeCard>
            <HomeCard title="filmes"></HomeCard>
            <HomeCard title="músicas"></HomeCard>
            <HomeCard title="receitas"></HomeCard>
          </StyledScrollView2>
        </StyledView2>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'purple',
      }}
      drawerStyle={{ width: '60%' }}
      drawerContent={(props) => (
        <CustomDrawer email={email} name={name} token={token} {...props} />
      )}>
      <Drawer.Screen name="WhyHome" component={ThisScreen} />
      <Drawer.Screen name="MyListScreen" component={MyListScreen} />
      <Drawer.Screen name="AccountScreen" component={AccountScreen} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;

const StyledView = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10;
`;

const StyledScrollView = styled.ScrollView`
  background-color: #0f1218;
  max-height: ${alturaDaTela * 0.07};
  height: ${alturaDaTela * 0.07};
  border-radius: 15;
  margin-top: 35;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  height: ${alturaDaTela * 0.07};
  width: ${larguraDaTela * 0.5};
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: white;
  font-family: Kanit-Regular;
  font-size: 25;
`;

const StyledView2 = styled.View`
  width: ${larguraDaTela};
  height: ${alturaDaTela * 0.7};
`;

const StyledScrollView2 = styled.ScrollView`
  flex: 1;
`;
