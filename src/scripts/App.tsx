import React, { useEffect } from "react"
import '../sass/style.sass'
import { MainRouter } from './routes';
import WebSocketInstance from './services/WebSocketService'
import { useDispatch, useSelector } from "react-redux"
import { AccessType } from "./apps/auth/enums"
import { fetchCurrentUser } from "./apps/auth/actions"

const App = (): JSX.Element => {

	// const [auth, setAuth] = useState({
	// 	isAuthOver: false,
	// 	isLoggedIn: false,
	// 	profile_id: null,
	// 	networkError: false,
	// 	isWebSocketConnected: false
	// }) as TUseState<IAuth>
	const authState = useSelector(state => state.auth)

	useEffect(() => {
		fetchCurrentUser()

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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (
			authState.refreshed
			&& authState.accessType === AccessType.AUTHORIZED
			&& !authState.isWebSocketConnected 
		) {
			authState.isWebSocketConnected = true
			// WebSocketInstance.authState = authState
			// WebSocketInstance.setAuth = dispatch // to fix
			WebSocketInstance.connect()
		}
	}, [authState])
	// if (authState.networkError) {
	// 	return (
	// 		<div>
	// 			network error
	// 		</div>
	// 	)
	// }
	if (!authState.refreshed) {
		if (!authState.profile_id) {
			return (
				<div>
					loading
				</div>
			)
		} else {
			if (!authState.isWebSocketConnected) {
				return (
					<div>
						loading
					</div>
				)
			}
		}
	}
	return <MainRouter />
}

export default App