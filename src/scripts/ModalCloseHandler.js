import React, { useState, useEffect, useRef } from 'react';

function ModalCloseHandler(props) {

	useEffect(() => {
		window.addEventListener('mousemove', () => {});

		// returned function will be called on component unmount 
		return () => {
	    window.removeEventListener('mousemove', () => {})
		}
	}, [])

}

export default ModalCloseHandler;