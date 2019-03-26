import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from 'ChickyShop/src/components/Authentication/Header';

import SignIn from 'ChickyShop/src/components/Authentication/SignIn';
import SignUp from 'ChickyShop/src/components/Authentication/SignUp';

const styles = require('ChickyShop/src/styles');

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }

    render() {
        const MainForm = this.state.isSignIn ? <SignIn /> : <SignUp />;

        return (
            <View style={styles.Authentication.Container}>
                <View style={styles.Authentication.Header}>
                    <Header navigation={this.props.navigation} />
                </View>
                <View style={styles.Authentication.MainForm}>
                    {MainForm}
                </View>
                <View style={styles.Authentication.Footer}>
                    <TouchableOpacity
                        style={styles.Authentication.SignIn}
                        disabled={this.state.isSignIn}
                        onPress={() => this.setState({ isSignIn: true })}
                    >
                        <Text
                            style={{ color: this.state.isSignIn ? styles.appColor : 'lightgrey' }}
                        >
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.Authentication.SignUp}
                        disabled={!this.state.isSignIn}
                        onPress={() => this.setState({ isSignIn: false })}
                    >
                        <Text
                            style={{ color: this.state.isSignIn ? 'lightgrey' : styles.appColor }}
                        >
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
