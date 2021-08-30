import { AuthState } from './AuthContext';

type AuthAction= 
    | { type: 'signIn' }
    | { type: 'logOut' }
    | { type: 'changeUsername', payload: string }
    | { type: 'favIcon', payload: string };

// genera un nuevo estado
export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    
    switch ( action.type ) {
        case 'signIn':
            return{
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'logOut':
            return{
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined,
            }
        case 'changeUsername':
            return{
                ...state,
                username: action.payload,
            }
        case 'favIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }

        default:
            return state;
    }
    
}