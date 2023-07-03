import React from 'react';
import { useStore } from 'effector-react';
import { $indicator, $indicator2, showIndicator, showIndicator2 } from '@/store/slideIndicator';

export function SamplePrevArrow( { className, style, onClick }: any ) {
	const indicator = useStore( $indicator );
	const indicator2 = useStore( $indicator2 );
	const onPrevClick = () => {
		onClick();
		showIndicator( !indicator );
		showIndicator2( !indicator2 );
	};

	return (
		<div
			className={ className }
			style={ { ...style } }
			onClick={ onPrevClick }
		/>
	);
}
