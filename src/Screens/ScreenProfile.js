/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Image, ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class Profile extends Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }

    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.headerBox}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ fontSize: 15, alignSelf: 'center' }}>ចុៈឈ្មេាៈបង្កេីតគណនី</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Image
                        resizeMode='cover'
                        style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 0.5, borderColor: 'gray' }}
                        source={require('./../Assets/images/logo-mst.png')}
                    />
                    <Text style={{ fontSize: 12, color: 'gray', margin: 5 }}>ជំនាន់ 1.0.0</Text>
                    <Text style={{ fontSize: 12, color: 'gray' }}>@  រក្សាសិទ្ធគ្រប់យ៉ាងដោយ្ SAK SEN ឆ្នាំ២០២០</Text>
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
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fdfd96',
    },
    btn: {
        width: '40%',
        height: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#909090',
    },
    body: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%'
    }
})