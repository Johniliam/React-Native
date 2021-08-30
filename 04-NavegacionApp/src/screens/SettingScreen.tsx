import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colores } from '../theme/appTheme';
import { AuthContext, AuthState } from '../context/authContext/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {

    const insets = useSafeAreaInsets(); //hook para safe area (usualmete para ios)

    const { authState } = useContext( AuthContext )

    return (
        <View style={{ 
            ...styles.globalMargin,
            marginTop: insets.top 
        }}>
            <Text style={ styles.centerTitle }>Settings</Text>

            <Text>{ JSON.stringify( authState, null, 4 ) }</Text>

            {
                //id authState.favoriteIcon existe entonces regresa...
                authState.favoriteIcon && (
                    <Text>
                        <Icon 
                            name={ authState.favoriteIcon } 
                            size={ 150 }
                            color={ colores.primary }
                        />
                    </Text>
                )
            }
        </View>
    )
}
