import React from 'react';
import { saveUserInfo } from '@/store/account';
import CustomSelect from '@/components/common/Selects/CustomSelect';
import { $languages, updateLanguages } from '@/store/languages';
import { ILanguages } from '@/types/mainPage';
import { useStore } from 'effector-react';
import { useRouter } from 'next/router';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
	scrolled?: boolean;
}

const LanguageSelect = ( { className, scrolled, ...newProps }: IProps ) => {
	const router = useRouter();

	const languagesStore = useStore( $languages );

	if ( languagesStore.value === 'ru' ) {
		router.push( '/ru' );
	}

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

			<CustomSelect
				options={ languages }
				className={ className }
				updateStore={ updateLanguages }
				scrolled={ scrolled }
			/>

		</div>
	);
};

export default LanguageSelect;
