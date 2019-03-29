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
                <View style={HeaderStyle.HeaderLeft}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('MAIN')}
                    >
                        <Image source={GlobalVars.BackIcon} />
                    </TouchableOpacity>
                </View>
                <View style={HeaderStyle.HeaderCenter}>
                    <Text style={HeaderStyle.HeaderTitle}>
                        Order History
                    </Text>
                </View>
                <View style={HeaderStyle.HeaderRight}>
                    <Image source={GlobalVars.appLogo} />
                </View>
            </View>
        );
    }
}
