import React from 'react'
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { styles } from '../theme/styles';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if ( isLoading ) {
        return(
            <View style={styles.loadingIndicator}>
                <ActivityIndicator color='blue' size={ 100 } />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                {/* Carrousel Principal */}
                <View style={{ height: 440 }}>
                   <Carousel
                       data= { nowPlaying }
                       renderItem={ ({ item }: any) => <MoviePoster movie={ item }/> }
                       sliderWidth= { windowWidth }
                       itemWidth= { 300 }
                       inactiveSlideOpacity={1}
                   />
                </View>

                {/* Peliculas */}
                <HorizontalSlider title={'Populares'} movies={ popular } />
                <HorizontalSlider title={'Mejor Calificadas'} movies={ topRated } />
                <HorizontalSlider title={'Proximamente'} movies={ upComing } />

            </View>

        </ScrollView>
    )
}
