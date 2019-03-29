import { StyleSheet } from 'react-native';
import GlobalVars from 'ChickyShop/src/GlobalVars';

/* Change Information style */
export const MainStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#e3e7ed'
    },
    Header: {
        flex: 0.1,
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
    MainForm: {
        flex: 0.9,
        padding: 20,
        // justifyContent: 'center',
    },
    Input: {
        marginBottom: 10,
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: GlobalVars.appColor,
        backgroundColor: 'white'
    },
    Button: {
        marginTop: 10,
        padding: 10,
        backgroundColor: GlobalVars.appColor,
        borderRadius: 20,
    },
    ButtonTitle: {
        color: 'white',
        textAlign: 'center',
    }
});
