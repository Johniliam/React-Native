import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import { Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {


  return Platform.OS === 'ios' ? <TabsIOS/> : <TabsAndroid/>
}
 //Config Android
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName= '';
          switch( route.name ){
            case 'Tab1Screen':
              iconName = 'battery-full-outline'
            break;

            case 'TopTabNavigation':
              iconName = 'battery-half-outline'
              break;
              
              case 'StackNavigator':
              iconName = 'battery-dead-outline'
            break;
          }

          return <Text><Icon name={ iconName } size={ 25 } color={ color } /></Text>
        },
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab 1'}} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="TopTabNavigation" options={{title: 'TopNav'}} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}

 //Config IOS
const BottomTabIos = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({ color, focused, size }) => {

          let iconName= '';
          switch( route.name ){
            case 'Tab1Screen':
              iconName = 'battery-full-outline'
            break;

            case 'TopTabNavigation':
              iconName = 'battery-half-outline'
              break;
              
              case 'StackNavigator':
              iconName = 'battery-dead-outline'
            break;
          }

          return <Text><Icon name={ iconName } size={ size } color={ color } /></Text>
        },
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        }
      })}
      >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab 1', tabBarIcon: ( props ) => <Text style={{color: props.color}}>T1</Text>}} component={ Tab1Screen } /> */}
      <BottomTabIos.Screen name="Tab1Screen" options={{title: 'Tab 1'}} component={ Tab1Screen } />
      <BottomTabIos.Screen name="TopTabNavigation" options={{title: 'TopNav'}} component={ TopTabNavigator } />
      <BottomTabIos.Screen name="StackNavigator" options={{title: 'Stack'}} component={ StackNavigator } />
    </BottomTabIos.Navigator>
  );
}