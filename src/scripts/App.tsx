import React, { useEffect } from "react"
import '../sass/style.sass'
import { MainRouter } from './routes';
import WebSocketInstance from './services/WebSocketService'
import { useDispatch, useSelector } from "react-redux"
import { AccessType } from "./apps/auth/enums"
import { fetchCurrentUser } from "./apps/auth/actions"

const App = (): JSX.Element => {

	const authState = useSelector(state => state.auth)

	useEffect(() => {
		fetchCurrentUser()
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