import { AccessType } from "./enums";

export interface AuthState {
    refreshed: boolean,
    fetchingCurrentUser: boolean,
    profile_id?: null | number,
    accessType?: AccessType,
	networkError: boolean,
	isWebSocketConnected: boolean
}