import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const styles = require('ChickyShop/src/styles');
const maxi = require('ChickyShop/media/images/maxi.jpg');
const midi = require('ChickyShop/media/images/midi.jpg');
const little = require('ChickyShop/media/images/little.jpg');

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.Category.Container}>
                <View style={styles.Category.Title}>
                    <Text style={{ fontSize: 16 }}>CATEGORY</Text>
                </View>
                <Swiper
                    style={styles.Category.Slider}
                    autoplay
                    autoplayTimeout={5}
                >
                    <View style={styles.Category.ImageContainer}>
                        <ImageBackground
                            style={styles.Category.Image}
                            source={maxi}
                            resizeMode='contain'
                        >
                            <Text>MAXI DRESS</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.Category.ImageContainer}>
                        <ImageBackground
                            style={styles.Category.Image}
                            source={midi}
                            resizeMode='contain'
                        >
                            <Text>MIDI DRESS</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.Category.ImageContainer}>
                        <ImageBackground
                            style={styles.Category.Image}
                            source={little}
                            resizeMode='contain'
                        >
                            <Text>LITTLE DRESS</Text>
                        </ImageBackground>
                    </View>
                </Swiper>
            </View >
        );
    }
}
