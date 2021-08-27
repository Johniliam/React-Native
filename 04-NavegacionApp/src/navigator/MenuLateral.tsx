import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
//import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,  // Oculta la hamburguesa
      }}
      drawerContent={ (props) => <DrawerContent { ...props }/> } // desestructurar props
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingScreen" component={ SettingScreen } />
    </Drawer.Navigator>
  );
}

const DrawerContent = ( { navigation }: DrawerContentComponentProps ) => {

  return (

    <DrawerContentScrollView>
      {/* Avatar Container */}
      <View style={ styles.avatarContainer }>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          }}
          style={ styles.avatar }
        />
      </View>

      {/* Menu Options */}
      <View style={ styles.menuContainer }>

        <TouchableOpacity style={{
          ...styles.menuButton,
          backgroundColor:'#A7D9C9'
        }} 
          onPress={ () => navigation.navigate('Tabs') }
        >
          <Text style={ styles.menuText }><Icon name='map-outline' size={ 25 } color={ colores.primary } /> Navegacion Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          ...styles.menuButton,
          backgroundColor:'#B7EAF7'
        }} 
          onPress={ () => navigation.navigate('SettingScreen') }
        >
          <Text style={ styles.menuText }><Icon name='settings-outline' size={ 25 } color={ colores.primary } /> Ajustes</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>

  );
}