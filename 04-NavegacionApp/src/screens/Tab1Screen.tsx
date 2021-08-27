import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1SceenEffect')
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Iconos </Text>

            <Text>
                <Icon name="airplane-outline" size={ 80 } color={colores.primary} />
                <Icon name="american-football-outline" size={ 80 } color={colores.primary} />
                <Icon name="archive-outline" size={ 80 } color={colores.primary} />
                <Icon name="build-outline" size={ 80 } color={colores.primary} />
                <Icon name="boat-outline" size={ 80 } color={colores.primary} />
                <Icon name="attach-outline" size={ 80 } color={colores.primary} />
                <Icon name="chatbubble-outline" size={ 80 } color={colores.primary} />
            </Text>
        </View>
    )
}
