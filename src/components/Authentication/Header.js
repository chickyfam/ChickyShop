import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { HeaderStyle } from './styles';
import GlobalVars from 'ChickyShop/src/GlobalVars';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={HeaderStyle.Container}>
                <View style={HeaderStyle.Top}>
                    <View style={HeaderStyle.Left}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MAIN')}
                        >
                            <Image source={GlobalVars.BackIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={HeaderStyle.Center}>
                        <Text style={HeaderStyle.Slogan}>
                            {GlobalVars.appSlogan}
                        </Text>
                    </View>
                    <View style={HeaderStyle.Right}>
                        <Image source={GlobalVars.appLogo} />
                    </View>
                </View>
            </View>
        );
    }
}
