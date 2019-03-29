import { StyleSheet } from 'react-native';
import GlobalVars from 'ChickyShop/src/GlobalVars';

/* Main style */
export const MainStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#e3e7ed'
    },
    Header: {
        flex: 0.1,
    },
    MainForm: {
        flex: 0.9,
    },
});

/* Header style */
export const HeaderStyle = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: GlobalVars.appColor,
    },
    HeaderLeft: {
        flex: 0.1
    },
    HeaderRight: {
        flex: 0.1
    },
    HeaderCenter: {
        flex: 0.8,
        justifyContent: 'center',
    },
    HeaderTitle: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
});

export const ItemStyle = StyleSheet.create({
    Container: {
        flex: 0.25,
        margin: 5,
        padding: 5,
        backgroundColor: 'white'
    },
    Row: {
        flex: 0.25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    LeftContent: {
        flex: 0.5,
        textAlign: 'left',

    },
    RightContent: {
        flex: 0.5,
        textAlign: 'right'
    }
});
