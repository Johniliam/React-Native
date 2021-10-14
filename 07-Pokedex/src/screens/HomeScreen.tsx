import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()
    const { simplePokemonList, loadPokemons } = usePokemonPaginated()

    usePokemonPaginated()

    return (
        <>
            <Image
                style={styles.pokebolaBG}
                source={require('../assets/pokebola.png')}
            />

            <View
                style={{ alignItems: 'center' }}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <PokemonCard
                            pokemon={item}
                        />
                    )}

                    // Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10
                        }}>Pokedex</Text>
                    )}

                    //InfiniteScroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={(
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={20}
                            color='grey'
                        />
                    )}
                />
            </View>
        </>
    );
}
