import { StyleSheet } from 'react-native';
import GlobalVars from 'ChickyShop/src/GlobalVars';

/* Main style */
export const MenuStyle = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        backgroundColor: GlobalVars.appColor,
    },
    Profile: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProfilePicture: {
        flex: 0.9,
        borderRadius: 300
    },
    ProfileName: {
        flex: 0.1,
        marginTop: 10,
        textAlign: 'center',
        color: 'white'
    },
    ButtonContainer: {
        flex: 0.7,
        paddingTop: 10,
    },
    Button: {
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'white',
    }
});
