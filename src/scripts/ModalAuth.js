import React, { useState, useEffect } from 'react';
import ModalAuthContent from './ModalAuthContent';

function ModalAuth(props) {


	if (!props.show) {
		return null
	}
	return (
		<ModalAuthContent />
	);
}

export default ModalAuth;