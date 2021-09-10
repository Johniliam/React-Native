import { FadeInFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import React, { useContext, useRef } from 'react';
import {Animated, Button, Easing, StyleSheet, Text, View} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
    
    const { opacity, position, fadeIn, fadeOut, startMove } = useAnimation();

    const { theme:{ colors } } = useContext(ThemeContext)

    return (
        <View style={ styles.container }>
            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.card,
                opacity,
                transform: [{
                    translateX: position
                }]
            }}
            
            />
            <View>
                <View style={ styles.button }>
                    <Button
                        title='FadeIn'
                        onPress={ () => {
                            fadeIn();
                            startMove(-100, 0, 800)
                        } }
                        color={ colors.primary }
                    />
                </View>

                <View style={ styles.button }>
                    <Button
                        title='FadeOut'
                        onPress={ () => {
                            fadeOut();
                            startMove(0, -100, 800)
                        }}
                        color={ colors.primary }
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    purpleBox:{
        width: 150,
        height: 150,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        marginTop: 10
    },
});