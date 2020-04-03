import React, { useState, useEffect } from 'react';

function ModalAuthContent(props) {
	useEffect(() => {
		window.addEventListener('click', () => {alert('mousemove')});

		// returned function will be called on component unmount 
		return () => {
	    window.removeEventListener('click', () => {alert('mousemoveremove')})
		}
	}, [])
	return (
		<div className="auth-overlay">
			<div className="auth-modal">
				modal
			</div>
        </div>
	);
}

export default ModalAuthContent;