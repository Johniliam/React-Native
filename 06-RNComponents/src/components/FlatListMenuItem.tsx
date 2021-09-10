import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '../context/themeContext/ThemeContext';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props{
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem:{ name, icon , component} }: Props ) => {
    
    const { theme: { colors } } = useContext( ThemeContext );

    const navigation = useNavigation();
    // const { colors } = useTheme();
    
    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={() => navigation.navigate( component as any ) } // TODO: Aqui
        >
            <View style={ styles.container }>
                <Icon
                    name={ icon }
                    color={ colors.primary }
                    size={ 23 }
                />
                <Text style={{
                    ...styles.itemContainer,
                    color: colors.text
                }}>
                    { name }
                </Text>

                <Icon
                    name='chevron-forward-outline'
                    color={ colors.primary }
                    size={ 23 }
                    style={{ position: 'absolute', right: 5 }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemContainer:{
        marginLeft: 10,
        fontSize: 19,
    },
});