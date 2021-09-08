import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/core';

interface Props{
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem:{ name, icon , component} }: Props ) => {
    
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={() => navigation.navigate( component as any ) } // TODO: Aqui
        >
            <View style={ styles.container }>
                <Icon
                    name={ icon }
                    color='#5856D6'
                    size={ 23 }
                />
                <Text style={styles.itemContainer}>
                    { name }
                </Text>

                <Icon
                    name='chevron-forward-outline'
                    color='#5856D6'
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
        fontSize: 19
    },
});