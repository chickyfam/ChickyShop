import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

var styles = require('ChickyShop/src/styles');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.Header.Container}>
                <View style={styles.Header.HeaderLeft}>
                    <Button
                        title='Menu'
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                </View>
                <View style={styles.Header.HeaderCenter}>
                    <Text>Header Center</Text>
                </View>
                <View style={styles.Header.HeaderRight}>
                    <Text>Header Right</Text>
                </View>
            </View>
        );
    }
}
