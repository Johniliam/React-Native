import React, { useContext, useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext, AuthState } from '../context/authContext/AuthContext';

export const ContactScreen = () => {

    const { authState: { isLoggedIn }, signIn } = useContext(AuthContext)

    return (
        <View>
            <Text style={styles.centerTitle} >Contact Screen</Text>

            {
                !isLoggedIn && <Button title='SignIn'onPress={ signIn }/> 
            }

        </View>
    )
}
