import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';

const styles = require('ChickyShop/src/styles');
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
                    buttonStyle={styles.Menu.Button}
                    title="Change Info"
                    titleStyle={{ color: styles.appColor }}
                    onPress={() => this.props.navigation.navigate('CHANGE_INFO')}
                />
                <Button
                    buttonStyle={styles.Menu.Button}
                    title="Order History"
                    titleStyle={{ textAlign: 'left', color: styles.appColor }}
                    onPress={() => this.props.navigation.navigate('ORDER_HISTORY')}
                />
                <Button
                    buttonStyle={styles.Menu.Button}
                    title="Log Out"
                    titleStyle={{ color: styles.appColor }}
                    onPress={() => this.props.navigation.navigate('AUTHENTICATION')}
                />
            </View>
        );

        const UnsignedForm = (
            <View>
                <Button
                    buttonStyle={styles.Menu.Button}
                    title="Sign In"
                    titleStyle={{ color: styles.appColor }}
                    onPress={() => this.props.navigation.navigate('AUTHENTICATION')}
                />
            </View>
        );

        const ButtonForm = this.state.isLoggedIn ? SingedForm : UnsignedForm;
        const profileName = this.state.isLoggedIn ? this.state.profileName : '';

        return (
            <View style={styles.Menu.Container}>
                <View style={styles.Menu.Profile}>
                    <Image
                        style={styles.Menu.ProfilePicture}
                        source={ProfileIcon}
                        resizeMode='contain'
                    />
                    <Text style={styles.Menu.ProfileName}>{ profileName }</Text>
                </View>
                <View style={styles.Menu.ButtonContainer}>
                    { ButtonForm }
                </View>
            </View>
        );
    }
}
