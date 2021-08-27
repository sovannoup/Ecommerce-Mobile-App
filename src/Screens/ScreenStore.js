/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    Text, StyleSheet, TouchableOpacity, View, Image, ScrollView, TextInput,
} from 'react-native';
import Fav from './ScreenFav';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../Service/navigationService';
import { NAV_TYPES } from '../Navigation/navTypes';
export default class Card extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            active: true,
        };

    }
    render() {
        return (
            < ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <View style={styles.headerBox}>
                    <View style={styles.searchField}>
                        <TextInput
                            style={styles.input}
                            //onChangeText={(val) => this.handleTextChange('search', val)}
                            placeholder={'Search'}
                        />
                        <TouchableOpacity
                            style={styles.searchIcon}
                        //onPress={() => this.handleSearchPress()}
                        >
                            <Icon name="search" size={15} style={{ textAlign: 'center' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnField}>
                        <TouchableOpacity
                            style={styles.shopBtn}
                            onPress={() => this.setState({ active: true })}
                        >
                            <Text>ហាងទាំងអស់</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.favShop}
                            onPress={() => this.setState({ active: false })}>
                            <Text>ហាងចូលចិត្ត</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.active ?
                    <View style={styles.body}>
                        <View style={styles.shopList}>
                            <View style={styles.boxHeader}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 0.5, borderColor: 'gray' }}
                                    source={require('./../Assets/images/profile.jpg')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 13 }}>   រស្មីមានជ័យ</Text>
                                    <Text style={{ fontSize: 9, color: 'gray', paddingTop: 2 }}>     អតិថិជន៖ 10នាក់</Text>
                                </View>
                                <Icon name="hand-peace-o" size={20} style={{ textAlign: 'center', color: '#1f75fe', marginLeft: '50%' }} />
                            </View>
                            <TouchableOpacity style={styles.toStoreBtn}>
                                <Text style={{ alignSelf: 'center' }}>ចូលទៅកាន់ហាង</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.shopList}>
                            <View style={styles.boxHeader}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 0.5, borderColor: 'gray' }}
                                    source={require('./../Assets/images/profile.jpg')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 13 }}>   រស្មីមានជ័យ</Text>
                                    <Text style={{ fontSize: 9, color: 'gray', paddingTop: 2 }}>     អតិថិជន៖ 10នាក់</Text>
                                </View>
                                <Icon name="hand-peace-o" size={20} style={{ textAlign: 'center', color: '#1f75fe', marginLeft: '50%' }} />
                            </View>
                            <TouchableOpacity style={styles.toStoreBtn}>
                                <Text style={{ alignSelf: 'center' }}>ចូលទៅកាន់ហាង</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.shopList}>
                            <View style={styles.boxHeader}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 0.5, borderColor: 'gray' }}
                                    source={require('./../Assets/images/profile.jpg')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 13 }}>   រស្មីមានជ័យ</Text>
                                    <Text style={{ fontSize: 9, color: 'gray', paddingTop: 2 }}>     អតិថិជន៖ 10នាក់</Text>
                                </View>
                                <Icon name="hand-peace-o" size={20} style={{ textAlign: 'center', color: '#1f75fe', marginLeft: '50%' }} />
                            </View>
                            <TouchableOpacity style={styles.toStoreBtn}>
                                <Text style={{ alignSelf: 'center' }}>ចូលទៅកាន់ហាង</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.shopList}>
                            <View style={styles.boxHeader}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 0.5, borderColor: 'gray' }}
                                    source={require('./../Assets/images/profile.jpg')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 13 }}>   រស្មីមានជ័យ</Text>
                                    <Text style={{ fontSize: 9, color: 'gray', paddingTop: 2 }}>     អតិថិជន៖ 10នាក់</Text>
                                </View>
                                <Icon name="hand-peace-o" size={20} style={{ textAlign: 'center', color: '#1f75fe', marginLeft: '50%' }} />
                            </View>
                            <TouchableOpacity style={styles.toStoreBtn}>
                                <Text style={{ alignSelf: 'center' }}>ចូលទៅកាន់ហាង</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.shopList}>
                            <View style={styles.boxHeader}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 0.5, borderColor: 'gray' }}
                                    source={require('./../Assets/images/profile.jpg')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 13 }}>   រស្មីមានជ័យ</Text>
                                    <Text style={{ fontSize: 9, color: 'gray', paddingTop: 2 }}>     អតិថិជន៖ 10នាក់</Text>
                                </View>
                                <Icon name="hand-peace-o" size={20} style={{ textAlign: 'center', color: '#1f75fe', marginLeft: '50%' }} />
                            </View>
                            <View style={styles.imageField}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: '30%', height: 90, borderRadius: 5, borderWidth: 0.5, borderColor: 'gray', marginHorizontal: 5 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                                <Image
                                    resizeMode='cover'
                                    style={{ width: '30%', height: 90, borderRadius: 5, borderWidth: 0.5, borderColor: 'gray', marginHorizontal: 5 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                            </View>
                            <TouchableOpacity style={styles.toStoreBtn}>
                                <Text style={{ alignSelf: 'center' }}>ចូលទៅកាន់ហាង</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.shopList}>
                            <View style={styles.boxHeader}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 0.5, borderColor: 'gray' }}
                                    source={require('./../Assets/images/profile.jpg')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 13 }}>   រស្មីមានជ័យ</Text>
                                    <Text style={{ fontSize: 9, color: 'gray', paddingTop: 2 }}>     អតិថិជន៖ 10នាក់</Text>
                                </View>
                                <Icon name="hand-peace-o" size={20} style={{ textAlign: 'center', color: '#1f75fe', marginLeft: '50%' }} />
                            </View>
                            <View style={styles.imageField}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: '30%', height: 90, borderRadius: 5, borderWidth: 0.5, borderColor: 'gray', marginHorizontal: 5 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                                <Image
                                    resizeMode='cover'
                                    style={{ width: '30%', height: 90, borderRadius: 5, borderWidth: 0.5, borderColor: 'gray', marginHorizontal: 5 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                                <Image
                                    resizeMode='cover'
                                    style={{ width: '30%', height: 90, borderRadius: 5, borderWidth: 0.5, borderColor: 'gray', marginHorizontal: 5 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                            </View>
                            <TouchableOpacity style={styles.toStoreBtn}>
                                <Text style={{ alignSelf: 'center' }}>ចូលទៅកាន់ហាង</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.shopList}>
                            <View style={styles.boxHeader}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 0.5, borderColor: 'gray' }}
                                    source={require('./../Assets/images/profile.jpg')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 13 }}>   រស្មីមានជ័យ</Text>
                                    <Text style={{ fontSize: 9, color: 'gray', paddingTop: 2 }}>     អតិថិជន៖ 10នាក់</Text>
                                </View>
                                <Icon name="hand-peace-o" size={20} style={{ textAlign: 'center', color: '#1f75fe', marginLeft: '50%' }} />
                            </View>
                            <TouchableOpacity style={styles.toStoreBtn}>
                                <Text style={{ alignSelf: 'center' }}>ចូលទៅកាន់ហាង</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.shopList}>
                            <View style={styles.boxHeader}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 0.5, borderColor: 'gray' }}
                                    source={require('./../Assets/images/profile.jpg')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 13 }}>   រស្មីមានជ័យ</Text>
                                    <Text style={{ fontSize: 9, color: 'gray', paddingTop: 2 }}>     អតិថិជន៖ 10នាក់</Text>
                                </View>
                                <Icon name="hand-peace-o" size={20} style={{ textAlign: 'center', color: '#1f75fe', marginLeft: '50%' }} />
                            </View>
                            <View style={styles.imageField}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: '30%', height: 90, borderRadius: 5, borderWidth: 0.5, borderColor: 'gray', marginHorizontal: 5 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                            </View>
                            <TouchableOpacity style={styles.toStoreBtn}>
                                <Text style={{ alignSelf: 'center' }}>ចូលទៅកាន់ហាង</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ alignSelf: 'center', marginTop: 20, marginBottom: 5, }}>ទិន្នន័យបានបង្ហាញអស់</Text>
                    </View>
                    : <Fav />}
            </ ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchField: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '50%',
    },
    btnField: {
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fdfd96',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        height: 25,
        borderRadius: 7,
        paddingLeft: 10,
        paddingVertical: 5,
        fontSize: 12,
        marginHorizontal: '5%',
        backgroundColor: '#fff',
    },
    searchIcon: {
        position: 'absolute',
        marginLeft: '83%',
    },
    headerBox: {
        height: 90,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fdfd96',
    },
    shopBtn: {
        backgroundColor: '#fdfd96',
        width: '45%',
        margin: '1%',
        marginBottom: '3%',
        height: 23,
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3,
        elevation: 5,
    },
    favShop: {
        backgroundColor: '#fafad2',
        width: '45%',
        margin: '1%',
        marginBottom: '3%',
        height: 23,
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3,
        elevation: 5,

    },
    body: {

    },
    shopList: {
        width: '90%',
        backgroundColor: '#E8E8E8',
        marginHorizontal: '5%',
        marginTop: 15,
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: 'gray',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3,
        elevation: 5,
    },
    boxHeader: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '4%',
        marginVertical: '4%',
    },
    toStoreBtn: {
        width: '50%',
        height: 30,
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#fdfd96',
        marginHorizontal: '25%',
        marginVertical: 10,
        borderWidth: 0.3,
        borderColor: 'gray',
    },
    imageField: {
        flexDirection: 'row',
        width: '90%',
        marginHorizontal: '5%'
    },
})