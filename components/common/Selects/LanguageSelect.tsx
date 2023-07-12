import React, { useState } from 'react';
import cn from 'classnames';
import { useStore } from 'effector-react';
import { $userInfo, saveUserInfo } from '@/store/account';
import Image from 'next/image';
import downSmall from '@/public/icons/downSmall.svg';
import upSmall from '@/public/icons/upSmall.svg';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
}

const LanguageSelect = ( { className, ...newProps }: IProps ) => {
	const [ upArrow, setUpArrow ] = useState<boolean>( false );
	const languages = [ 'ru', 'en' ];
	const userInfo = useStore( $userInfo );

	const onChange = async ( e: any ) => {
		const data = new FormData();
		data.set( 'lang', e.target.value );
		await saveUserInfo( data );
	};

	const onClick = () => {
		setUpArrow( !upArrow );
	};

	return (
		<div className={ 'header-select-wrapper' }>
			<select
				{ ...newProps }
				className={ cn( 'header-select', className ) }
				onChange={ onChange }
				onClick={ onClick }
			>
				{ languages?.map( ( lang, index ) =>
					<option
						key={ index }
						value={ lang }
						// selected={ userInfo?.language === lang }
					>
						{ lang }
					</option>
				) }
			</select>
			{ upArrow
				? <Image src={ upSmall } alt={ '' }/>
				: <Image src={ downSmall } alt={ '' }/>
			}
		</div>
	);
};

export default LanguageSelect;
