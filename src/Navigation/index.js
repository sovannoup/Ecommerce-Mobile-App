/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NAV_TYPES } from './navTypes';
import Icon from 'react-native-vector-icons/FontAwesome';


import screenLogin from '../Containers/LoginContainer';
import screenHome from '../Containers/HomeContainer';
import screenSignup from '../Containers/SignupContainer';
import screenCard from '../Containers/CardContainer';
import screenNoti from '../Containers/NotiContainer';
import screenStore from '../Containers/StoreContainer';
import screenPorfile from '../Containers/ProfileContainer';


const IntroNavigator = createStackNavigator(
    {
        [NAV_TYPES.LOGIN]: {
            screen: screenLogin,
            navigationOptions: {
                headerShown: false
            },
        },

    },
    {
        initialRouteName: NAV_TYPES.LOGIN
    }
)

const HomeNavigation = createStackNavigator(
    {
        [NAV_TYPES.HOME]: {
            screen: screenHome,
            navigationOptions: {
                headerShown: false,
            },
        },
    }
);
const CardNavigation = createStackNavigator(
    {
        [NAV_TYPES.CARD]: {
            screen: screenCard,
            navigationOptions: {
                headerShown: false,
            },
        },
    }
);
const NotificationNavigation = createStackNavigator(
    {
        [NAV_TYPES.NOTIFICATION]: {
            screen: screenNoti,
            navigationOptions: {
                headerShown: false,
            },
        },
    }
);
const StoreNavigation = createStackNavigator(
    {
        [NAV_TYPES.STORE]: {
            screen: screenStore,
            navigationOptions: {
                headerShown: false,
            },
        },
    }
);
const ProfileNavigation = createStackNavigator(
    {
        [NAV_TYPES.PROFILE]: {
            screen: screenPorfile,
            navigationOptions: {
                headerShown: false,
            },
        },
    }
);

const SignupNavigation = createStackNavigator(
    {
        [NAV_TYPES.SIGNUP]: {
            screen: screenSignup,
            navigationOptions: {
                headerShown: false,
            },
        },
    }
);


//Tab Navigation
const TabNavigation = createBottomTabNavigator(
    {
        [NAV_TYPES.HOME]: {
            screen: HomeNavigation,
            navigationOptions: {
                tabBarLabel: ({ focused }) => (
                    <View>
                        <Icon name="home" size={20} color="#900" style={{ textAlign: 'center', color: focused ? 'blue' : 'black' }} />
                        <Text style={{ fontSize: 11, textAlign: 'center', color: focused ? 'blue' : 'black' }}>Home</Text>
                    </View>
                ),
            },
        },
        [NAV_TYPES.STORE]: {
            screen: StoreNavigation,
            navigationOptions: {
                tabBarLabel: ({ focused }) => (
                    <View>
                        <Icon name="bank" size={20} color="#900" style={{ textAlign: 'center', color: focused ? 'blue' : 'black' }} />
                        <Text style={{ fontSize: 11, textAlign: 'center', color: focused ? 'blue' : 'black' }}>Store</Text>
                    </View>
                ),
            },
        },
        [NAV_TYPES.NOTIFICATION]: {
            screen: NotificationNavigation,
            navigationOptions: {
                tabBarLabel: ({ focused }) => (
                    <View>
                        <Icon name="bell" size={20} color="#900" style={{ textAlign: 'center', color: focused ? 'blue' : 'black' }} />
                        <Text style={{ fontSize: 11, textAlign: 'center', color: focused ? 'blue' : 'black' }}>Notification</Text>
                    </View>
                ),
            },
        },
        [NAV_TYPES.CARD]: {
            screen: CardNavigation,
            navigationOptions: {
                tabBarLabel: ({ focused }) => (
                    <View>
                        <Icon name="shopping-cart" size={20} color="#900" style={{ textAlign: 'center', color: focused ? 'blue' : 'black' }} />
                        <Text style={{ fontSize: 11, textAlign: 'center', color: focused ? 'blue' : 'black' }}>Cart</Text>
                    </View>
                ),
            },
        },
        [NAV_TYPES.PROFILE]: {
            screen: ProfileNavigation,
            navigationOptions: {
                tabBarLabel: ({ focused }) => (
                    <View>
                        <Icon name="user-circle-o" size={20} color="#900" style={{ textAlign: 'center', color: focused ? 'blue' : 'black' }} />
                        <Text style={{ fontSize: 11, textAlign: 'center', color: focused ? 'blue' : 'black' }}>Profile</Text>
                    </View>
                ),
            },
        },
    },
    {
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            //   activeBackgroundColor:'#f5f5f5',

            labelStyle: {
                fontSize: 10,
            },
            style: { height: Platform.OS === 'ios' ? 40 : 43, paddingBottom: Platform.OS === 'ios' ? 0 : 0 },
            activeColor: 'blue',
            activeTabStyle: { backgroundColor: 'blue' },

        },
    }

)


const CoreNavigation = createStackNavigator(
    {
        [NAV_TYPES.MAIN]: {
            screen: TabNavigation,
            navigationOptions: {
                headerShown: false,
            },
        },
        [NAV_TYPES.SIGNUP]: {
            screen: SignupNavigation,
            navigationOptions: {
                headerShown: false,
            },
        },
    },
    {
        initialRouteName: NAV_TYPES.MAIN
    }
)
const MainNavigation = createStackNavigator(
    {
        [NAV_TYPES.INTRO]: {
            screen: IntroNavigator,
            navigationOptions: {
                headerShown: false,
            },
        },
        [NAV_TYPES.CORE]: {
            screen: CoreNavigation,
            navigationOptions: {
                headerShown: false,
            },
        },
    },
    {
        initialRouteName: NAV_TYPES.INTRO
    }
)
export default createAppContainer(MainNavigation)