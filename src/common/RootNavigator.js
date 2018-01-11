import React from 'react';
import {StackNavigator} from 'react-navigation';
import {ImageBackground, Text} from 'react-native';

import HomeScreen from '../screen/Home';
import SearchFlightScreen from '../screen/SearchFlight';

const navigationOptions = {
    headerTitleStyle: {alignSelf: 'center'}
}

const RootNavigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        SearchFlight: {
            screen: SearchFlightScreen,
        }
    },
    {
        navigationOptions: navigationOptions
    });

export default RootNavigator;