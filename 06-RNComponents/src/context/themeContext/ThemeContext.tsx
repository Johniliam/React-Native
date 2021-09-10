import React, { useReducer } from "react";
import { createContext } from "react";
import { themeReducer, ThemeState, defaultTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState, //TODO: change type
    setDarkTheme: () => void,
    setDefaultTheme: () => void,
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: Props) => {
    
    const [theme, dispatch] = useReducer(themeReducer, defaultTheme ) //TODO: Leer el tema global...

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