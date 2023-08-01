import React, { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import arrowAccent from '@/public/icons/arrowBtnAccent.svg';
import arrowWhite from '@/public/icons/arrowBtnWhite.svg';
import { useWindowSize } from '@/hooks/useWindowSize';

interface IProps {
	text: string;
	variant: 'simple' | 'arrow' | 'only' | 'simpleDark' | 'arrowWhite' | 'arrowRevert' | 'light';
	className?: string;
	type?: 'submit' | 'button';
	onClick?: any;
}

const SimpleButton = ( { text, variant, className, type, onClick, ...props }: IProps ) => {
	const size = useWindowSize();
	// @ts-ignore
	const isMobile = size.width <= 1200;
	const [ mouseOver, setMouseOver ] = useState<boolean>( false );

	let classNameVariant;

	switch ( variant ) {
		case 'only':
			classNameVariant = 'hoveredButton-only';
			break;
		case 'simple':
			classNameVariant = 'hoveredButton-simple';
			break;
		case 'simpleDark':
			classNameVariant = 'hoveredButton-simpleDark';
			break;
		case 'arrow':
			classNameVariant = 'hoveredButton-arrow';
			break;
		case 'arrowWhite':
			classNameVariant = 'hoveredButton-arrowWhite';
			break;
		case 'arrowRevert':
			classNameVariant = 'hoveredButton-arrowRevert';
			break;
		case 'light':
			classNameVariant = 'hoveredButton-light';
			break;
	}

	const onMouseOver = () => {
		setTimeout( () => setMouseOver( true ), 100 );
	};
	const onMouseLeave = () => {
		setTimeout( () => setMouseOver( false ), 100 );
	};

	return (
		<button
			className={ cn( 'hoveredButton', classNameVariant, className ) }
			onMouseOver={ onMouseOver }
			onMouseLeave={ onMouseLeave }
			type={ type }
			onClick={ onClick }
			{ ...props }
		>
			<span>{ text }</span>

			{ variant === 'arrow' && !mouseOver && <Image src={ arrowAccent } alt={ '' }/> }
			{ variant === 'arrow' && mouseOver && !isMobile && <Image src={ arrowWhite } alt={ '' }/> }
			{ variant === 'arrow' && mouseOver && isMobile && <Image src={ arrowAccent } alt={ '' }/> }
			{ variant === 'arrowWhite' && <Image src={ arrowWhite } alt={ '' }/> }
			{ variant === 'arrowRevert' && mouseOver && <Image src={ arrowAccent } alt={ '' }/> }
			{ variant === 'arrowRevert' && !mouseOver && <Image src={ arrowWhite } alt={ '' }/> }
		</button>
	);
};

export default SimpleButton;