import React from 'react';
import { useStore } from 'effector-react';
import Spinner from '@/components/common/Spinner/Spinner';
import { $preloader } from '@/store/preloader';

const Preloader = () => {
	const preloader = useStore( $preloader );

	if ( !preloader ) return <></>;

	return (
		<Spinner/>
	);
};

export default Preloader;
