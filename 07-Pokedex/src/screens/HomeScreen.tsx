import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Icon 
                name='airplane-outline'
                color='blue'
                size= { 60 }
            />
        </View>
    );
}
