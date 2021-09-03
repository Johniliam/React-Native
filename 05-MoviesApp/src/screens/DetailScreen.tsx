import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import { Text, View, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ( { route, navigation }: Props ) => {
    
    const movie = route.params
    const uri = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    
    const { cast, isLoading, movieFull } = useMoviesDetails( movie.id );

    return (
        
        <ScrollView>
            <View style={ styles.imageContainer }>
                <View style={ styles.imageBorder } >
                    <Image
                        source={{ uri }}
                        style= { styles.posterImage }
                    />
                </View>
            </View>

            <View style={ styles.detailsMargin }>
                <Text style={ styles.subTitle }>{ movie.original_title }</Text>
                <Text style={ styles.title }>{ movie.title }</Text>
            </View>
            <View>
                {
                    isLoading
                        ? <ActivityIndicator size={ 35 } style={{ marginTop: 20 }}/>
                        : <MovieDetails movieFull={ movieFull! } cast={ cast } />
                }
            </View>

            {/* Boton Para cerrar */}
            <View style={ styles.backButton }>
                <TouchableOpacity
                    onPress={ () => navigation.pop()}
                >
                    <Icon
                            color='white'
                            name='arrow-back-outline'
                            size={ 60 }
                    />                
                </TouchableOpacity>
            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
        	height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder:{
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    detailsMargin: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    subTitle: {
        fontSize: 16,
        color: 'grey',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 20,
        left: 5,
    },
});
