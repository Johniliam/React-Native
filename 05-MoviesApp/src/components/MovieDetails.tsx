import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import currencyFormater from 'currency-formatter'

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActorItem } from './ActorItem';
import { FlatList } from 'react-native';

interface Props {
    movieFull: MovieFull,
    cast: Cast[],
}

export const MovieDetails = ( { movieFull, cast } : Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name= 'star-outline'
                        color='grey'
                        size={ 16 }
                    />

                    <Text style={{ marginLeft: 2 }}>{ movieFull.vote_average }</Text>

                    <Text style={{ marginLeft: 5 }}>
                         - { movieFull.genres.map( g => g.name ).join(', ') }
                    </Text>
                </View>
                
                {/* Historia */}
                <Text style={ styles.info }>Historia</Text>
                <Text style={{ fontSize: 16 }}>{ movieFull.overview }</Text>

                {/* Presupueto */}
                <Text style={ styles.info }>Presupuesto</Text>
                <Text>{ currencyFormater.format( movieFull.budget, { code:'USD' }) }</Text>

            </View>

            {/* Casting */}
                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ ...styles.info, marginHorizontal: 20 }}>Actores</Text>
                    <FlatList
                        data={ cast }
                        keyExtractor={ (item) => item.id.toString() }
                        renderItem={ ({ item }) => <ActorItem actor={ item } /> }
                        horizontal={ true }
                        showsHorizontalScrollIndicator={ false }
                        style={{ marginTop: 10, height: 70}}
                    />
                    
                    {/* <ActorItem actor={ cast[0] } /> */}
                </View>
        </>
    )
}

const styles = StyleSheet.create({
    info: {
        fontSize: 20, 
        marginTop: 10, 
        fontWeight: 'bold'
    },
});