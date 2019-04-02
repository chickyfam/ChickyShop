import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import GlobalVars from 'ChickyShop/src/GlobalVars';
import { HeaderStyle } from './styles';

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
                    <View style={HeaderStyle.HeaderLeft}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Image
                                source={GlobalVars.MenuIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={HeaderStyle.HeaderCenter}>
                        <Text style={HeaderStyle.Slogan}>{GlobalVars.appSlogan}</Text>
                    </View>
                    <View style={HeaderStyle.HeaderRight}>
                        <Image source={GlobalVars.appLogo} />
                    </View>
                </View>
                <View style={HeaderStyle.Bottom}>
                    <TextInput
                        style={HeaderStyle.Search}
                        placeholder='What do you want to buy?'
                    />
                </View>
            </View>
        );
    }
}
