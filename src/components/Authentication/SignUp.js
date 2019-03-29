import React, { Component } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { MainFormStyle } from './styles';

export default class SignUp extends Component {
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
                    placeholder='Enter your name'
                />
                <TextInput
                    style={MainFormStyle.Input}
                    placeholder='Enter your email'
                />
                <TextInput
                    style={MainFormStyle.Input}
                    placeholder='Enter your password'
                    secureTextEntry
                />
                <TextInput
                    style={MainFormStyle.Input}
                    placeholder='Re-enter your password'
                    secureTextEntry
                />
                <TouchableOpacity style={MainFormStyle.Button}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>
                        SIGN UP NOW
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
