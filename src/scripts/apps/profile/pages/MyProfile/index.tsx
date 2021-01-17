import { useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import { fetchFullProfileCurrentUser } from '../../actions';

const MyProfile = (): JSX.Element => {
	const profileState = useSelector(state => state.myProfile)
    useEffect(() => {
		fetchFullProfileCurrentUser()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

    if (profileState === null || profileState.profile === undefined) {
        return <div> loading </div>
	}
	
    return (
		<div className="profile">
			<div className="actions">
				<div className="img-container">
					<img src={profileState.profile.image} 
						width="100px" 
						height="135px" 
						className="my-profile" 
						alt="profile-logo" />
				</div>
				<div className="nickname">
					{ profileState.profile.nickname }
				</div>
				<div className="status">
					{ profileState.profile.status }
				</div>
			</div>
			<div className="bio">
				<div className="quote">
					{ profileState.profile.main_quote }
				</div>
				<div className="info">
					<div>
						<div>
							Стать:
						</div>
						<div>
							Дата народження:
						</div>
						<div>
							Локація: 
						</div>
						<div>
							Професія: 
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
			<div></div>
		</div>
    );
}
 
export default MyProfile;