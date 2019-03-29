import { StyleSheet } from 'react-native';
import GlobalVars from 'ChickyShop/src/GlobalVars';

/* Authentication style */
export const AuthStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: GlobalVars.appColor
    },
    Header: {
        flex: 0.05,
        paddingTop: 20,
    },
    MainForm: {
        flex: 0.8,
    },
    Footer: {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

/* Header style */
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
    Left: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 0.15,
    },
    Right: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    Center: {
        justifyContent: 'center',
        flex: 0.7,
    },
    Slogan: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
});

/* Main form style */
export const MainFormStyle = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 30,
        padding: 30,
    },
    Input: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        paddingLeft: 20,
    },
    Button: {
        margin: 10,
        marginBottom: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
    }
});

/* Footer style */
export const FooterStyle = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SignIn: {
        backgroundColor: 'white',
        marginRight: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 40,
        paddingRight: 40,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    SignUp: {
        backgroundColor: 'white',
        marginLeft: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 40,
        paddingRight: 40,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
});
