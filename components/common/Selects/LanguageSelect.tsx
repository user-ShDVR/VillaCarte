import React from 'react';
import CustomSelect from '@/components/common/Selects/CustomSelect';
import { $languages, updateLanguages } from '@/store/languages';
import { ILanguages } from '@/types/mainPage';
import { useStore } from 'effector-react';
import {usePathname, useRouter} from 'next-intl/client';


interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
	scrolled?: boolean;
}

const LanguageSelect = ( { className, scrolled, ...newProps }: IProps ) => {
	const languageStore = useStore( $languages );
	const pathname = usePathname();
	const router = useRouter();
	const languages: ILanguages[] = [
		{ value: 'en', label: 'en' },
		{ value: 'ru', label: 'ru' },
	];

	const handleChange = ( selectedOption: any ) => {
		router.replace(pathname, {locale: `${selectedOption.value}`});
		updateLanguages( selectedOption );
		localStorage.setItem( 'lang', selectedOption.value );
	};


	return (
		<div className={ 'header-select-wrapper' }>

			<CustomSelect
				options={ languages }
				className={ className }
				// defaultValue={ objFromStringLocalStorage }
				defaultValue={ languageStore }
				updateStore={ handleChange }
				scrolled={ scrolled }
			/>

		</div>
	);
};

export default LanguageSelect;
