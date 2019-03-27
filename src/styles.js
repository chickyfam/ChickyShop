import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

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

export const Home = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 5,
        backgroundColor: 'lightgrey'
    },
    Collection: {
        height: height * 0.3,
        backgroundColor: 'white'
    },
    Category: {
        height: height * 0.3,
        marginTop: 10,
        backgroundColor: 'white'
    },
    TopProduct: {
        height: height * 0.9,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    }
});

export const Collection = StyleSheet.create({
    Container: {
        padding: 5,
        flex: 1,
    },
    Title: {
        flex: 0.15,
        justifyContent: 'center',
    },
    ImageContainer: {
        flex: 0.85,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        flex: 1,
    }
});

export const Category = StyleSheet.create({
    Container: {
        padding: 5,
        flex: 1,
    },
    Title: {
        flex: 0.15,
        justifyContent: 'center',
    },
    Slider: {
        flex: 1
    },
    ImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const TopProduct = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 5
    },
    Title: {
        flex: 0.05,
        justifyContent: 'center'
    },
    ProductContainer: {
        flex: 0.95,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProductRow1: {
        flex: 0.5,
        flexDirection: 'row',
    },
    ProductRow2: {
        flex: 0.5,
        flexDirection: 'row',
    },
    Product: {
        flex: 0.5,
        padding: 5
    }
});

export const Product = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Image: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Info: {
        flex: 0.2,
    },
    Name: {

    },
    Price: {
        color: 'red'
    }
});

export const Authentication = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: appColor
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
    }
});

export const SignIn = StyleSheet.create({
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

export const ChangeInfo = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#e3e7ed'
    },
    Header: {
        flex: 0.1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: appColor,
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
        justifyContent: 'center',
    },
    Input: {
        marginBottom: 10,
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: appColor,
        backgroundColor: 'white'
    },
    Button: {
        marginTop: 10,
        padding: 10,
        backgroundColor: appColor,
        borderRadius: 20,
    },
    ButtonTitle: {
        color: 'white',
        textAlign: 'center',
    }
});
