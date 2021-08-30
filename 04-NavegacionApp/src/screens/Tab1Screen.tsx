import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1SceenEffect')
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Iconos </Text>

            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="american-football" />
                <TouchableIcon iconName="archive-outline" />
                <TouchableIcon iconName="build-outline" />
                <TouchableIcon iconName="boat-outline" />
                <TouchableIcon iconName="attach-outline" />
                <TouchableIcon iconName="chatbubble-outline" />
            </Text>
        </View>
    )
}
