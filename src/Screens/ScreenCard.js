/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Image, ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes';
import CartItem from '../Screens/CartItem';
export default class Cart extends Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }

    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.headerBox}>
                    <Text style={{ fontSize: 18 }}>កន្ត្រក</Text>
                </View>
                <View style={styles.body}>
                    <CartItem
                        name='SP Happy girl'
                        goodname='ស្លែកជេីងរាប'
                    />
                </View>
                <View style={styles.body}>
                    <CartItem
                        name='Amatak Shop'
                        goodname='IT Assasary'
                    />
                </View>
            </ScrollView >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    headerBox: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fdfd96',
    },
    body: {
    },
})