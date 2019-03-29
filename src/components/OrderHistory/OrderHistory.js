import React, { Component } from 'react';
import { View } from 'react-native';
import OrderItem from './OrderItem';
import Header from './Header';

import { MainStyle } from './styles';

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={MainStyle.Container}>
                <View style={MainStyle.Header}>
                    <Header navigation={this.props.navigation} />
                </View>
                <View style={MainStyle.MainForm}>
                    <OrderItem
                        ID={1}
                        Time={'2019'}
                        Status={'Pending'}
                        Price={'123'}
                    />
                    <OrderItem
                        ID={2}
                        Time={'2018'}
                        Status={'Done'}
                        Price={'456'}
                    />
                </View>
            </View>
        );
    }
}
