import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import Menu from 'ChickyShop/src/components/Main/Menu/Menu';
import TabContainer from 'ChickyShop/src/Navigators/TabNavigator';
import Main from 'ChickyShop/src/components/Main/Main';

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
        contentComponent: ({ navigation }) => <Menu navigation={navigation} />
    }
);

export default DrawerNavigator;
