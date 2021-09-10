import React, { useReducer,createContext, useEffect } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { themeReducer, ThemeState, defaultTheme, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setDefaultTheme: () => void,
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: Props) => {

    const colorScheme = useColorScheme();
    
    const [theme, dispatch] = useReducer(
        themeReducer, 
        (Appearance.getColorScheme() === 'dark') 
            ? darkTheme 
            : defaultTheme 
    )//TODO: Leer el tema global...

    // SOLO FUNCIONA EN IOS
    // useEffect(() => {
        
    //     (colorScheme === 'light')
    //         ? setDefaultTheme()
    //         : setDarkTheme;

    // }, [colorScheme])

    useEffect(() => {
        
        AppState.addEventListener( 'change', ( status ) => {
            if ( status === 'active') {
                ( Appearance.getColorScheme() === 'light')
                    ? setDefaultTheme()
                    : setDarkTheme()
            }
        } )

        AppState.addEventListener( 'focus', ( status ) => {
            Appearance.getColorScheme() === 'light'
                    ? setDefaultTheme()
                    : setDarkTheme()
        } )

    }, [])

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
        console.log('setDarkTheme')
    }

    const setDefaultTheme = () => {
        dispatch({ type: 'set_default_theme' })
        console.log('setDefaultTheme')
    }

    return (
        <ThemeContext.Provider value={{ 
            theme,
            setDarkTheme,
            setDefaultTheme,
         }}>
            { children }
        </ThemeContext.Provider>
    )
}