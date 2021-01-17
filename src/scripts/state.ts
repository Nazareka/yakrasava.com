import { AuthState } from "./apps/auth/state"
import { AnProfileState, MyProfileState } from "./apps/profile/state"

export interface State {
    auth: AuthState,
    myProfile: MyProfileState,
    anProfile: AnProfileState
}
