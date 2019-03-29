import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ItemStyle } from './styles';
import GlobalVars from 'ChickyShop/src/GlobalVars';

export default class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={ItemStyle.Container}>
                <View style={ItemStyle.Row}>
                    <View style={ItemStyle.LeftContent}>
                        <Text>Order ID:</Text>
                    </View>
                    <View style={ItemStyle.RightContent}>
                        <Text style={{ textAlign: 'right', color: GlobalVars.appColor }}>
                            ORD{this.props.ID}
                        </Text>
                    </View>
                </View>
                <View style={ItemStyle.Row}>
                    <View style={ItemStyle.LeftContent}>
                        <Text>Order time:</Text>
                    </View>
                    <View style={ItemStyle.RightContent}>
                        <Text style={{ textAlign: 'right', color: '#ad3973' }}>
                            {this.props.Time}
                        </Text>
                    </View>
                </View>
                <View style={ItemStyle.Row}>
                    <View style={ItemStyle.LeftContent}>
                        <Text>Status:</Text>
                    </View>
                    <View style={ItemStyle.RightContent}>
                        <Text style={{ textAlign: 'right', color: GlobalVars.appColor }}>
                            {this.props.Status}
                        </Text>
                    </View>
                </View>
                <View style={ItemStyle.Row}>
                    <View style={ItemStyle.LeftContent}>
                        <Text>Total:</Text>
                    </View>
                    <View style={ItemStyle.RightContent}>
                        <Text style={{ textAlign: 'right', color: '#ad3973', fontWeight: 'bold' }}>
                            {this.props.Price}$
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

