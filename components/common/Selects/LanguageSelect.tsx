
import React, { useEffect } from 'react';
import CustomSelect from '@/components/common/Selects/CustomSelect';
import { $languages, updateLanguages } from '@/store/languages';
import { ILanguages } from '@/types/mainPage';
import { useStore } from 'effector-react';
import { useLocale } from 'next-intl';
import {usePathname, useRouter} from 'next-intl/client';


interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
	scrolled?: boolean;
}

const LanguageSelect = ( { className, scrolled, ...newProps }: IProps ) => {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();
	const languages: ILanguages[] = [
		{ value: 'en', label: 'en' },
		{ value: 'ru', label: 'ru' },
	];

	const handleChange = ( selectedOption: any ) => {
		router.replace(pathname, {locale: `${selectedOption.value}`});
	};

	let objFromStringLocalStorage = { value: locale, label: locale };

	return (
		<div className={ 'header-select-wrapper' }>

			<CustomSelect
				options={ languages }
				className={ className }
				defaultValue={ objFromStringLocalStorage }
				updateStore={ handleChange }
				scrolled={ scrolled }
			/>

		</div>
	);
};

export default LanguageSelect;
