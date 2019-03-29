import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Footer from './Footer';
import { AuthStyle } from './styles';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }

    changeState() {
        this.setState({
            isSignIn: !this.state.isSignIn
        });
    }

    render() {
        const MainForm = this.state.isSignIn ? <SignIn /> : <SignUp />;

        return (
            <View style={AuthStyle.Container}>
                <View style={AuthStyle.Header}>
                    <Header navigation={this.props.navigation} />
                </View>
                <View style={AuthStyle.MainForm}>
                    { MainForm }
                </View>
                <View style={AuthStyle.Footer}>
                    <Footer
                        changeState={() => this.changeState()}
                        state={this.state.isSignIn}
                    />
                </View>
            </View>
        );
    }
}
