import React from 'react';
import { hideMobileMenu, showMobileDropMenuServices, } from '@/store/mobileMenu';
import Link from 'next/link';

const NavService = () => {
	const services = [
		{ id: 834934, name: 'Serv 1' },
		{ id: 7834834, name: 'Serv 2' },
		{ id: 34766222, name: 'Serv 3' },
	];

	const toCloseMenu = () => {
		hideMobileMenu( true );
		showMobileDropMenuServices( false );
	};

	return (
		<div className={ 'dropdownContent dropService' }>
			{ services?.map( service =>
				<Link href={ '/' } key={ service.id } onClick={ toCloseMenu }>
					{ service.name }
				</Link>
			) }
		</div>
	);
};

export default NavService;