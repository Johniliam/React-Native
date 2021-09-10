import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl, ToastAndroid } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { Theme } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
    
    const [refreshing, setRefreshing] = useState(false)

    const [data, setData] = useState<string>()

    const { theme:{ colors } } = useContext(ThemeContext)

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            ToastAndroid.show('Refreshed', ToastAndroid.SHORT);
            setRefreshing(false);
            setData('Hola Mundo')
        }, 3000)
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    progressBackgroundColor={ colors.text } //background of refresher
                    colors={ [colors.primary] } //sequence of colors in the refresh ['white', 'red', 'blue']
                />
            }
        >
            <View style={ styles.globalMargin }>
                <HeaderTitle title='Pull to Refresh'/>
                {
                    data && <HeaderTitle title={ data } />

                }
            </View>
        </ScrollView>
    );
}
