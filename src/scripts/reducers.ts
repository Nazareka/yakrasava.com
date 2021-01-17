import { combineReducers } from 'redux'

import AuthReducer, {Action as AuthAction} from './apps/auth/reducer'
import ProfileReducers, { ProfileActions } from './apps/profile/reducer'

import { State } from "./typescript/state"

let appReducer = combineReducers({
    auth: AuthReducer,
    myProfile: ProfileReducers.MyProfileReducer,
    anProfile: ProfileReducers.AnProfileReducer
})

type Action = (
    AuthAction 
    | ProfileActions.MyProfileAction
    | ProfileActions.AnProfileAction
)

export default (state: State | undefined, action: Action) => {
    return appReducer(state, action)
}

