import React, { useRef } from 'react';
import { useStore } from 'effector-react';
import {
	$mainDropMenuVisibleSales,
	$mainDropMenuVisibleServices,
	showMainDropMenuSales,
	showMainDropMenuServices
} from '@/store/mainMenu';
import NavService from '@/components/Header/MainMenu/NavService';
import NavSales from '@/components/Header/MainMenu/NavSales';
import CustomMenuItem from '@/components/Header/CustomMenuItem';
import Image from 'next/image';
import LanguageSelect from '@/components/common/Selects/LanguageSelect';
import CurrencySelect from '@/components/common/Selects/CurrencySelect';
import upSmall from '@/public/icons/upSmall.svg';
import downSmall from '@/public/icons/downSmall.svg';
import cn from 'classnames';
import useOnClickOutside from '@/utils/onClickOutside';
import { lang } from '@/pages';

interface IProps {
	dropBgStyle: any;
	dropBgClass?: string;
}

const MainMenu = ( { dropBgStyle, dropBgClass }: IProps ) => {

	const mainDropMenuSales = useStore( $mainDropMenuVisibleSales );
	const mainDropMenuServices = useStore( $mainDropMenuVisibleServices );
	const refSales = useRef( null );
	const refService = useRef( null );

	useOnClickOutside( refSales, () => {
		showMainDropMenuSales( false );
	} );

	useOnClickOutside( refService, () => {
		showMainDropMenuServices( false );
	} );

	const toSalesMenu = () => {
		showMainDropMenuSales( !mainDropMenuSales );
		showMainDropMenuServices( false );
	};

	const toServiceMenu = () => {
		showMainDropMenuServices( !mainDropMenuServices );
		showMainDropMenuSales( false );
	};

	return (
		<div className={ 'meinMenu-wrapper' }>
			<nav>
				<div className={ 'nav-item pos' } onClick={ toSalesMenu } ref={ refSales }>
					<p>{ lang?.sale || '' }</p>
					{ mainDropMenuSales
						? <Image src={ upSmall } alt={ '' }/>
						: <Image src={ downSmall } alt={ '' }/>
					}
					{ mainDropMenuSales && <NavSales dropBgStyle={ dropBgStyle }/> }
				</div>

				<CustomMenuItem
					text={ lang?.rent || '' }
					className={ 'nav-item' }
					path={ '/' }
				/>

				<div className={ 'nav-item pos' } onClick={ toServiceMenu } ref={ refService }>
					<p>{ lang?.concierge || '' }</p>
					{ mainDropMenuServices
						? <Image src={ upSmall } alt={ '' }/>
						: <Image src={ downSmall } alt={ '' }/>
					}
					{ mainDropMenuServices && <NavService dropBgStyle={ dropBgStyle }/> }
				</div>

				<CustomMenuItem
					text={ lang?.propertyManagement || '' }
					className={ 'nav-item' }
					path={ '/' }
				/>
				<CustomMenuItem
					text={ lang?.aboutTheCompany || '' }
					className={ 'nav-item' }
					path={ '/' }
				/>
				<CustomMenuItem
					text={ lang?.aboutPhuket || '' }
					className={ 'nav-item' }
					path={ '/' }
				/>
				<CustomMenuItem
					text={ lang?.news || '' }
					className={ 'nav-item' }
					path={ '/' }
				/>
			</nav>

			<div className={ 'ml-20' }/>

			<LanguageSelect className={ cn( dropBgClass, 'fz-12-14' ) }/>
			<CurrencySelect className={ cn( dropBgClass, 'fz-12-14' ) }/>
		</div>
	);
};

export default MainMenu;