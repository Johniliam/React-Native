import { createStackNavigator } from '@react-navigation/stack'

import React from 'react';

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

export const StackNavigator = () => {
    
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
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
        </Stack.Navigator>
    )
}
