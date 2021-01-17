import { Actions, AccessType } from './enums'
import { AuthState } from './state'


const INITIAL_STATE: AuthState = {
    refreshed: false,
    fetchingCurrentUser: false,
    profile_id: undefined,
    accessType: undefined,
    networkError: false,
    isWebSocketConnected: false
}

export interface Action {
    type: Actions,
    payload?: AuthState["profile_id"]
}

export default (state: AuthState = INITIAL_STATE, action: Action): AuthState => {
    switch (action.type) {
        case Actions.FETCH_CURRENT_USER:
            return {
                ...state,
                fetchingCurrentUser: true
            }
        case Actions.FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                refreshed: true,
                fetchingCurrentUser: false,
                profile_id: action.payload || null,
                accessType: action.payload ? AccessType.AUTHORIZED : AccessType.AUTHORIZED_NO_PROFILE
            }
        case Actions.FETCH_CURRENT_USER_FAILED:
            return {
                ...state,
                refreshed: true,
                fetchingCurrentUser: false,
                accessType: AccessType.NOT_REGISTERED
            }
        
        default: 
            return { ...state }
    }
}


