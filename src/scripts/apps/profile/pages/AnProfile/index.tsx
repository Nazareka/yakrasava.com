import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { fetchFullProfileByProfileId } from '../../actions'
import { useSelector } from 'react-redux'
import TUseState from '../../../../typescript/TUseState'
import userServiceInstance from '../../../../services/UserService'
import ReloadProfileContext from '../../../../contexts/ReloadProfileContext'
import FriendDropdown from '../../../../components/Friends/FriendDropdown'


interface IParamsProfileID {
	profile_id: string
}


const Profile = (): JSX.Element => {

	let { profile_id }: IParamsProfileID = useParams()

	let history = useHistory()
	
	const profileState = useSelector(state => state.anProfile)

	const [lastUpdated, setLastUpdated] = useState() as TUseState<undefined | Date>

    useEffect(() => {
		fetchFullProfileByProfileId(profile_id)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [profile_id])

	// useEffect(() => {
	// 	if (profileState !== null && profileState.profile !== undefined && !lastUpdated) {
	// 		// WebSocketInstance.waitForSocketConnection(() => {
	// 		// 	WebSocketInstance.watching_for_another_profile_status(profile_id)
	// 		// }, null)
	// 		// WebSocketInstance.setUser = setUser fix it
	// 		// WebSocketInstance.user = user

	// 	}
	// }, [lastUpdated])
	
	// useEffect(() => {
	// 	if (lastUpdated) {
	// 		const fetchData = async () => {
	// 			try {
	// 				const responseProfile = await userServiceInstance.getFullProfileByProfileId_authed(profile_id)
	// 				setUser(JSON.parse(responseProfile.data))
	// 			} catch(error) {
	// 				console.log(error, 'error')
	// 			}
	// 		}
	// 		fetchData()
	// 	}
    // }, [lastUpdated, profile_id, setUser]) fix it
	
	const handlerClickWriteMessage = (profile_id: number) => {
		const fetchData = async () => {
			try {
				const response = await userServiceInstance.get_or_create_private_chat(profile_id)
				// if (response.data === 'PrivateChat already exists') {
					
				// }
				history.push("/chat/id=" + response.data)
			} catch(error) {
				console.log(error, 'error')
			}
		}
		fetchData()
	}
	
	if (profileState === null || profileState.profile === undefined) {
        return <div> loading </div>
	}
	
    return ( 
		<div className="profile">
			<div className="actions">
				<div className="img-container">
					<img src={ profileState.profile.image } 
						className="profile"
						width="100px"
						height="135px"
						alt="profile"
					/>
				</div>
				<div className="nickname">
					{ profileState.profile.nickname }
				</div>
				<div className="status">
					{ profileState.profile.status }
				</div>
				<ReloadProfileContext.Provider value={{'setLastUpdated': setLastUpdated}} >
					<FriendDropdown id={profileState.profile.id}
									status_code={profileState.profile.status} 
									related={profileState.profile.related} 
					/>
				</ReloadProfileContext.Provider>
				<div className="white-message" onClick={() => handlerClickWriteMessage(profileState.profile.id)}>
					<div className="circle"></div>
					white a message
				</div>
			</div>
			<div className="bio">
				<div className="quote">
					{ profileState.profile.main_quote }
				</div>
				<div className="info">
					<div>
						<div>
							sex:
						</div>
						<div>
							date of birth:
						</div>
						<div>
							location: 
						</div>
						<div>
							profession: 
						</div>
					</div>	
					<div>	
						<div>
						{profileState.profile.sex === "ML" 
						? "male"
						: (profileState.profile.sex === "FM" 
						? "female"
						: (profileState.profile.sex === "OT" 
						? "other"
						: null
						))}
						</div>	
						<div>
							{ profileState.profile.date_of_birth }
						</div>
						<div>
							{ profileState.profile.location }
						</div>
						<div>
							{ profileState.profile.profession }
						</div>	
					</div>
				</div>				
			</div>
		</div>
    )
}

export default Profile