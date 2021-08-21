import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        flex:1,
    },
    title: {
        margin: 100, //out
        borderWidth: 10, //middle
        padding: 20, //in
        fontSize: 20,
        //width: 150,
        //backgroundColor: 'blue',
        
    }
});