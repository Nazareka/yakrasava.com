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
    } catch(error) {
        console.log(error)
        store.dispatch({
            type: Actions.FETCH_CURRENT_USER_FAILED
        })        
    }
}


		// const fetchData = async (): Promise<void> => {
		// 	try {
		// 		const response = await userServiceInstance.getProfileIdCurrentUser()
		// 		console.log(response)
		// 		setAuth({
		// 			...auth,
		// 			isAuthOver: true,
		// 			isLoggedIn: true,
		// 			profile_id: response.data.user.profile_id,
		// 		})
		// 	} catch {
		// 		const freshToken = localStorage.getItem('refresh') 
		//       	const dataFreshToken = {
		//         	refresh: freshToken
		// 		}
		// 		try {
		// 			const response = await userServiceInstance.getAccessToken(dataFreshToken)
		// 			localStorage.setItem('access', response.data.access)
		// 			localStorage.setItem('refresh', response.data.refresh)
		// 			userServiceInstance.updateAccessToken()
		// 			try { // success on again access
		// 				const response = await userServiceInstance.getProfileIdCurrentUser()
		// 				console.log(response, 'again')
		// 				setAuth({
		// 					...auth,
		// 					isAuthOver: true,
		// 					isLoggedIn: true,
		// 					profile_id: response.data.user.profile_id
		// 				})
		// 			} catch { // unexpected error
		// 				setAuth({
		// 					...auth,
		// 					isAuthOver: true,
		// 					isLoggedIn: false,
		// 				})
		// 			}
		// 		} catch(error) {
		// 			console.log(error)
		// 			if (error.message === 'Network Error') {
		// 				setAuth({
		// 					...auth,
		// 					networkError: true,
		// 				})
		// 			} else if (error.response.data.detail === "Token is blacklisted") {
		// 				alert("someone stole your token for authentication, immediately sing in to your account and change your password ")
		// 				setAuth({
		// 					...auth,
		// 					isAuthOver: true,
		// 					isLoggedIn: false,
		// 				})
		// 			} else if (error.response.data.detail === "Token is invalid or expired") {
		// 				alert("your session was over, please re sign in")
		// 				setAuth({
		// 					...auth,
		// 					isAuthOver: true,
		// 					isLoggedIn: false,
		// 				})
		// 			} else if (error.response.data.refresh[0] === "This field may not be null.") {
		// 				setAuth({
		// 					...auth,
		// 					isAuthOver: true,
		// 					isLoggedIn: false,
		// 				})
		// 			}
		// 		}
		// 	}
		// }
		// fetchData()
