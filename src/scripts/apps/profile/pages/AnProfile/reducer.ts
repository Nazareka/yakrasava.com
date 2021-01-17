
import { AnProfileActions as Actions } from "../../enums"
import { AnProfileState } from "../../state"
import { FullProfileWithRS } from "../../types"

const INITIAL_STATE: null = null

export interface Action {
    type: Actions,
    payload?: FullProfileWithRS
}

export default(state: AnProfileState = INITIAL_STATE, action: Action): AnProfileState => {
    switch (action.type) {
        case Actions.FETCH_FULL_PROFILE_ANOTHER_USER:
            return {
                ...state,
                fetchingProfile: true
            }
        case Actions.FETCH_FULL_PROFILE_ANOTHER_USER_SUCCESS:
            return {
                ...state,
                fetchingProfile: false,
                profile: action.payload
            }
        case Actions.FETCH_FULL_PROFILE_ANOTHER_USER_FAILED:
            return {
                ...state,
                fetchingProfile: false
            }
        default:
            return state !== null ? {...state} : null
    }
}

