import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const styles = require('ChickyShop/src/styles');
const BackIcon = require('ChickyShop/media/icons/back.png');
const Logo = require('ChickyShop/media/icons/logo.png');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.OrderHistory.Header}>
                <View style={styles.OrderHistory.HeaderLeft}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('MAIN')}
                    >
                        <Image source={BackIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.OrderHistory.HeaderCenter}>
                    <Text style={styles.OrderHistory.HeaderTitle}>
                        Order History
                    </Text>
                </View>
                <View style={styles.OrderHistory.HeaderRight}>
                    <Image source={Logo} />
                </View>
            </View>
        );
    }
}
