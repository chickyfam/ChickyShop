import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const styles = require('ChickyShop/src/styles');

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.Product.Container}>
                <View style={styles.Product.Image}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={this.props.link}
                    resizeMode='contain'
                />
                </View>
                <View style={styles.Product.Info}>
                    <Text style={styles.Product.Name}>{this.props.Name}</Text>
                    <Text style={styles.Product.Price}>{this.props.Price}$</Text>
                </View>
            </View>
        );
    }
}
