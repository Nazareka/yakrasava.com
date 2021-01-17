import store from '../../store'
import userServiceInstance from '../../services/UserService'
import { Actions } from './enums'


export const fetchCurrentUser = async (): Promise<any> => {
    store.dispatch({
        type: Actions.FETCH_CURRENT_USER
    })
    try {
        const response = await userServiceInstance.getProfileIdCurrentUser()
        store.dispatch({
            type: Actions.FETCH_CURRENT_USER_SUCCESS,
            payload: response.data.user.profile_id
        })
    } catch {
        store.dispatch({
            type: Actions.FETCH_CURRENT_USER_FAILED
        })        
    }
}
