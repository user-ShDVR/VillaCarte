import React from 'react';
import Link from 'next/link';
import SimpleButton from '@/components/common/Buttons/SimpleButton';

interface IProps {
	to: string;
	text: string;
	variant: 'simple' | 'arrow' | 'only' | 'simpleDark' | 'arrowWhite';
	className?: string;
}

const HoveredButton = ( { to, text, variant, className, ...props }: IProps ) => {

	return (
		<Link href={ to }{ ...props }>

			<SimpleButton text={ text } variant={ variant } className={ className }/>

		</Link>
	);
};

export default HoveredButton;