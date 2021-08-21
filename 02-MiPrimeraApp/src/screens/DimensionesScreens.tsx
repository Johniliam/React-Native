import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

//const {width, height} = Dimensions.get('window');

export const DimensionesScreens = () => {

    const {width, height} = useWindowDimensions();

    return (
        <View>
            <View style={ styles.container }>

                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.50 //toma el 50% de la pantalla actual
                }}/> 
                <View style={ styles.cajaNaranja }/>

            </View>
            <Text style={ styles.title }>W: {width}, H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: 'purple',
        width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: 'orange',
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
});