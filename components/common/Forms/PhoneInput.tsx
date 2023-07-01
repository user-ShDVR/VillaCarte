import React, { DetailedHTMLProps, TextareaHTMLAttributes, useEffect } from 'react';
import { phoneMask } from '@/utils/phoneMask/mask';

export interface ITextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	name: string;
	textareaClass?: string;
	rows?: number;
}

const PhoneInput = ( { textareaClass, rows = 1, ...props }: ITextAreaProps ) => {

	useEffect( () => {
		phoneMask( 'textarea' );
	}, [] );

	return (
		<textarea
			rows={ rows }
			defaultValue={ props.defaultValue }
			className={ textareaClass }
			{ ...props }
		/>
	);
};

export default PhoneInput;