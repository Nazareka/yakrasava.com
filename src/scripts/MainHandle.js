import React, { useState, useEffect } from 'react';
import MyProfile from './MyProfile';
import MyNews from './MyNews';
import News from './News';

function MainHandle(props) {
	if (props.page === 'my profile') {
		return (
			<MyProfile />
		);
	} else if (props.page === 'news') {
		return (
			<News />
		);
	} else if (props.page === 'my news') {
		return (
			<MyNews />
		);		
	}
}

export default MainHandle;