import React from 'react';
import { saveUserInfo } from '@/store/account';
import CustomSelect from '@/components/common/Selects/CustomSelect';
import cn from 'classnames';
import { updateCurrencies } from '@/store/currencies';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
}

export interface IOption {
	value: string;
	label: string;
}

const CurrencySelect = ( { className, ...newProps }: IProps ) => {

	const currenciesList: IOption[] = [
		{ value: 'usd', label: 'usd' },
		{ value: 'rub', label: 'rub' },
		{ value: 'thb', label: 'thb' },
	];

	const onChange = async ( e: any ) => {
		const data = new FormData();
		data.set( 'currency', e.target.value );
		await saveUserInfo( data );
	};

	return (
		<div className={ 'header-select-wrapper' }>

			<CustomSelect
				options={ currenciesList }
				className={ cn( className, ' h-122' ) }
				updateStore={ updateCurrencies }
			/>

		</div>
	);
};

export default CurrencySelect;