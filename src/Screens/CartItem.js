/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {
    Text, StyleSheet, TouchableOpacity, View, Image, ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class Cart extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            name: this.props.name,
            goodname: this.props.goodname,
            ProductNum: 1,
        }

    }
    render() {
        return (
            <View style={styles.itemList}>
                <View style={styles.header}>
                    <Image
                        resizeMode='cover'
                        style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 0.5, borderColor: 'gray' }}
                        source={require('./../Assets/images/profile.jpg')} />
                    <Text style={{ fontSize: 14, alignSelf: 'center' }}>    {this.state.name}</Text>
                </View>
                <View style={styles.row1}>
                    <Image
                        resizeMode='cover'
                        style={styles.goodPic}
                        source={require('./../Assets/images/shoe.png')}
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 13, marginVertical: 5 }}>{this.state.goodname}</Text>
                        <Text style={{ fontSize: 13, marginVertical: 3 }}>តម្លៃ៖  <Text style={{ textDecorationLine: 'line-through', color: 'red' }}>36,700៛</Text></Text>
                        <Text style={{ fontSize: 11, marginVertical: 3 }}>35-ស</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="trash" size={18} style={{ textAlign: 'center', color: 'red', marginLeft: '40%', marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 13, marginVertical: 0.5 }}>បញ្ចុៈតម្លៃ ៖ <Text style={{ fontSize: 11, color: 'red' }}>10%</Text></Text>
                <Text style={{ fontSize: 13, marginVertical: 0.5 }}>តម្លៃ ៖ <Text style={{ fontSize: 11, color: 'red' }}>33,030៛</Text></Text>
                <Text style={{ fontSize: 13, marginTop: 5 }}>តម្លៃសរុប ៖ <Text style={{ fontSize: 15, color: 'red' }}>33,030៛</Text></Text>
                <Text style={{ fontSize: 12, marginTop: 3 }}>រង់ចាំគិតលុយ</Text>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.dokBtn}
                        onPress={() => this.setState({ ProductNum: this.state.ProductNum > 1 ? this.state.ProductNum - 1 : this.state.ProductNum })}
                    >
                        <Icon name="minus" size={18} style={{ alignSelf: 'center', color: 'black' }} />
                    </TouchableOpacity>
                    <View style={styles.countText}><Text style={{ fontSize: 18 }}>{this.state.ProductNum}</Text></View>
                    <TouchableOpacity style={styles.bokBtn}
                        onPress={() => this.setState({ ProductNum: this.state.ProductNum + 1 })}
                    >
                        <Icon name="plus" size={18} style={{ alignSelf: 'center', color: 'black' }} />
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'blue'
    },
    itemList: {
        borderRadius: 5,
        borderColor: '#909090',
        borderWidth: 0.3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3,
        elevation: 1,
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 15,
        paddingHorizontal: '5%',
        paddingVertical: '3%',
    },
    header: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: 'gray',
    },
    row1: {
        flexDirection: 'row'
    },
    goodPic: {
        width: 100,
        height: 100,
        marginHorizontal: 5,
        marginTop: 5,
    },
    btn: {
        right: 10,
        bottom: 15,
        width: 130,
        height: 35,
        position: 'absolute',
        flexDirection: 'row',
    },
    dokBtn: {
        width: 40,
        backgroundColor: '#D7D7D7',
        justifyContent: 'center',
        height: '100%',
        marginRight: 5
    },
    bokBtn: {
        width: 40,
        backgroundColor: '#D7D7D7',
        justifyContent: 'center',
        height: '100%',
        marginRight: 5
    },
    countText: {
        width: 40,
        height: '100%',
        backgroundColor: '#EAEAEA',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
})