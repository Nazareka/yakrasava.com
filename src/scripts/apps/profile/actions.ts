import userServiceInstance from "../../services/UserService";
import store from "../../store";
import { MyProfileActions, AnProfileActions } from "./enums"


export const fetchFullProfileCurrentUser = async (): Promise<any> => {
    store.dispatch({
        type: MyProfileActions.FETCH_FULL_PROFILE_CURRENT_USER
    })
    try {
        const response = await userServiceInstance.getFullProfileCurrentUser();
        store.dispatch({
            type: MyProfileActions.FETCH_FULL_PROFILE_CURRENT_USER_SUCCESS,
            payload: JSON.parse(response.data) //fix it
        })
    } catch(error) {
        console.log(error, 'error');
        store.dispatch({
            type: MyProfileActions.FETCH_FULL_PROFILE_CURRENT_USER_FAILED
        }) 
    }
}

export const fetchFullProfileByProfileId = async (profile_id: string): Promise<any> => {
    store.dispatch({
        type: AnProfileActions.FETCH_FULL_PROFILE_ANOTHER_USER
    })
    try {
        const response = await userServiceInstance.getFullProfileByProfileId_authed(profile_id)
        store.dispatch({
            type: AnProfileActions.FETCH_FULL_PROFILE_ANOTHER_USER,
            payload: response.data
        })
    } catch(error) {
        console.log(error, 'error');
        store.dispatch({
            type: AnProfileActions.FETCH_FULL_PROFILE_ANOTHER_USER
        }) 
    }
}

export const CreateProfile = async (dataProfile: any): Promise<any> => {
    try {
        const response = await userServiceInstance.createProfile(dataProfile)
        window.location.href = process.env.REACT_APP_FRONT_URL || 'https://localhost:3000'
        console.log('response', response) 
    } catch(error) {
        console.log('error', error) 
        if (error.data.response === 'profile is not valid') {
            alert("server error. Please reload page")
        } else if (error.data.response === 'validation_error') {
            alert("server error. Please reload page")
        }
    }
}
