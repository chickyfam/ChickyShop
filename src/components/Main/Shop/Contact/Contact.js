import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const ContactIcon = require('ChickyShop/media/icons/contact.png');
const ContactSelectedICon = require('ChickyShop/media/icons/contact-selected.png');

export default class Contact extends Component {
    static navigationOptions = {
        tabBarIcon: ({ focused }) => <Image source={focused ? ContactSelectedICon : ContactIcon} />,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> Contact </Text>
            </View>
        );
    }
}
