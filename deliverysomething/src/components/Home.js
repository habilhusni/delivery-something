import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Container, Content, Button } from 'native-base';

export default class buttonExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button>
            <Text>Click me! </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
