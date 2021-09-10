import React, { useContext } from 'react';
import {Alert, Button, StyleSheet, Text, ToastAndroid, View} from 'react-native';

import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const AlertScreen = () => {

    const { theme:{ colors } } = useContext(ThemeContext)

    const showAlert = () => {
        Alert.alert(
            'Titulo',
            'Mensaje Alerta',
            [
                {
                    text: 'Cancelar',
                    onPress: () => {},
                    style: 'cancel',
                },
                {
                    text: 'Aceptar',
                    onPress: () => ToastAndroid.show('Presiono Aceptar', ToastAndroid.SHORT),
                }
            ]
            , {
                cancelable: true,
                onDismiss: () => ToastAndroid.show('Presiono Afuera', ToastAndroid.SHORT),
            }
        )
    }

    const showPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
             { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder',
            }
        );
    }

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Alert'/>

            <Button
                title='Mostrar alerta'
                onPress={ showAlert }
                color={ colors.primary }
            />
            
            <View style={{ height: 10 }}></View>

            <Button
                title='Mostrar Prompt'
                onPress={ showPrompt }
                color={ colors.primary }
            />

        </View>
    );
}