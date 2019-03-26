import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import Collection from 'ChickyShop/src/components/Main/Shop/Home/Collection/Collection';
import Category from 'ChickyShop/src/components/Main/Shop/Home/Category/Category';
import TopProduct from 'ChickyShop/src/components/Main/Shop/Home/TopProduct/TopProduct';

const styles = require('ChickyShop/src/styles');

const HomeIcon = require('ChickyShop/media/icons/home.png');
const HomeSelectedICon = require('ChickyShop/media/icons/home-selected.png');

export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: ({ focused }) => <Image source={focused ? HomeSelectedICon : HomeIcon} />,
      };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={styles.Home.Container}>
                <View style={styles.Home.Collection}>
                    <Collection />
                </View>
                <View style={styles.Home.Category}>
                    <Category />
                </View>
                <View style={styles.Home.TopProduct}>
                    <TopProduct />
                </View>
            </ScrollView>
        );
    }
}
