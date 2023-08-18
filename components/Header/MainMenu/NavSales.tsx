import React from 'react';
import { showMobileDropMenuSales } from '@/store/mobileMenu';
import Link from 'next/link';
import { dropMenuItemsSale } from '@/components/Header/MobileNav/MobileNavSales';

interface IProps {
	dropBgStyle: any;
}

const NavSales = ( { dropBgStyle }: IProps ) => {

	const toCloseMenu = () => {
		showMobileDropMenuSales( false );
	};

	return (
		<div
			style={ dropBgStyle }
			className={ 'dropdownContent dropSales' }
		>
			{ dropMenuItemsSale?.map( ( sale, index ) =>
				<Link href={ sale.path } key={ index } onClick={ toCloseMenu }>
					{ sale.label }
				</Link>
			) }
		</div>
	);
};

export default NavSales;