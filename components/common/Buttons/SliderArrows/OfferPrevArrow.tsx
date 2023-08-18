import React from 'react';
import { useStore } from 'effector-react';
import { $indicator, $indicator2, showIndicator, showIndicator2 } from '@/store/slideIndicator';
import Image from 'next/image';
import nextArrow from '@/public/icons/nextArrow.svg';

export function OfferPrevArrow( { onClick }: any ) {
	const indicator = useStore( $indicator );
	const indicator2 = useStore( $indicator2 );
	const onNextClick = () => {
		onClick();
		showIndicator( !indicator );
		showIndicator2( !indicator2 );
	};

	return (
		<div
			className={ 'sliderPrev' }
			onClick={ onNextClick }
		>
			<Image style={{ transform: 'rotate(180deg)' }} src={ nextArrow } alt={ '' }/>
		</div>
	);
}
