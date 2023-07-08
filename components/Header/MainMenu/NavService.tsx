import React from 'react';
import { showMobileDropMenuServices } from '@/store/mobileMenu';
import Link from 'next/link';
import { dropMenuItemsService } from '@/components/Header/MobileNav/MobileNavService';

interface IProps {
	dropBgStyle: any;
	onMouseOverServices: () => void;
	onMouseLeaveServices: () => void;
}

const NavService = ( { dropBgStyle, onMouseOverServices, onMouseLeaveServices }: IProps ) => {
	const toCloseMenu = () => {
		showMobileDropMenuServices( false );
	};

	return (
		<div
			style={ dropBgStyle }
			className={ 'dropdownContent dropService' }
			onMouseOver={ onMouseOverServices }
			onMouseLeave={ onMouseLeaveServices }
		>
			{ dropMenuItemsService?.map( ( service, index ) =>
				<Link href={ service.path } key={ index } onClick={ toCloseMenu }>
					{ service.label }
				</Link>
			) }
		</div>
	);
};

export default NavService;