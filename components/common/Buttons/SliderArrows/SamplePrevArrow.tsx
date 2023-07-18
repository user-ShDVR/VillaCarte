import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { $indicator, $indicator2, showIndicator, showIndicator2 } from '@/store/slideIndicator';
import prevArrow from '@/public/icons/prevArrow.svg';
import prevArrowHovered from '@/public/icons/prevArrowHovered.svg';
import Image from 'next/image';

export function SamplePrevArrow( { onClick }: any ) {
	const indicator = useStore( $indicator );
	const indicator2 = useStore( $indicator2 );
	const onPrevClick = () => {
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
			className={ 'sliderPrev' }
			onClick={ onPrevClick }
			onMouseOver={ onMouseOver }
			onMouseLeave={ onMouseLeave }
		>
			{ mouseOver
				? <Image src={ prevArrowHovered } alt={ '' }/>
				: <Image src={ prevArrow } alt={ '' }/>
			}
		</div>
	);
}
