/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Image,
} from 'react-native'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class Home extends Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }

    }
    render() {
        return (
            <View style={styles.innerAction}>
                <Text style={styles.newAccText}>
                    Home Screen
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    innerAction: {
        color: 'green',
    },
    newAccText: {
        fontSize: 15,
    },
})