import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top: paddingTop } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor:'white'
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle:{
          backgroundColor: colores.primary
        },
        tabBarStyle:{
          elevation: 0,
          shadowColor: 'transparent'
        },
        tabBarIcon: ({ color, focused }) => {

          let iconName= '';
          switch( route.name ){
            case 'ChatScreen':
              iconName = 'chatbubble-ellipses-outline'
            break;

            case 'ContactScreen':
              iconName = 'people-outline'
              break;
              
              case 'AlbumScreen':
              iconName = 'images-outline'
            break;
          }

          return <Text><Icon name={ iconName } size={ 25 } color={ color } /></Text>
        },
      })}
    >
      <Tab.Screen name="ChatScreen" component={ ChatScreen } />
      <Tab.Screen name="ContactScreen" component={ ContactScreen } />
      <Tab.Screen name="AlbumScreen" component={ AlbumScreen } />
    </Tab.Navigator>
  );
}