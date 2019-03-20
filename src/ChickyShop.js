import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppContainer from 'ChickyShop/src/Navigators/InitialNavigator';

export default class ChickyShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <AppContainer />
    );
  }
}
