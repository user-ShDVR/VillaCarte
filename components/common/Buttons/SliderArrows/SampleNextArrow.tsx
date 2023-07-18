import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { $indicator, $indicator2, showIndicator, showIndicator2 } from '@/store/slideIndicator';
import Image from 'next/image';
import nextArrow from '@/public/icons/nextArrow.svg';
import nextArrowHovered from '@/public/icons/nextArrowHovered.svg';

export function SampleNextArrow( { onClick }: any ) {
	const indicator = useStore( $indicator );
	const indicator2 = useStore( $indicator2 );
	const onNextClick = () => {
		onClick();
		showIndicator( !indicator );
		showIndicator2( !indicator2 );
	};

	const [ mouseOver, setMouseOver ] = useState<boolean>( false );

	const onMouseOver = () => {
		setMouseOver( true );
	};
	const onMouseLeave = () => {
		setMouseOver( false );
	};

	return (
		<div
			className={ 'sliderNext' }
			onClick={ onNextClick }
			onMouseOver={ onMouseOver }
			onMouseLeave={ onMouseLeave }
		>
			{ mouseOver
				? <Image src={ nextArrowHovered } alt={ '' }/>
				: <Image src={ nextArrow } alt={ '' }/>
			}
		</div>
	);
}
