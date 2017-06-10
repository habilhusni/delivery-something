import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './Home';
import Maps from './Maps';

const App = StackNavigator(
  {
    Home : { screen: Home },
    Maps : { screen: Maps },
  },
  {
    headerMode: 'none',
  },
)

export default App;
