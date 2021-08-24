import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    texto: string,
    color?: string,
    textColor?: string,
    ancho?: boolean,
    accion: ( numeroTexto: string ) => void;
}

export const BotonCalc = ({ texto, color = '#9B9B9B', textColor = 'white', ancho = false, accion }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => accion( texto ) }
        >
            <View 
                style={{ 
                    ...styles.boton,
                    backgroundColor: color,
                    width: (ancho) ? 180 : 80
                }}
            >
                <Text style={{
                    ...styles.botonTexto,
                    color: textColor,
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '300'
    }
});