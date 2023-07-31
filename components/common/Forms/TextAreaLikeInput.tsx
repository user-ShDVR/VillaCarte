import React from 'react';

export interface IProps {
	name: string;
	className?: string;
	placeholder?: string;
}

const TextAreaLikeInput = ( { name, className, placeholder, ...props }: IProps ) => {
	function noDigits( event: any ) {
		if ( '1234567890'.indexOf( event.key ) != -1 )
			event.preventDefault();
	}

	return (
		<textarea
			rows={ 1 }
			name={ name }
			className={ className }
			placeholder={ placeholder }
			onKeyDown={ noDigits }
			{ ...props }
		/>
	);
};

export default TextAreaLikeInput;