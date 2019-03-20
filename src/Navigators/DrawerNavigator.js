import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import Menu from 'ChickyShop/src/components/Main/Menu/Menu';
import TabContainer from 'ChickyShop/src/Navigators/TabNavigator';

const { width } = Dimensions.get('window');

const DrawerNavigator = createDrawerNavigator(
    {
        MAIN: {
            screen: TabContainer,
        },
        MENU: {
            screen: Menu
        }
    },
    {
        contentComponent: ({ navigation }) => <Menu navigation={navigation} />,
        drawerWidth: width / 2
    }
);

export default DrawerNavigator;
