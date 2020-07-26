import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import styled from 'styled-components';

const larguraDaTela = Dimensions.get('window').width;
const alturaDaTela = Dimensions.get('window').height;

function HomeScreen() {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        height: '90%',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 30,
      }}>
      <Text>Home!</Text>
    </TouchableOpacity>
  );
}

function SettingsScreen() {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        height: '90%',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 30,
      }}>
      <Text>Settings!</Text>
    </TouchableOpacity>
  );
}

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <>
      <StyledView>
        <StyledScrollView showsVerticalScrollIndicator={false}>
          <StyledTouchableOpacity>
            <StyledText>INÍCIO</StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity>
            <StyledText>CONTA</StyledText>
          </StyledTouchableOpacity>
        </StyledScrollView>
      </StyledView>
      <Tab.Navigator
        tabBarOptions={{
          style: { height: 0 },
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settungs" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

const StyledView = styled.View`
  /* background-color: black; */
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
