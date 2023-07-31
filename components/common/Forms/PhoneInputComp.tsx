import React, { useEffect } from 'react';
import { phoneMask } from '@/utils/phoneMask/mask';

export interface IProps {
	name: string;
	className?: string;
	placeholder?: string;
}

const PhoneInputComp = ( { className, placeholder, name, ...props }: IProps ) => {

	useEffect( () => {
		phoneMask( 'input' );
	}, [] );

	return (
		<input
			name={ name }
			className={ className }
			placeholder={ placeholder }
			{ ...props }
		/>
	);
};

export default PhoneInputComp;