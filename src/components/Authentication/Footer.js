import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalVars from 'ChickyShop/src/GlobalVars';
import { FooterStyle } from './styles';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: this.props.state
        };
    }

    changeState(state) {
        this.props.changeState(state);
        this.setState({
            isSignIn: state
        });
    }

    render() {
        return (
            <View style={FooterStyle.Container}>
                <TouchableOpacity
                    style={FooterStyle.SignIn}
                    disabled={this.state.isSignIn}
                    onPress={() => this.changeState(true)}
                >
                    <Text
                        style={{ color: this.state.isSignIn ? GlobalVars.appColor : 'lightgrey' }}
                    >
                        SIGN IN
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={FooterStyle.SignUp}
                    disabled={!this.state.isSignIn}
                    onPress={() => this.changeState(false)}
                >
                    <Text
                        style={{ color: this.state.isSignIn ? 'lightgrey' : GlobalVars.appColor }}
                    >
                        SIGN UP
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
