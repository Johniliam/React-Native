import React, { useContext, useState } from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {

    const { form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false,
    })

    const { theme:{ colors, dividerColor } } = useContext(ThemeContext)

    const { isSuscribed } = form;

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        >
            <ScrollView>
                <View style={ styles.globalMargin }>
                    <TextInput
                        style={{ ...stylesScreen.inputStyle, borderColor: colors.primary, color: colors.text}}
                        placeholder='Ingrese su Nombre'
                        placeholderTextColor={ dividerColor }
                        autoCorrect={ false }
                        autoCapitalize='words'
                        onChangeText={ (value) => onChange( value, 'name' )}
                    />

                    <TextInput
                        style={{ ...stylesScreen.inputStyle, borderColor: colors.primary, color: colors.text}}
                        placeholder='Ingrese su Email'
                        placeholderTextColor={ dividerColor }
                        autoCorrect={ false }
                        autoCapitalize='none'
                        onChangeText={ (value) => onChange( value, 'email' )}
                        keyboardType='email-address'
                    />

                    <View style={ stylesScreen.switchRow }>
                        <Text style={{
                            ...stylesScreen.switchText,
                            color: colors.text
                        }}>isActive</Text>
                        <CustomSwitch isOn={ isSuscribed } onChage={ (value) => onChange( value, 'isSuscribed' )}  />
                    </View>

                    <HeaderTitle title={ JSON.stringify( form, null, 3) }/>
                    <HeaderTitle title={ JSON.stringify( form, null, 3) }/>


                    <TextInput
                        style={{ ...stylesScreen.inputStyle, borderColor: colors.primary, color: colors.text}}
                        placeholder='Ingrese su Telefono'
                        placeholderTextColor={ dividerColor }
                        onChangeText={ (value) => onChange( value, 'phone' )}
                        keyboardType='phone-pad'
                    />
                </View>
                <View style={{ marginVertical: 100 }}></View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
const stylesScreen = StyleSheet.create({
    inputStyle:{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10, 
        borderRadius: 10,
        marginVertical: 10,
    },
    switchText:{
        fontSize: 25
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
});