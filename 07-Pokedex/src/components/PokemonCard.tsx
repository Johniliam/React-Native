import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { getImageColors } from '../helpers/getColors';
import { useNavigation } from '@react-navigation/core';
import { PokemonScreen } from '../screens/PokemonScreen';

const windowWidth = Dimensions.get('window').width

interface PokemonCardProps {
    pokemon: SimplePokemon;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {

    const [bgColor, setBgColor] = useState('grey')

    const isMounted = useRef(true)

    const navigation = useNavigation<any>()

    const getPosterColors = async () => {
        const [primaryColor = 'green'] = await getImageColors(pokemon.image);
        setBgColor(primaryColor)
    }

    useEffect(() => {
        if (isMounted) getPosterColors()
        return () => {
            isMounted.current = false //On destroy 
        }
    }, [])

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { navigation.navigate('PokemonScreen', { simplePokemon: pokemon, color: bgColor }) }}
        >
            <View style={[styles.cardContainer, { width: windowWidth * 0.4, backgroundColor: bgColor }]}>
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>
                <FadeInImage
                    uri={pokemon.image}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 20,
        marginBottom: 25,
        borderRadius: 10,
        height: 120,
        width: 160,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -25,
        right: -25,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5
    },
});