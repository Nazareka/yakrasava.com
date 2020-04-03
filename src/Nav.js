import React, { useState } from 'react';

function Main() {
	let krk = 'ad';
	return (
		<nav> 
			<div className="nav-block nav-block-top">
				Мій профіль 
			</div>
			<div className="nav-block nav-block-inside">
				Новини
			</div>
			<div className="nav-block nav-block-inside">
				Повідомлення
			</div>
			<div className="nav-block nav-block-inside">
				Мої новини
			</div>
			<div className="nav-block nav-block-inside">
				Фотографії
			</div>
			<div className="nav-block nav-block-bottom">
				Відео
			</div>
		</nav>
	);
}

export default Main;