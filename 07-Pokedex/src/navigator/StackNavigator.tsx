import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Stack = createStackNavigator();

export const Navigator = () => {

    return (
        <Stack.Navigator
            
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
        </Stack.Navigator>
    );
}
