/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Image, ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class Notification extends Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }

    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.headerBox}>
                    <Text style={{ fontSize: 15 }}>សារជូនដំណីង</Text>
                </View>
                <View>
                    <Icon name="bell" size={40} style={{ textAlign: 'center', color: '#FFC34D', marginTop: '50%' }} />
                    <Text style={{ alignSelf: 'center', marginTop: 10 }}>មិនទាន់មានសារជូនដំណឹងទេ</Text>
                </View>
            </ScrollView>
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
})