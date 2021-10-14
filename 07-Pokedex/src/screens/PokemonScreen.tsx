import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParams } from '../navigator/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params
    const { top } = useSafeAreaInsets()
    const { isLoading, pokemon } = usePokemon(simplePokemon.id)

    return (
        <View style={{ flex: 1 }}>
            {/* HeaderContainer */}
            <View style={[styles.mainCOntainer, { backgroundColor: color, }]}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.backBottomContainer, { top: top + 5 }]}
                    onPress={() => navigation.pop()}
                >
                    <Icon
                        name='arrow-back-outline'
                        color='white'
                        size={35}
                    />
                </TouchableOpacity>
                {/* Nombre del pokemon */}
                <Text
                    style={[styles.pokemonName, { top: top + 50 }]}
                >
                    {simplePokemon.name + '\n'}#{simplePokemon.id}
                </Text>

                {/* Pokebola Blanca */}
                <Image
                    style={[styles.pokebola]}
                    source={require('../assets/pokebola-blanca.png')}
                />
                <FadeInImage
                    uri={simplePokemon.image}
                    style={styles.pokemonImage}
                />
            </View>
            {/* Detalles & Loading */}
            {
                isLoading ? (
                    <View style={styles.loadingIndicator}>
                        <ActivityIndicator
                            color={color}
                            size={50}
                        />
                    </View>

                )
                    : <PokemonDetails pokemon={pokemon} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    mainCOntainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backBottomContainer: {
        position: 'absolute',
        left: 20
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    pokebola: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});