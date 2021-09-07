import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MenuItem } from '../interfaces/appInterfaces'
import { styles } from '../theme/appTheme'
import { FlatListMenuItem } from '../components/FlatListMenuItem';

const menuItems = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    }
]

export const HomeScreen = () => {4

    const { top } = useSafeAreaInsets();

    const renderlistHeader = () => {
        return(
            <View style={{ marginTop: top, marginBottom: 20 }}>
                <Text style={ styles.title}>Opciones de Menu</Text>
            </View>
        )
    }

    const itemSeparator = () => {
        return(
            <View 
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 5,
                    
                }}
            />
        );
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            

            <FlatList
                data={ menuItems }
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } /> }
                keyExtractor={ ( item ) => item.name }
                ListHeaderComponent={ () => renderlistHeader() }
                ItemSeparatorComponent={ itemSeparator }
            />
        </View>
    )
}