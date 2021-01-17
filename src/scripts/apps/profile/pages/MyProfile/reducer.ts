import { MyProfileActions as Actions } from "../../enums"
import { MyProfileState } from "../../state"
import { FullProfile } from "../../types"

const INITIAL_STATE: null = null

export interface Action {
    type: Actions,
    payload?: FullProfile
}

export default(state: MyProfileState | null = INITIAL_STATE, action: Action): MyProfileState => {
    switch (action.type) {
        case Actions.FETCH_FULL_PROFILE_CURRENT_USER:
            return {
                ...state,
                fetchingProfile: true
            }
        case Actions.FETCH_FULL_PROFILE_CURRENT_USER_SUCCESS:
            return {
                ...state,
                fetchingProfile: false,
                profile: action.payload
            }
        case Actions.FETCH_FULL_PROFILE_CURRENT_USER_FAILED:
            return {
                ...state,
                fetchingProfile: false
            }
        default:
            return state !== null ? {...state} : null
    }
}


