/* eslint-disable prettier/prettier */
import React, { Component, useState, useEffect } from 'react';
import {
    Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, View, Image, ActivityIndicator,
} from 'react-native';
import NavigationService from '../Service/navigationService';
import { NAV_TYPES } from '../Navigation/navTypes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";
import { withOrientation } from 'react-navigation';
export default class Home extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            images: [
                require('./../Assets/images/slider1.jpg'),
                require('./../Assets/images/slider2.jpg'),
            ]
        }

    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.headerBox}>
                    <Image style={styles.image} source={require('./../Assets/images/logo-mst.png')} />
                    <TextInput
                        style={styles.input}
                        //onChangeText={(val) => this.handleTextChange('search', val)}
                        placeholder={'Search'}
                    />
                    <TouchableOpacity
                        style={styles.searchIcon}
                    //onPress={() => this.handleSearchPress()}
                    >
                        <Icon name="search" size={10} style={{ textAlign: 'center' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.CommentBtn}
                    //onPress={() => this.handleSearchPress()}
                    >
                        <Icon name="commenting" size={15} style={{ textAlign: 'center' }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.slider}>
                    <SliderBox style={styles.sliderIMG}
                        images={this.state.images}
                        autoplay
                        circleLoop
                        dotStyle={{
                            width: 8,
                            height: 8,
                            borderRadius: 5,
                        }}
                    />
                </View>
                <View style={styles.line} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.catagory}>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/shoe.png')}
                        />
                        <Text style={styles.cataText}>ស្បែកជើង</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/clothes.png')}
                        />
                        <Text style={styles.cataText}>សំលៀកបំពាក់</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/computer.png')}
                        />
                        <Text style={styles.cataText}>គ្រឿងអេឡិចត្រូនិច</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/jewelry.png')}
                        />
                        <Text style={styles.cataText}>គ្រឿងអលង្កា</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/kitchen.png')}
                        />
                        <Text style={styles.cataText}>សំភារៈផ្ទះបាយ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/baby.png')}
                        />
                        <Text style={styles.cataText}>សំភារៈទារក</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/gifts.png')}
                        />
                        <Text style={styles.cataText}>សំភារៈជំនូន</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/beauty.png')}
                        />
                        <Text style={styles.cataText}>គ្រឿងសំអាង</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/office.png')}
                        />
                        <Text style={styles.cataText}>សំភារៈសិក្សា</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/computer.png')}
                        />
                        <Text style={styles.cataText}>គ្រឿងអេឡិចត្រូនិច</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/jewelry.png')}
                        />
                        <Text style={styles.cataText}>គ្រឿងអេឡិចត្រូនិច</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cataItem}>
                        <Image
                            style={styles.cataImg}
                            source={require('./../Assets/images/clothes.png')}
                        />
                        <Text style={styles.cataText}>គ្រឿងអេឡិចត្រូនិច</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.body}>
                    <View style={styles.process}>
                        <TouchableOpacity
                            style={styles.wallet}
                        //onPress={() => this.handleSearchPress()}
                        >
                            <Icon name="book" size={40} style={{ textAlign: 'center', color: '#FFC34D' }} />
                            <Text style={{ textAlign: 'center' }}>កាបូបលុយ</Text>
                        </TouchableOpacity>
                        <View style={styles.buyStuff}>
                            <TouchableOpacity
                                style={styles.how}
                            //onPress={() => this.handleSearchPress()}
                            >
                                <Icon name="cart-arrow-down" size={23} style={{ textAlign: 'center', color: '#1f75fe' }} />
                                <Text style={{ textAlign: 'center' }}>   កាបូបលុយ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buying}
                            //onPress={() => this.handleSearchPress()}
                            >
                                <Icon name="refresh" size={23} style={{ textAlign: 'center', color: 'red' }} />
                                <Text style={{ textAlign: 'center' }}>   របៀបទិញទំនិញ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.product}>
                    <View style={{ height: 20, alignItems: 'center', marginBottom: 15 }}>
                        <Text style={{ color: '#FFC34D', fontSize: 15 }}>* ប្រវត្តិការទិញ *</Text>
                    </View>
                    <View style={styles.goods}>
                        <View style={styles.col1}>
                            <TouchableOpacity style={styles.goodBtn}>
                                <View style={{ flexDirection: 'row', padding: 8 }}>
                                    <Image
                                        resizeMode='cover'
                                        style={{ width: 20, height: 20, borderRadius: 20 / 2 }}
                                        source={require('./../Assets/images/profile.jpg')} />
                                    <Text style={{ fontSize: 10 }}>   លក់គ្រឿងទុបតែងផ្ទ៖</Text>
                                </View>
                                <Text style={{ fontSize: 11, paddingLeft: 8, marginBottom: 5, marginTop: 10 }}>Queen Villa</Text>
                                <Image
                                    style={{ width: '100%', height: 150 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                                <Text style={{ fontSize: 10, padding: 10, color: 'gray' }}>0  ចូលចិត្ត</Text>
                                <View style={styles.Btn}>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="hand-peace-o" size={13} style={{ textAlign: 'center', color: '#1f75fe' }} />
                                        <Text>  ចូលចិត្ត</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="bank" size={13} style={{ textAlign: 'center', color: '#6bcd6e' }} />
                                        <Text>  ហាង</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.goodBtn}>
                                <View style={{ flexDirection: 'row', padding: 8 }}>
                                    <Image
                                        resizeMode='cover'
                                        style={{ width: 20, height: 20, borderRadius: 20 / 2 }}
                                        source={require('./../Assets/images/profile.jpg')} />
                                    <Text style={{ fontSize: 10 }}>   លក់គ្រឿងទុបតែងផ្ទ៖</Text>
                                </View>
                                <Text style={{ fontSize: 11, paddingLeft: 8, marginBottom: 5, marginTop: 10 }}>Queen Villa</Text>
                                <Image
                                    style={{ width: '100%', height: 150 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                                <Text style={{ fontSize: 10, padding: 10, color: 'gray' }}>3  ចូលចិត្ត</Text>
                                <View style={styles.Btn}>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="hand-peace-o" size={13} style={{ textAlign: 'center', color: '#1f75fe' }} />
                                        <Text>  ចូលចិត្ត</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="bank" size={13} style={{ textAlign: 'center', color: '#6bcd6e' }} />
                                        <Text>  ហាង</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.goodBtn}>
                                <View style={{ flexDirection: 'row', padding: 8 }}>
                                    <Image
                                        resizeMode='cover'
                                        style={{ width: 20, height: 20, borderRadius: 20 / 2 }}
                                        source={require('./../Assets/images/profile.jpg')} />
                                    <Text style={{ fontSize: 10 }}>   លក់គ្រឿងទុបតែងផ្ទ៖</Text>
                                </View>
                                <Text style={{ fontSize: 11, paddingLeft: 8, marginBottom: 5, marginTop: 10 }}>Queen Villa</Text>
                                <Image
                                    style={{ width: '100%', height: 150 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                                <Text style={{ fontSize: 10, padding: 10, color: 'gray' }}>5  ចូលចិត្ត</Text>
                                <View style={styles.Btn}>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="hand-peace-o" size={13} style={{ textAlign: 'center', color: '#1f75fe' }} />
                                        <Text>  ចូលចិត្ត</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="bank" size={13} style={{ textAlign: 'center', color: '#6bcd6e' }} />
                                        <Text>  ហាង</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.col2}>
                            <TouchableOpacity style={styles.goodBtn}>
                                <View style={{ flexDirection: 'row', padding: 8 }}>
                                    <Image
                                        resizeMode='cover'
                                        style={{ width: 20, height: 20, borderRadius: 20 / 2 }}
                                        source={require('./../Assets/images/profile.jpg')} />
                                    <Text style={{ fontSize: 10 }}>   លក់គ្រឿងទុបតែងផ្ទ៖</Text>
                                </View>
                                <Text style={{ fontSize: 11, paddingLeft: 8, marginBottom: 5, marginTop: 10 }}>Queen Villa</Text>
                                <Image
                                    style={{ width: '100%', height: 150 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                                <Text style={{ fontSize: 10, padding: 10, color: 'gray' }}>2  ចូលចិត្ត</Text>
                                <View style={styles.Btn}>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="hand-peace-o" size={13} style={{ textAlign: 'center', color: '#1f75fe' }} />
                                        <Text>  ចូលចិត្ត</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="bank" size={13} style={{ textAlign: 'center', color: '#6bcd6e' }} />
                                        <Text>  ហាង</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.goodBtn}>
                                <View style={{ flexDirection: 'row', padding: 8 }}>
                                    <Image
                                        resizeMode='cover'
                                        style={{ width: 21, height: 20, borderRadius: 20 / 2 }}
                                        source={require('./../Assets/images/profile.jpg')} />
                                    <Text style={{ fontSize: 10 }}>   លក់គ្រឿងទុបតែងផ្ទ៖</Text>
                                </View>
                                <Text style={{ fontSize: 11, paddingLeft: 8, marginBottom: 5, marginTop: 10 }}>Queen Villa</Text>
                                <Image
                                    style={{ width: '100%', height: 150 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                                <Text style={{ fontSize: 10, padding: 10, color: 'gray' }}>4  ចូលចិត្ត</Text>
                                <View style={styles.Btn}>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="hand-peace-o" size={13} style={{ textAlign: 'center', color: '#1f75fe' }} />
                                        <Text>  ចូលចិត្ត</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="bank" size={13} style={{ textAlign: 'center', color: '#6bcd6e' }} />
                                        <Text>  ហាង</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.goodBtn}>
                                <View style={{ flexDirection: 'row', padding: 8 }}>
                                    <Image
                                        resizeMode='cover'
                                        style={{ width: 20, height: 20, borderRadius: 20 / 2 }}
                                        source={require('./../Assets/images/profile.jpg')} />
                                    <Text style={{ fontSize: 10 }}>   លក់គ្រឿងទុបតែងផ្ទ៖</Text>
                                </View>
                                <Text style={{ fontSize: 11, paddingLeft: 8, marginBottom: 5, marginTop: 10 }}>Queen Villa</Text>
                                <Image
                                    style={{ width: '100%', height: 150 }}
                                    source={require('./../Assets/images/profile.jpg')}
                                />
                                <Text style={{ fontSize: 10, padding: 10, color: 'gray' }}>6  ចូលចិត្ត</Text>
                                <View style={styles.Btn}>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="hand-peace-o" size={13} style={{ textAlign: 'center', color: '#1f75fe' }} />
                                        <Text>  ចូលចិត្ត</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.like}>
                                        <Icon name="bank" size={13} style={{ textAlign: 'center', color: '#6bcd6e' }} />
                                        <Text>  ហាង</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#f3f3f3',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '65%',
        height: 25,
        borderRadius: 7,
        paddingLeft: 10,
        paddingVertical: 5,
        fontSize: 12,
        marginLeft: '2%',
        backgroundColor: '#fff',
    },
    searchIcon: {
        position: 'absolute',
        marginLeft: '73%',
    },
    CommentBtn: {
        position: 'absolute',
        right: '4%',
    },
    image: {
        width: '20%',
        height: 60,
    },
    headerBox: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fdfd96',
    },
    slider: {
        width: '100%',
        height: 150,
        backgroundColor: 'blue',
    },
    sliderIMG: {
        width: '100%',
        resizeMode: 'cover',
        height: '100%',
    },
    line: {
        borderWidth: 0.3,
        marginLeft: '5%',
        borderColor: 'gray',
        marginTop: 10,
        width: '90%',
    },
    catagory: {
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        paddingTop: '5%',
    },
    cataItem: {
        width: 80,
    },
    cataImg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    cataText: {
        fontSize: 10,
        textAlign: 'center',
    },
    body: {
        width: '100%',
        height: 100,
    },
    process: {
        marginVertical: '3%',
        flexDirection: 'row',
    },
    wallet: {
        width: '44%',
        marginLeft: '5%',
        marginRight: '1%',
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: 'gray',
        height: 100,
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3,
        elevation: 5,
    },
    buyStuff: {
        width: '44%',
        marginRight: '5%',
        marginLeft: '1%',
    },
    how: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.3,
        height: '46%',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3,
        elevation: 5,
    },
    buying: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: '#909090',
        borderWidth: 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3,
        elevation: 5,
        height: '47%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    product: {
        marginTop: 40,
        marginBottom: 20,
    },
    goods: {
        flexDirection: 'row',
    },
    goodBtn: {
        height: 280,
        width: '90%',
        backgroundColor: 'white',
        marginHorizontal: '5%',
        borderRadius: 5,
        borderColor: '#909090',
        borderWidth: 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3,
        elevation: 5,
        marginBottom: 10,

    },
    col1: {
        flexDirection: 'column',
        width: '50%',
    },
    col2: {
        flexDirection: 'column',
        width: '50%',
    },
    Btn: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
    },
    like: {
        flexDirection: 'row',
        borderRightWidth: 0.3,
        width: '45%',
        marginHorizontal: '2.5%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#909090',
        borderWidth: 0.3,
    }
});

