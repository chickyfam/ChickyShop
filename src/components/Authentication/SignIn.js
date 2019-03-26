import React, { Component } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';

const styles = require('ChickyShop/src/styles');

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={styles.SignIn.Container}>
                <TextInput
                    style={styles.SignIn.Input}
                    placeholder='Enter your email'
                />
                <TextInput
                    style={styles.SignIn.Input}
                    placeholder='Enter your password'
                    secureTextEntry
                />
                <TouchableOpacity style={styles.SignIn.Button}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>
                        SIGN IN NOW
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
