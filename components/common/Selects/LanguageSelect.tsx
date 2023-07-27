import React from 'react';
import { saveUserInfo } from '@/store/account';
import { IOption } from '@/components/common/Selects/CurrencySelect';
import CustomSelect from '@/components/common/Selects/CustomSelect';
import cn from 'classnames';
import { updateLanguages } from '@/store/languages';

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

			<CustomSelect options={ languages } className={ cn( className, 'h-84' ) } updateStore={ updateLanguages }/>

		</div>
	);
};

export default LanguageSelect;
