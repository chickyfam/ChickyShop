import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Product from 'ChickyShop/src/components/Main/Shop/Home/TopProduct/Product';

const styles = require('ChickyShop/src/styles');
const Product1 = require('ChickyShop/media/images/sp1.jpeg');
const Product2 = require('ChickyShop/media/images/sp2.jpg');
const Product3 = require('ChickyShop/media/images/sp3.jpeg');
const Product4 = require('ChickyShop/media/images/sp4.jpeg');

export default class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.TopProduct.Container}>
                <View style={styles.TopProduct.Title}>
                    <Text style={{ fontSize: 16 }}>TOP PRODUCTS</Text>
                </View>
                <View style={styles.TopProduct.ProductContainer}>
                    <View style={styles.TopProduct.ProductRow1}>
                        <View style={styles.TopProduct.Product}>
                            <Product link={Product1} Name='Product 1' Price={100} />
                        </View>
                        <View style={styles.TopProduct.Product}>
                            <Product link={Product2} Name='Product 2' Price={100} />
                        </View>
                    </View>
                    <View style={styles.TopProduct.ProductRow2}>
                        <View style={styles.TopProduct.Product}>
                            <Product link={Product3} Name='Product 3' Price={100} />
                        </View>
                        <View style={styles.TopProduct.Product}>
                            <Product link={Product4} Name='Product 4' Price={100} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
