import React from 'react';
import Select from 'react-select';
import cn from 'classnames';
import { IValueLabel } from '@/types/mainPage';

interface IProps {
	options: IValueLabel[];
	className?: string;
	updateStore?: any;
	scrolled?: boolean;
	defaultValue?: any;
}

const CustomSelect = ( { options, className, updateStore, scrolled, defaultValue }: IProps ) => {

	return (
		<Select
			options={ options }
			defaultValue={ defaultValue }
			onChange={ updateStore }
			className={ cn( className, 'customSelect', scrolled ? 'bgScrolledColor' : '' ) }
		/>
	);
};

export default CustomSelect;