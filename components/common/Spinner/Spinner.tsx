import React from 'react';
import { Watch } from 'react-loader-spinner';

const Spinner = () => {
	return (
		<Watch
			height="80"
			width="80"
			radius="48"
			color="#4072A3"
			ariaLabel="watch-loading"
			wrapperClass={ 'spinner' }
			visible={ true }
		/>
	);
};

export default Spinner;