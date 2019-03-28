import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = require('ChickyShop/src/styles');

export default class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.OrderItem.Container}>
                <View style={styles.OrderItem.Row}>
                    <View style={styles.OrderItem.LeftContent}>
                        <Text>Order ID:</Text>
                    </View>
                    <View style={styles.OrderItem.RightContent}>
                        <Text style={{ textAlign: 'right', color: styles.appColor }}>
                            ORD01
                        </Text>
                    </View>
                </View>
                <View style={styles.OrderItem.Row}>
                    <View style={styles.OrderItem.LeftContent}>
                        <Text>Order time:</Text>
                    </View>
                    <View style={styles.OrderItem.RightContent}>
                        <Text style={{ textAlign: 'right', color: '#ad3973' }}>
                            2019
                        </Text>
                    </View>
                </View>
                <View style={styles.OrderItem.Row}>
                    <View style={styles.OrderItem.LeftContent}>
                        <Text>Status:</Text>
                    </View>
                    <View style={styles.OrderItem.RightContent}>
                        <Text style={{ textAlign: 'right', color: styles.appColor }}>
                            Pending
                        </Text>
                    </View>
                </View>
                <View style={styles.OrderItem.Row}>
                    <View style={styles.OrderItem.LeftContent}>
                        <Text>Total:</Text>
                    </View>
                    <View style={styles.OrderItem.RightContent}>
                        <Text style={{ textAlign: 'right', color: '#ad3973', fontWeight: 'bold' }}>
                            123$
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

