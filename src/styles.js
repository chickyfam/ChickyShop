import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const appColor = '#2ABB9C';
export const Slogan = 'Chicky Fashion Shop';
export const W_Width = width;
export const W_Height = height;

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
