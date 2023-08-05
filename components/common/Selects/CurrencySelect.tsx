import React from 'react';
import CustomSelect from '@/components/common/Selects/CustomSelect';
import { updateCurrencies } from '@/store/currencies';
import { ICurrencies } from '@/types/mainPage';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
	scrolled?: boolean;
}

const CurrencySelect = ( { className, scrolled, ...newProps }: IProps ) => {
	const currenciesLS = localStorage.getItem( 'currency' );

	const currenciesList: ICurrencies[] = [
		{ value: 'usd', label: 'usd' },
		{ value: 'rub', label: 'rub' },
		{ value: 'thb', label: 'thb' },
	];

	// const onChange = async ( e: any ) => {
	// 	const data = new FormData();
	// 	data.set( 'currency', e.target.value );
	// 	await saveUserInfo( data );
	// };

	const handleChange = ( selectedOption: any ) => {
		updateCurrencies( selectedOption );
		localStorage.setItem( 'currency', selectedOption.value );
	};

	let objFromStringLocalStorage = { value: currenciesLS, label: currenciesLS };

	return (
		<div className={ 'header-select-wrapper' }>

			<CustomSelect
				options={ currenciesList }
				className={ className }
				defaultValue={ objFromStringLocalStorage }
				updateStore={ handleChange }
				scrolled={ scrolled }
			/>

		</div>
	);
};

export default CurrencySelect;