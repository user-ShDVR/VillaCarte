export const staticResource = ( link?: string, width?: number, height?: number ) => {
	if ( !link ) return '';

	// eslint-disable-next-line no-undef
	const baseUrl = 'https://store.villacartetest.com';

	let _link = link.split( '.' );
	let ext = _link.pop();

	if ( width || height ) {
		link = _link.join( '.' ) + `-${ width }x${ height }.${ ext }`;
	} else {
		link = _link.join( '.' ) + `.${ ext }`;
	}

	return baseUrl + ( `/${ link }`.replace( /\/+/g, '/' ) );
};
