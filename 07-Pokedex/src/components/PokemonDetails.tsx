import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { PokemonInfo } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonInfo
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={[StyleSheet.absoluteFillObject]}>
            <View style={[styles.container, { marginTop: 370 }]}>
                {/* Types y peso */}
                <Text style={styles.title}>TIPOS</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text style={[styles.regularText, { marginRight: 10 }]} key={type.name}>{type.name}</Text>
                        ))
                    }
                </View>

                {/* Peso */}
                <Text style={[styles.title]}>PESO</Text>
                <Text style={[styles.regularText]}>{(pokemon.weight / 2.2046).toString().split('.')[0]} Kg</Text>

            </View>

            {/* Sprites */}
            <View style={styles.container}>
                <Text style={styles.title}>SPRITES</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.spriteScroll}>
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprites}
                />
            </ScrollView>

            {/* Habilidades */}
            <View style={styles.container}>
                <Text style={styles.title}>HABILIDADES BASE</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text style={[styles.regularText, { marginRight: 10 }]} key={ability.name}>{ability.name}</Text>
                        ))
                    }
                </View>
            </View>

            {/* Moves */}
            <View style={styles.container}>
                <Text style={styles.title}>MOVIMIENTOS</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text style={[styles.regularText, { marginRight: 10 }]} key={move.name}>{move.name}</Text>
                        ))
                    }
                </View>
            </View>

            {/* Stats */}
            <View style={styles.container}>
                <Text style={styles.title}>STATS</Text>
                <View>
                    {
                        pokemon.stats.map((stat, i) => (
                            <View key={stat.stat.name + i} style={{ flexDirection: 'row' }}>
                                <Text style={[styles.regularText, { width: 150 }]} key={stat.stat.name}>{stat.stat.name}</Text>
                                <Text style={[styles.regularText, { fontWeight: 'bold' }]}>{stat.base_stat}</Text>
                            </View>
                        ))
                    }
                </View>

                {/* Sprite Final */}
                <View style={{ marginTop: 30, marginBottom: 20, alignItems: 'center' }}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprites}
                    />
                </View>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20
    },
    regularText: {
        fontSize: 19
    },
    spriteScroll: {

    },
    basicSprites: {
        height: 100,
        width: 100
    }
});