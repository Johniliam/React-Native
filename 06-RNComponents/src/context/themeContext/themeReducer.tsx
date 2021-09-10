import { Theme, DefaultTheme } from '@react-navigation/native';

type ThemeAction = 
    | { type: 'set_default_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'default' | 'dark',
    dividerColor: string,
}

export const defaultTheme: ThemeState = {
    currentTheme: 'default',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.5)',
    colors: {
        primary: '#50B4D8',
        background: 'white',
        card: '#75CEDB',
        text: 'black',
        border: 'black',
        notification: 'teal',
    },
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255,255,255,0.5)',
    colors: {
        primary: '#5856D6',
        background: 'black',
        card: 'grey',
        text: 'white',
        border: 'white',
        notification: 'yellow',
    },
}

export const themeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {
    switch (action.type) {
        case 'set_default_theme':
            return { ...defaultTheme }
    
        case 'set_dark_theme':
            return { ...darkTheme }

        default:
            return state
    }
}