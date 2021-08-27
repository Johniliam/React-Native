import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { Pagina3Screen } from './Pagina3Screen';

export const Pagina2Screen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Back'
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={styles.title}>Pagina2Screen</Text>
            <Button
                title='Ir a Pagina 3'
                onPress={ () => navigation.dispatch(
                    CommonActions.navigate({name: 'Pagina3Screen'})
                )}
            />
        </View>
    )
}
