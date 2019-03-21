import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const HomeIcon = require('ChickyShop/media/icons/home.png');
const HomeSelectedICon = require('ChickyShop/media/icons/home-selected.png');

export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: ({ focused }) => <Image source={focused ? HomeSelectedICon : HomeIcon} />,
      };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> Home </Text>
            </View>
        );
    }
}
