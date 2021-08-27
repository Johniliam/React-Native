import React from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingScreen = () => {

    const insets = useSafeAreaInsets(); //hook para safe area (usualmete para ios)

    return (
        <View style={{ 
            ...styles.globalMargin,
            marginTop: insets.top 
        }}>
            <Text style={{
                fontSize: 40,
                fontWeight: 'bold',
                marginTop: 20,
                textAlign: 'center',
            }}>
                Settings
            </Text>
        </View>
    )
}
