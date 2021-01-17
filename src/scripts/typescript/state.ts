import { AccessType } from "../apps/auth/enums"

export interface AuthState {
    refreshed: boolean,
    fetchingCurrentUser: boolean,
    profile_id?: null | number,
    accessType?: AccessType,
	networkError: boolean,
	isWebSocketConnected: boolean
}

// export interface InitialAuthState {
//     refreshed: boolean,
//     fetchingCurrentUser: boolean,
//     profile_id?: null | number,
//     accessType?: AccessType,
// 	networkError: boolean,
// 	isWebSocketConnected: boolean
// }

export interface State {
    auth: AuthState
}
