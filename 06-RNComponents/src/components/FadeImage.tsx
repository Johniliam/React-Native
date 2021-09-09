import React, { useState } from 'react';
import {ActivityIndicator, Animated, ImageStyle, StyleProp, StyleSheet, Text, View} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string,
    style?: StyleProp<ImageStyle>, 
}

export const FadeImage = ({ uri, style }: Props) => {
    
    const { opacity, fadeIn } = useAnimation()
    const [isLoading, setIsLoading] = useState(false)

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            {
                isLoading && 
                        <ActivityIndicator 
                            style={{ position: 'absolute' }} 
                            color='#5856D6' 
                            size={ 30 }     
                        />
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={ finishLoading }
                style={{
                    ...style as any,
                    opacity,
                }}
            />
        </View>
    );
}
