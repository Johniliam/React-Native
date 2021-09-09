import React, { useState } from 'react';
import {ActivityIndicator, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { FadeImage } from '../components/FadeImage';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5])

    const loadMore = () => {
        const newArray: number[] = [];
        for( let i = 0; i < 5; i++ ){
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500 );
    }

    const renderItem = ( item: number ) => {
        return (
            <FadeImage 
                uri={ `https://picsum.photos/id/${ item }/1920/1080` }
                style={{
                    width: '100%',
                    height: 400,
                    //borderRadius: 10
                }}    
            />
            
        );
    }
    
    return (

        <View>
            <FlatList
                data={ numbers }
                keyExtractor={ (item) => item.toString() }
                renderItem={ ({ item }) => renderItem(item) }

                ListHeaderComponent={ () => (
                    <View style={{ marginHorizontal: 20 }}>
                        <HeaderTitle title='Infinite Scroll'/>
                    </View>
                ) }
            
                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.5 }

                ListFooterComponent={ () => ( 
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ActivityIndicator size={ 25 } color='#5856D6'/> 
                    </View>
                 ) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem:{
        backgroundColor: 'green',
        height: 150
    }
});