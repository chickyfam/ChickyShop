import { StyleSheet } from 'react-native';

export const appColor = '#3498db';

export const Header = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'stretch',
        // justifyContent: 'center',
        backgroundColor: appColor
    },
    HeaderLeft: {
        flex: 0.15,
        borderWidth: 1,
    },
    HeaderRight: {
        flex: 0.15,
        borderWidth: 1,
    },
    HeaderCenter: {
        flex: 0.7,
        borderWidth: 1
    }
});
