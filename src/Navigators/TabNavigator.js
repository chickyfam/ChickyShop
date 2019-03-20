import React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Home from 'ChickyShop/src/components/Main/Shop/Home/Home';
import Cart from 'ChickyShop/src/components/Main/Shop/Cart/Cart';
import Search from 'ChickyShop/src/components/Main/Shop/Search/Search';
import Contact from 'ChickyShop/src/components/Main/Shop/Contact/Contact';
import Header from 'ChickyShop/src/components/Main/Header';

const styles = require('ChickyShop/src/styles');

const { height } = Dimensions.get('window');

const TabNavigator = createBottomTabNavigator({
    HOME: {
        screen: Home
    },
    CART: {
        screen: Cart
    },
    SEARCH: {
        screen: Search
    },
    CONTACT: {
        screen: Contact
    }
});

const StackContainer = createStackNavigator(
    {
        TAB: {
            screen: TabNavigator,
            navigationOptions: (props) => ({
                headerTitle: <Header navigation={props.navigation} />,
                headerStyle: {
                    backgroundColor: styles.appColor,
                    height: height * 0.13,
                }
            })
        },
    }
);

const TabContainer = createAppContainer(StackContainer);
export default TabContainer;
