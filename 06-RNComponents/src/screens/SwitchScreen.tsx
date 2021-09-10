import React, { useContext, useState } from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
    
    const { theme:{ colors } } = useContext(ThemeContext);

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    })

    const { isActive, isHappy, isHungry } = state;

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value,
        })
    }

    return (
        <View style={styles.container}>

            <HeaderTitle title='Switches'/>
            <View style={ styles.switchRow }>
                <Text style={{
                    ...styles.switchText,
                    color: colors.text
                }}>isActive</Text>
                <CustomSwitch isOn={ isActive } onChage={ (value) => onChange( value, 'isActive' )}  />
            </View>
            <View style={ styles.switchRow }>
                <Text style={{
                    ...styles.switchText,
                    color: colors.text
                }}>isHungry</Text>
                <CustomSwitch isOn={ isHungry } onChage={ (value) => onChange( value, 'isHungry' )}  />
            </View>
            <View style={ styles.switchRow }>
                <Text style={{
                    ...styles.switchText,
                    color: colors.text
                }}>ishappy</Text>
                <CustomSwitch isOn={ isHappy } onChage={ (value) => onChange( value, 'isHappy' )}  />
            </View>

            <View style={ styles.switchRow }>
                <Text style={{
                    ...styles.switchText,
                    color: colors.text
                }}>
                    { JSON.stringify( state, null, 5 ) }
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,

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