import React from 'react';
import { saveUserInfo } from '@/store/account';

import CustomSelect from '@/components/common/Selects/CustomSelect';
import cn from 'classnames';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
}

export interface IOption {
	value: string;
	label: string;
}

const CurrencySelect = ( { className, ...newProps }: IProps ) => {

	const currencies: IOption[] = [
		{ value: 'rub', label: 'rub' },
		{ value: 'usd', label: 'usd' },
		{ value: 'thb', label: 'thb' },
	];

	const onChange = async ( e: any ) => {
		const data = new FormData();
		data.set( 'lang', e.target.value );
		await saveUserInfo( data );
	};

	return (
		<div className={ 'header-select-wrapper' }>

			<CustomSelect options={ currencies } className={ cn( className, ' h-122' ) }/>

		</div>
	);
};

export default CurrencySelect;