import React from 'react';
import { saveUserInfo } from '@/store/account';
import CustomSelect from '@/components/common/Selects/CustomSelect';
import { updateCurrencies } from '@/store/currencies';
import { ICurrencies } from '@/types/mainPage';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
	scrolled?: boolean;
}

const CurrencySelect = ( { className, scrolled, ...newProps }: IProps ) => {

	const currenciesList: ICurrencies[] = [
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
				className={ className }
				updateStore={ updateCurrencies }
				scrolled={ scrolled }
			/>

		</div>
	);
};

export default CurrencySelect;