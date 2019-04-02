import { StyleSheet } from 'react-native';
import GlobalVars from 'ChickyShop/src/GlobalVars';

export const HeaderStyle = StyleSheet.create({
    Container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: GlobalVars.appColor
    },
    Top: {
        flex: 0.6,
        flexDirection: 'row',
    },
    Bottom: {
        flex: 0.4,
    },
    HeaderLeft: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 0.15,
    },
    HeaderRight: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    HeaderCenter: {
        justifyContent: 'center',
        flex: 0.7,
    },
    Slogan: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    Search: {
        backgroundColor: 'white',
        fontSize: 9,
        paddingLeft: 10,
    }
});
