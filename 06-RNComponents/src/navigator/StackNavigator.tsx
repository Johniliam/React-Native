import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import { ThemeContext } from '../context/themeContext/ThemeContext';

import { AlertScreen } from '../screens/AlertScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { HomeScreen } from '../screens/HomeScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ThemeScreen } from '../screens/ThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

export const StackNavigator = () => {
    
    const Stack = createStackNavigator();

    const { theme } = useContext( ThemeContext );

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <NavigationContainer 
                theme={ theme }
            >
                <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        //backgroundColor: 'white'
                    }
                }}>
                    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                    <Stack.Screen name='Animation101Screen' component={Animation101Screen}/>
                    <Stack.Screen name='Animation102Screen' component={Animation102Screen}/>
                    <Stack.Screen name='SwitchScreen' component={SwitchScreen}/>
                    <Stack.Screen name='AlertScreen' component={AlertScreen}/>
                    <Stack.Screen name='TextInputScreen' component={TextInputScreen}/>
                    <Stack.Screen name='PullToRefreshScreen' component={PullToRefreshScreen}/>
                    <Stack.Screen name='CustomSectionListScreen' component={CustomSectionListScreen}/>
                    <Stack.Screen name='ModalScreen' component={ModalScreen}/>
                    <Stack.Screen name='InfiniteScrollScreen' component={InfiniteScrollScreen}/>
                    <Stack.Screen name='SlidesScreen' component={SlidesScreen}/>
                    <Stack.Screen name='ThemeScreen' component={ThemeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}
