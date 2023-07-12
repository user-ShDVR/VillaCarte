import React from 'react';
import Select from 'react-select';
import { IOption } from '@/components/common/Selects/CurrencySelect';
import cn from 'classnames';

interface IProps {
	options: IOption[];
	className?: string;
}

const CustomSelect = ( { options, className }: IProps ) => {

	const handleChange = ( selectedOption: any ) => {
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