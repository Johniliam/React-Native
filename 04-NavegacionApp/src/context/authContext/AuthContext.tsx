
import React, { useReducer } from "react";

import { createContext } from "react"
import { authReducer } from "./authReducer";

// Definir que informacion tendre aqui
export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string,
}

// Estado Inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
    logOut: () => void,
    changeUsername: (username: string) => void;
    changeFavIcon: (iconName: string) => void;
}

//Crear contexto
export const AuthContext = createContext( {} as AuthContextProps );

//Componente proveedor del estado
export const AuthProvider: React.FC = ({ children }) => {

    //dispatch es para modificar el estado
    const [authState, dispatch] = useReducer( authReducer, authInitialState )

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const logOut = () => {
        dispatch({ type: 'logOut' })
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    const changeFavIcon = ( iconName: string ) => {
        dispatch({ type: 'favIcon', payload: iconName })
    }

    return (
        <AuthContext.Provider 
            value={{
                authState,
                signIn,
                changeFavIcon,
                changeUsername,
                logOut,
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}