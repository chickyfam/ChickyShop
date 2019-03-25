import { StyleSheet } from 'react-native';

export const appColor = '#2ABB9C';
export const Slogan = 'Chicky Fashion Shop';

export const Header = StyleSheet.create({
    Container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: appColor
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

export const Menu = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor,
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
