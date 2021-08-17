/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, View, Image } from 'react-native';
import NavigationService from '../Service/navigationService';
import { NAV_TYPES } from '../Navigation/navTypes';
export default class Login extends Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <View style={[styles.container, { flexDirection: 'column' }]}>
                    <View style={styles.blockTop} >
                        <Image
                            style={styles.logo}
                            source={require('./../Assets/images/logo-mst.png')}
                        />
                    </View>
                    <View style={styles.blockMidle} >
                        <TextInput
                            style={styles.input}
                            placeholder="លេខទូរសព្ទ"
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="លេខសំងាត់"
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => NavigationService.navigate(NAV_TYPES.HOME)}
                        >
                            <Text
                                style={styles.buttonText}
                            >
                                ចូលគណនី
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.newAcc}
                            onPress={() => NavigationService.navigate(NAV_TYPES.SIGNUP)}>
                            <Text style={styles.newAccText}>
                                ចូលគណនី
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.blockBottom} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blockTop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockMidle: {
        flex: 2,
    },
    blockBottom: {
        flex: 3,
    },
    logo: {
        width: '50%',
        height: 50,
        marginTop: 60,
        // resizeMode: 'contain'
    },
    input: {
        height: 50,
        width: '70%',
        marginLeft: '15%',
        borderWidth: 2,
        borderColor: '#0e6d65',
        borderRadius: 30,
        paddingHorizontal: 20,
        marginTop: 15,
    },
    button: {
        height: 50,
        backgroundColor: '#0000fe',
        width: '40%',
        marginLeft: '30%',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
    },
    newAcc: {
        alignItems: 'center',
        marginTop: 15,
    },
    newAccText: {
        textDecorationLine: 'underline',
    },
});
