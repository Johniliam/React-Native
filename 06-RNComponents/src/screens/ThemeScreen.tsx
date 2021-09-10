import React, { useContext } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ThemeScreen = () => {
    
    const { setDarkTheme, setDefaultTheme, theme: { colors } } = useContext(ThemeContext)
    
    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Theme' />
            
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity 
                    activeOpacity={ 0.8 }
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}
                    onPress={ setDarkTheme }
                    >    
                    <Text style={{
                        color: colors.text,
                        textAlign: 'center',
                        fontSize: 22,
                    }}>
                        Dark
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={ 0.8 }
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}
                    onPress={ setDefaultTheme }
                    >    
                    <Text style={{
                        color: colors.text,
                        textAlign: 'center',
                        fontSize: 22,
                    }}>
                        Ligth
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
