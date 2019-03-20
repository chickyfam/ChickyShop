import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

const styles = require('ChickyShop/src/styles');
const MenuIcon = require('ChickyShop/media/icons/menu.png');
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
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Image
                                source={MenuIcon}
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
                <View style={styles.Header.Bottom}>
                    <TextInput
                        style={styles.Header.Search}
                        placeholder='What do you want to buy?'
                    />
                </View>
            </View>
        );
    }
}
