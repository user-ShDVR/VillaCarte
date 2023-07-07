import React, { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import arrowAccent from '@/public/icons/arrowBtnAccent.svg';
import arrowWhite from '@/public/icons/arrowBtnWhite.svg';

interface IProps {
	text: string;
	variant: 'simple' | 'arrow' | 'only' | 'simpleDark' | 'arrowWhite' | 'arrowRevert' | 'light';
	className?: string;
	type?: 'submit' | 'button';
}

const SimpleButton = ( { text, variant, className, type, ...props }: IProps ) => {
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
		setMouseOver( true );
	};
	const onMouseLeave = () => {
		setMouseOver( false );
	};

	return (
		<button
			className={ cn( 'hoveredButton', classNameVariant, className ) }
			onMouseOver={ onMouseOver }
			onMouseLeave={ onMouseLeave }
			type={ type }
			{ ...props }
		>
			<span>{ text }</span>

			{ variant === 'arrow' && !mouseOver && <Image src={ arrowAccent } alt={ '' }/> }
			{ variant === 'arrow' && mouseOver && <Image src={ arrowWhite } alt={ '' }/> }
			{ variant === 'arrowWhite' && <Image src={ arrowWhite } alt={ '' }/> }
			{ variant === 'arrowRevert' && <Image src={ arrowAccent } alt={ '' }/> }
		</button>
	);
};

export default SimpleButton;