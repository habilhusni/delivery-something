import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from './src/store';
import App from './src/components';

export default class deliverysomething extends Component {
  render() {
    return (
      <Provider>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('deliverysomething', () => deliverysomething);
