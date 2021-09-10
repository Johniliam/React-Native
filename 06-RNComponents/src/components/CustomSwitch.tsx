import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean,
    onChage: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChage }: Props) => {

    const { theme:{ colors } } = useContext(ThemeContext)

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled( !isEnabled);
        onChage( !isEnabled )
    };

    return (
        <Switch
                trackColor={{ false: "#D9D9DB", true: colors.primary }}
                thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
    )
}
