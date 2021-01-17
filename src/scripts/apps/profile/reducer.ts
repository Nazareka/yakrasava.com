import MyProfileReducer, {Action as _MyProfileAction} from './reducers/myProfile'
import AnProfileReducer, {Action as _AnProfileAction} from './reducers/anProfile'


const ProfileReducers = {
    MyProfileReducer: MyProfileReducer,
    AnProfileReducer: AnProfileReducer
}

export default ProfileReducers

export declare namespace ProfileActions {
    export type MyProfileAction = _MyProfileAction
    export type AnProfileAction = _AnProfileAction
}