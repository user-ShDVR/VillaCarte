import React from 'react';
import { hideMobileMenu, showMobileDropMenuSales } from '@/store/mobileMenu';
import Link from 'next/link';

const NavSales = () => {
	const sales = [
		{ id: 2332, name: 'Sale 1', path: '/sale' },
		{ id: 424423, name: 'Sale 2', path: '/sale' },
		{ id: 123200, name: 'Sale 3', path: '/sale' },
	];

	const toCloseMenu = () => {
		hideMobileMenu( true );
		showMobileDropMenuSales( false );
	};

	return (
		<div className={ 'dropdownContent dropSales' }>
			{ sales?.map( sale =>
				<Link href={ sale.path } key={ sale.id } onClick={ toCloseMenu }>
					{ sale.name }
				</Link>
			) }
		</div>
	);
};

export default NavSales;
