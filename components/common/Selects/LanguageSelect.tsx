import React from 'react';
import CustomSelect from '@/components/common/Selects/CustomSelect';
import { $languages, updateLanguages } from '@/store/languages';
import { ILanguages } from '@/types/mainPage';
import { useStore } from 'effector-react';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
	scrolled?: boolean;
}

const LanguageSelect = ( { className, scrolled, ...newProps }: IProps ) => {
	const languagesLS = localStorage.getItem( 'lang' );
	const languageStore = useStore( $languages );

	const languages: ILanguages[] = [
		{ value: 'en', label: 'en' },
		{ value: 'ru', label: 'ru' },
	];

	const handleChange = ( selectedOption: any ) => {
		updateLanguages( selectedOption );
		localStorage.setItem( 'lang', selectedOption.value );
	};

	let objFromStringLocalStorage = { value: languagesLS, label: languagesLS };

	return (
		<div className={ 'header-select-wrapper' }>

			<CustomSelect
				options={ languages }
				className={ className }
				defaultValue={ objFromStringLocalStorage }
				// defaultValue={ languageStore }
				updateStore={ handleChange }
				scrolled={ scrolled }
			/>

		</div>
	);
};

export default LanguageSelect;
