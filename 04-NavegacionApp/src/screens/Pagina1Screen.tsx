//import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation } : Props ) => {

    useEffect(() => {
        
        navigation.setOptions({
            headerLeft: () =>
            <TouchableOpacity
                onPress={ () => navigation.toggleDrawer() }
            >
                <Text style={ styles.globalMargin }><Icon name='menu-outline' size={ 25 } color={ colores.primary } /></Text>
            </TouchableOpacity> 
        })

    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button
                title='Ir a Pagina 2'
                onPress={ () => navigation.navigate( 'Pagina2Screen' ) }
            />

            <Text style={ styles.buttonsHeader }>Navegar con Argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.Boton,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={ () => navigation.navigate( 'PersonaScreen', {
                        id: 1,
                        nombre:'Pedro'
                    } ) }
                >
                    <Icon name='man-outline' size={ 50 } color='white' />
                    <Text style={ styles.BotonTexto }>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.Boton,
                        backgroundColor: '#FF9427',
                    }}
                    onPress={ () => navigation.navigate( 'PersonaScreen', {
                        id: 2,
                        nombre:'Suzana'
                    } ) }
                >
                    <Icon name='woman-outline' size={ 50 } color='white' />
                    <Text style={ styles.BotonTexto }>Suzana</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
