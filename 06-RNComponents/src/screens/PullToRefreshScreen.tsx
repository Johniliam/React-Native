import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl, ToastAndroid } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
    
    const [refreshing, setRefreshing] = useState(false)

    const [data, setData] = useState<string>()

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
                    progressBackgroundColor='purple' //background of refresher
                    colors={ ['white', 'red', 'blue'] } //sequence of colors in the refresh
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
