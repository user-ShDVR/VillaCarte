import React from 'react';
import { saveUserInfo } from '@/store/account';
import CustomSelect from '@/components/common/Selects/CustomSelect';
import cn from 'classnames';
import { updateLanguages } from '@/store/languages';
import { ILanguages } from '@/types/mainPage';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
}

const LanguageSelect = ( { className, ...newProps }: IProps ) => {

	const languages: ILanguages[] = [
		{ value: 'en', label: 'en' },
		{ value: 'ru', label: 'ru' },
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
