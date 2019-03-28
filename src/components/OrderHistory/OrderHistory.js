import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import OrderItem from './OrderItem';
import Header from './Header';

const styles = require('ChickyShop/src/styles');

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.OrderHistory.Container}>
                <View style={styles.OrderHistory.HeaderContainer}>
                    <Header navigation={this.props.navigation} />
                </View>
                <View style={styles.OrderHistory.MainForm}>
                    <OrderItem />
                    <OrderItem />
                </View>
            </View>
        );
    }
}
