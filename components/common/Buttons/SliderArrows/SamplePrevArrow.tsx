import React from 'react';
import { useStore } from 'effector-react';
import { $indicator, $indicator2, showIndicator, showIndicator2 } from '@/store/slideIndicator';
import prevArrow from '@/public/icons/prevArrow.svg';
import Image from 'next/image';

export function SamplePrevArrow( { onClick }: any ) {
	const indicator = useStore( $indicator );
	const indicator2 = useStore( $indicator2 );
	const onPrevClick = () => {
		onClick();
		showIndicator( !indicator );
		showIndicator2( !indicator2 );
	};

	return (
		<div className={ 'sliderPrev' } onClick={ onPrevClick }>
			<Image src={ prevArrow } alt={ '' }/>
		</div>
	);
}
