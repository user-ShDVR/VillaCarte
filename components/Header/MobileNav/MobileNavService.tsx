import React from 'react';
import { hideMobileMenu, showMobileDropMenuServices, } from '@/store/mobileMenu';
import Link from 'next/link';

export const dropMenuItemsService = [
	{ label: 'Serv 1', path: '/sale', key: '1' },
	{ label: 'Serv 2', path: '/sale', key: '2' },
	{ label: 'Serv 3', path: '/sale', key: '3' },
];

const MobileNavService = () => {

	const toCloseMenu = () => {
		hideMobileMenu( true );
		showMobileDropMenuServices( false );
	};

	return (
		<div className={ 'dropdownContent dropService' }>
			{ dropMenuItemsService?.map( ( service, index ) =>
				<Link href={ service.path } key={ index } onClick={ toCloseMenu }>
					{ service.label }
				</Link>
			) }
		</div>
	);
};

export default MobileNavService;