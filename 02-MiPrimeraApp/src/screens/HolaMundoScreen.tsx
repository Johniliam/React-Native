import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{ //la segunda llave significa que se le enviara un objeto literal
            flex: 1,
            justifyContent: 'center'
        }}>
        <Text style={{
            fontSize: 45,
            textAlign: 'center'
        }}>Hola Mundo!!!</Text>
        </View>
    )
}
