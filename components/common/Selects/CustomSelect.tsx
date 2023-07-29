import React from 'react';
import Select from 'react-select';
import cn from 'classnames';
import { IValueLabel } from '@/types/mainPage';

interface IProps {
	options: IValueLabel[];
	className?: string;
	updateStore?: any;
}

const CustomSelect = ( { options, className, updateStore }: IProps ) => {

	const handleChange = ( selectedOption: any ) => {
		updateStore( selectedOption );
		console.log( selectedOption );
	};

	return (
		<Select
			options={ options }
			defaultValue={ options[ 0 ] }
			onChange={ handleChange }
			className={ cn( className, 'customSelect' ) }
		/>
	);
};

export default CustomSelect;