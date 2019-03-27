import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const styles = require('ChickyShop/src/styles');
const BackIcon = require('ChickyShop/media/icons/back.png');
const Logo = require('ChickyShop/media/icons/logo.png');

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: 'Nghia Truong',
            Address: 'Ho Chi Minh City',
            Phone: '0939813969'
        };
    }

    render() {
        return (
            <ScrollView
                style={styles.ChangeInfo.Container}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View style={styles.ChangeInfo.Header}>
                    <View style={styles.ChangeInfo.HeaderLeft}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MAIN')}
                        >
                            <Image source={BackIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ChangeInfo.HeaderCenter}>
                        <Text style={styles.ChangeInfo.HeaderTitle}>
                            User Information
                        </Text>
                    </View>
                    <View style={styles.ChangeInfo.HeaderRight}>
                        <Image source={Logo} />
                    </View>
                </View>
                <View style={styles.ChangeInfo.MainForm}>
                    <TextInput
                        style={styles.ChangeInfo.Input}
                        placeholder='Enter your name'
                    />
                    <TextInput
                        style={styles.ChangeInfo.Input}
                        placeholder='Enter your address'
                    />
                    <TextInput
                        style={styles.ChangeInfo.Input}
                        placeholder='Enter your phone'
                    />
                    <TouchableOpacity style={styles.ChangeInfo.Button}>
                        <Text style={styles.ChangeInfo.ButtonTitle}>
                            CHANGE YOUR INFORMATION
                    </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
