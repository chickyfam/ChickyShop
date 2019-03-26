import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const styles = require('ChickyShop/src/styles');
const CollectionImage = require('ChickyShop/media/images/banner.jpg');

export default class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.Collection.Container}>
                <View style={styles.Collection.Title}>
                    <Text style={{ fontSize: 16 }}>SPRING COLLECTION</Text>
                </View>
                <View style={styles.Collection.ImageContainer}>
                    <Image
                        style={styles.Collection.Image}
                        source={CollectionImage}
                        resizeMode='contain'
                    />
                </View>
            </View>
        );
    }
}
