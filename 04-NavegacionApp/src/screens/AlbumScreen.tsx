import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/authContext/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumScreen = () => {

    const { authState: { isLoggedIn }, logOut } = useContext(AuthContext)


    return (
        <View>
            <Text style={ styles.centerTitle }>ChatScreen</Text>
            {
                isLoggedIn && <Button title='LogOut'onPress={ logOut }/>
            }

        </View>
    )
}
