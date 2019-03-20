import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> Menu </Text>
                <Button
                    title="Authentication"
                    onPress={() => this.props.navigation.navigate('AUTHENTICATION')}
                />
            </View>
        );
    }
}
