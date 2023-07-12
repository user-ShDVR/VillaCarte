import React from 'react';
import { saveUserInfo } from '@/store/account';
import { IOption } from '@/components/common/Selects/CurrencySelect';
import CustomSelect from '@/components/common/Selects/CustomSelect';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
}

const LanguageSelect = ( { className, ...newProps }: IProps ) => {

	const languages: IOption[] = [
		{ value: 'ru', label: 'ru' },
		{ value: 'en', label: 'en' },
	];

	const onChange = async ( e: any ) => {
		const data = new FormData();
		data.set( 'lang', e.target.value );
		await saveUserInfo( data );
	};

	return (
		<div className={ 'header-select-wrapper' }>

			<CustomSelect options={ languages } className={'ml-20'}/>

		</div>
	);
};

export default LanguageSelect;
