/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    Text, StyleSheet, TouchableOpacity, View, ScrollView, TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../Service/navigationService';
import { NAV_TYPES } from '../Navigation/navTypes';
export default class Fav extends Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }

    }
    render() {
        return (
            <View>
                <Text style={styles.bodyText}>មិនមានហាងដែលអ្នកចូលចិត្ត</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bodyText: {
        alignSelf: 'center',
        marginTop: '50%',
    },
})