import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SeriesScreen from './src/screens/SeriesScreen';
import SeriesCardInfoScreen from './src/screens/SeriesCardInfoScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import MusicsScreen from './src/screens/MusicsScreen';
import AccountScreen from './src/screens/AccountScreen';
import AboutScreen from './src/screens/AboutScreen';

import store from './src/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WhyHome"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SeriesScreen"
              component={SeriesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SeriesCardInfoScreen"
              component={SeriesCardInfoScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MoviesScreen"
              component={MoviesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MusicsScreen"
              component={MusicsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecipesScreen"
              component={RecipesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutScreen"
              component={AboutScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountScreen"
              component={AccountScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
