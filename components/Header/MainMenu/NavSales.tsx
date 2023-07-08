import React from 'react';
import { showMobileDropMenuSales } from '@/store/mobileMenu';
import Link from 'next/link';
import { dropMenuItemsSale } from '@/components/Header/MobileNav/MobileNavSales';
import { showMainDropMenuServices } from '@/store/mainMenu';

interface IProps {
	dropBgStyle: any;
	onMouseOverSales: () => void;
	onMouseLeaveSales: () => void;
}

const NavSales = ( { dropBgStyle, onMouseOverSales, onMouseLeaveSales }: IProps ) => {

	const toCloseMenu = () => {
		showMobileDropMenuSales( false );
		showMainDropMenuServices( false );
	};

	return (
		<div
			style={ dropBgStyle }
			className={ 'dropdownContent dropSales' }
			onMouseOver={ onMouseOverSales }
			onMouseLeave={ onMouseLeaveSales }
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