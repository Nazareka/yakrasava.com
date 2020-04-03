import React, { useState, useEffect } from 'react';
import user from '../images/nazarek.jpg';

function MyProfile() {
	return (
		<div>
			<div className="content-header"> 
				<div>
					<div>
						<img src={user} width="100px" height="135px" className="user-img" />
					</div>
					<div>
						Nazarek
					</div>
				</div>
			</div>
			<div className="info">
				<div>
					<div>
						Локація: 
					</div>
					<div>
						стать:
					</div>
					<div>
						Дата народження:
					</div>
					<div>
						хоббі:
					</div>
					<div>
						цікавлюсь:
					</div>
				</div>	
				<div>
					<div>
						Краків, Польща
					</div>
					<div>
						чоловік
					</div>
					<div>
						26 березня 2002 року
					</div>			
					<div>
						програмування
					</div>			
					<div>
						історія
					</div>	
				</div>					
			</div>
			<div></div>
		</div>
	);
}

export default MyProfile;