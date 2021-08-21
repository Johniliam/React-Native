import React from 'react'
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde}/>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
            <View style={styles.cajaAzul}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9', 
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    cajaMorada: {
        backgroundColor: 'purple',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0
    },
    cajaNaranja: {
        backgroundColor: 'orange',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cajaAzul: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
    },
    cajaVerde: {
        backgroundColor: 'green',
        //width: 100,
        //height: 100,
        borderWidth: 10,
        borderColor: 'white',
        //position: 'absolute',
        //bottom: 0,
        //top: 0,
        //right: 0,
        //left: 0,
        ...StyleSheet.absoluteFillObject // es lo mismo que lo comentado
    },
});