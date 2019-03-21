import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const SearchIcon = require('ChickyShop/media/icons/search.png');
const SearchSelectedICon = require('ChickyShop/media/icons/search-selected.png');

export default class Search extends Component {
    static navigationOptions = {
        tabBarIcon: ({ focused }) => <Image source={focused ? SearchSelectedICon : SearchIcon} />,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> Search </Text>
            </View>
        );
    }
}
