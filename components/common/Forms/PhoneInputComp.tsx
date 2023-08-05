import React from 'react';
import PhoneInput from 'react-phone-input-2';
import es from 'react-phone-input-2/lang/es.json';

export interface IProps {
	className?: string;
	placeholder?: string;
}

const PhoneInputComp = ( { className, placeholder, ...props }: IProps ) => {

	return (
		<PhoneInput
			localization={ es }
			inputClass={ className }
			placeholder={ placeholder }
			{ ...props }
		/>
	);
};

export default PhoneInputComp;
