import { useState, useEffect } from 'react';

export const useWindowSize = () => {
	const [ windowSize, setWindowSize ] = useState( {
		width: undefined,
		height: undefined,
	} );

	useEffect( () => {
		const handleResize = () => {
			setWindowSize( {
				// @ts-ignore
				width: window.innerWidth,
				// @ts-ignore
				height: window.innerHeight,
			} );
		};

		window.addEventListener( 'resize', handleResize );

		handleResize();

		return () => window.removeEventListener( 'resize', handleResize );
	}, [] );
	return windowSize;
};