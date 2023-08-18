import React from 'react';
import { hideMobileMenu, showMobileDropMenuSales } from '@/store/mobileMenu';
import Link from 'next/link';

export const dropMenuItemsSale = [
	{ label: 'Sale 1', path: '/', key: '1' },
	{ label: 'Sale 2', path: '/', key: '2' },
	{ label: 'Sale 3', path: '/', key: '3' },
];

const MobileNavSales = () => {

	const toCloseMenu = () => {
		hideMobileMenu( true );
		showMobileDropMenuSales( false );
	};

	return (
		<div className={ 'dropdownContent dropSales' }>
			{ dropMenuItemsSale?.map( ( sale, index ) =>
				<Link href={ sale.path } key={ index } onClick={ toCloseMenu }>
					{ sale.label }
				</Link>
			) }
		</div>
	);
};

export default MobileNavSales;
