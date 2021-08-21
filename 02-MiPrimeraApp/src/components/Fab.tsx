import React from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl', // ? significa opcional (definir por defecto en la desestructuracion)
    onPress: () => void,
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return(
            <TouchableOpacity
            activeOpacity={ 0.75 }
                style = {[ 
                    styles.fabLocation, 
                    ( position == 'bl')? styles.left: styles.rigth
                ]}
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }> {title} </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return(
            <View
                style = {[ 
                    styles.fabLocation, 
                    ( position == 'bl')? styles.left: styles.rigth
                ]}
            >
            <TouchableNativeFeedback
                onPress={ onPress }
                background={ TouchableNativeFeedback.Ripple('#284225B', false, 30) }
                >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }> {title} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS == 'android') ? android(): ios(); //codigo especifico para cada plataforma
}

const styles = StyleSheet.create ({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    rigth: {
        right: 25
    }, 
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
})