import React from 'react';

export interface IProps {
	className?: string;
	placeholder?: string;
}

const TextAreaLikeInput = ( { className, placeholder, ...props }: IProps ) => {
	function noDigits( event: any ) {
		if ( '1234567890'.indexOf( event.key ) != -1 )
			event.preventDefault();
	}

	return (
		<textarea
			rows={ 1 }
			className={ className }
			placeholder={ placeholder }
			onKeyDown={ noDigits }
			{ ...props }
		/>
	);
};

export default TextAreaLikeInput;