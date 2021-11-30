import React from 'react';


const Splash = () => {

	// setTimeout(() => {
	// 	window.location.hash = '/login';
	// }, 3000);

	const changeView = () => {
		window.location.hash = '/login';
	}
	return (
		<div
			className="splash"
			onClick={changeView}
		></div>
	)
}

export default Splash;