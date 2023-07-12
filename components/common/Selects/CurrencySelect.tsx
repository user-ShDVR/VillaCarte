import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { $userInfo, saveUserInfo } from '@/store/account';
import cn from 'classnames';
import upSmall from '@/public/icons/upSmall.svg';
import downSmall from '@/public/icons/downSmall.svg';
import Image from 'next/image';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
}

const CurrencySelect = ( { className, ...newProps }: IProps ) => {
	const [ upArrow, setUpArrow ] = useState<boolean>( false );
	const currencies = [ 'rub', 'usd', 'thb' ];
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
				{ currencies.map( ( currency, index ) =>
					<option
						key={ index }
						value={ currency }
						// selected={ userInfo?.currency === currency }
					>
						{ currency }
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

export default CurrencySelect;