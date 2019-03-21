import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const CartIcon = require('ChickyShop/media/icons/cart.png');
const CartSelectedICon = require('ChickyShop/media/icons/cart-selected.png');

export default class Cart extends Component {
    static navigationOptions = {
        tabBarIcon: ({ focused }) => <Image source={focused ? CartSelectedICon : CartIcon} />,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> Cart </Text>
            </View>
        );
    }
}
