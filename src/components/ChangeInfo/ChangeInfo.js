import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MainStyle } from './styles';
import GlobalVars from 'ChickyShop/src/GlobalVars';

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View
                style={MainStyle.Container}
            >
                <View style={MainStyle.Header}>
                    <View style={MainStyle.HeaderLeft}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MAIN')}
                        >
                            <Image source={GlobalVars.BackIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={MainStyle.HeaderCenter}>
                        <Text style={MainStyle.HeaderTitle}>
                            User Information
                        </Text>
                    </View>
                    <View style={MainStyle.HeaderRight}>
                        <Image source={GlobalVars.appLogo} />
                    </View>
                </View>
                <ScrollView style={MainStyle.MainForm}>
                    <TextInput
                        style={MainStyle.Input}
                        placeholder='Enter your name'
                    />
                    <TextInput
                        style={MainStyle.Input}
                        placeholder='Enter your address'
                    />
                    <TextInput
                        style={MainStyle.Input}
                        placeholder='Enter your phone'
                    />
                    <TouchableOpacity style={MainStyle.Button}>
                        <Text style={MainStyle.ButtonTitle}>
                            CHANGE YOUR INFORMATION
                    </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
