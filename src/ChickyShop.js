/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
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
