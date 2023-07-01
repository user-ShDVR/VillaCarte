import React from 'react';
import cn from 'classnames';
import { useStore } from 'effector-react';
import { $userInfo, saveUserInfo } from '@/store/account';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
}

const LanguageSelect = ( { className, ...newProps }: IProps ) => {
	const languages = [ 'ru', 'en' ];
	const userInfo = useStore( $userInfo );

	const onChange = async ( e: any ) => {
		const data = new FormData();
		data.set( 'lang', e.target.value );
		await saveUserInfo( data );
	};

	return (
		<select
			{ ...newProps }
			className={ cn( 'header-select', className ) }
			onChange={ onChange }
		>
			{ languages?.map( ( lang, index ) =>
				<option key={ index } value={ lang } selected={ userInfo?.language === lang }>
					{ lang }
				</option>
			) }
		</select>
	);
};

export default LanguageSelect;
