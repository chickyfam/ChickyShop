import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { MenuStyle } from './styles';
import GlobalVars from 'ChickyShop/src/GlobalVars';

const ProfileIcon = require('ChickyShop/media/icons/profile.png');

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            profileName: 'Chicky Shop'
        };
    }

    render() {
        const SingedForm = (
            <View>
                <Button
                    buttonStyle={MenuStyle.Button}
                    title="Change Info"
                    titleStyle={{ color: GlobalVars.appColor }}
                    onPress={() => this.props.navigation.navigate('CHANGE_INFO')}
                />
                <Button
                    buttonStyle={MenuStyle.Button}
                    title="Order History"
                    titleStyle={{ textAlign: 'left', color: GlobalVars.appColor }}
                    onPress={() => this.props.navigation.navigate('ORDER_HISTORY')}
                />
                <Button
                    buttonStyle={MenuStyle.Button}
                    title="Log Out"
                    titleStyle={{ color: GlobalVars.appColor }}
                    onPress={() => this.props.navigation.navigate('AUTHENTICATION')}
                />
            </View>
        );

        const UnsignedForm = (
            <View>
                <Button
                    buttonStyle={MenuStyle.Button}
                    title="Sign In"
                    titleStyle={{ color: GlobalVars.appColor }}
                    onPress={() => this.props.navigation.navigate('AUTHENTICATION')}
                />
            </View>
        );

        const ButtonForm = this.state.isLoggedIn ? SingedForm : UnsignedForm;
        const profileName = this.state.isLoggedIn ? this.state.profileName : '';

        return (
            <View style={MenuStyle.Container}>
                <View style={MenuStyle.Profile}>
                    <Image
                        style={MenuStyle.ProfilePicture}
                        source={ProfileIcon}
                        resizeMode='contain'
                    />
                    <Text style={MenuStyle.ProfileName}>{ profileName }</Text>
                </View>
                <View style={MenuStyle.ButtonContainer}>
                    { ButtonForm }
                </View>
            </View>
        );
    }
}
