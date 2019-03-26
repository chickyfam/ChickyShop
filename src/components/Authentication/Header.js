import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

const styles = require('ChickyShop/src/styles');
const BackIcon = require('ChickyShop/media/icons/back.png');
const LogoIcon = require('ChickyShop/media/icons/logo.png');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.Header.Container}>
                <View style={styles.Header.Top}>
                    <View style={styles.Header.HeaderLeft}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MAIN')}
                        >
                            <Image
                                source={BackIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Header.HeaderCenter}>
                        <Text style={styles.Header.Slogan}>{styles.Slogan}</Text>
                    </View>
                    <View style={styles.Header.HeaderRight}>
                        <Image source={LogoIcon}/>
                    </View>
                </View>
            </View>
        );
    }
}
