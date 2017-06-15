import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { getData } from '../actions';

import {
  StackNavigator,
} from 'react-navigation';

import Maps from './Maps';

const App = StackNavigator(
  {
    Maps    : { screen: Maps },
  },
  {
    headerMode: 'none',
  },
)

export default App;
