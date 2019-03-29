import React, { Component } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { MainFormStyle } from './styles';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={MainFormStyle.Container}>
                <TextInput
                    style={MainFormStyle.Input}
                    placeholder='Enter your email'
                />
                <TextInput
                    style={MainFormStyle.Input}
                    placeholder='Enter your password'
                    secureTextEntry
                />
                <TouchableOpacity style={MainFormStyle.Button}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>
                        SIGN IN NOW
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
