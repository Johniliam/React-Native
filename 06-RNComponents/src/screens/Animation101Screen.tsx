import { FadeInFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import React, { useRef } from 'react';
import {Animated, Button, Easing, StyleSheet, Text, View} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
    
    const { opacity, position, fadeIn, fadeOut, startMove } = useAnimation();

    return (
        <View style={ styles.container }>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity,
                transform: [{
                    translateY: position
                }]
            }}
            
            />
            <Button
                title='FadeIn'
                onPress={ () => {
                    fadeIn();
                    startMove(-100, 0, 800)
                } }
            />

            <Button
                title='FadeOut'
                onPress={ () => {
                    fadeOut();
                    startMove(0, -100, 800)
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    purpleBox:{
        backgroundColor: 'purple',
        width: 150,
        height: 150,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});