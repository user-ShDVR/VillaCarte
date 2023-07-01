import React from 'react';
import { useStore } from 'effector-react';
import { $userInfo, saveUserInfo } from '@/store/account';
import cn from 'classnames';

interface IProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	className?: string;
}

const CurrencySelect = ( { className, ...newProps }: IProps ) => {
	const currencies = [ 'rub', 'usd', 'thb' ];
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
			{ currencies.map( ( currency, index ) =>
				<option key={ index } value={ currency } selected={ userInfo?.currency === currency }>
					{ currency }
				</option>
			) }
		</select>
	);
};

export default CurrencySelect;