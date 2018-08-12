import React, { Component } from "react";
import { Text } from "react-native";

import { Container, Content, Button } from "native-base";

export default class buttonExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content>
          <Button onPress={() => navigate("Maps")}>
            <Text>Go to Maps</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
