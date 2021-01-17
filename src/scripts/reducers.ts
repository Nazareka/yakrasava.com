import { combineReducers } from 'redux'

import AuthReducer, {Action as AuthAction} from './apps/auth/reducer'

import { State } from "./typescript/state"

let appReducer = combineReducers({
    auth: AuthReducer,
})

type Action = AuthAction

export default (state: State | undefined, action: Action) => {
    return appReducer(state, action)
}

