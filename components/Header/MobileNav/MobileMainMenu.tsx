import React from 'react';
import { useStore } from 'effector-react';
import {
	$mobileDropMenuVisibleServices, $mobileDropMenuVisibleSales,
	$mobileMenuVisible,
	showMobileDropMenuServices, showMobileDropMenuSales,
	showMobileMenu
} from '@/store/mobileMenu';
import Link from 'next/link';
import Image from 'next/image';
import logoImgDark from '@/public/logoImgDark.svg';
import BurgerButton from '@/components/Header/MobileNav/BurgerButton';
import LanguageSelect from '@/components/common/Selects/LanguageSelect';
import CurrencySelect from '@/components/common/Selects/CurrencySelect';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import cn from 'classnames';
import MobileNavService from '@/components/Header/MobileNav/MobileNavService';
import MobileNavSales from '@/components/Header/MobileNav/MobileNavSales';
import CustomMenuItem from '@/components/Header/CustomMenuItem';
import { lang } from '@/pages';

const MobileMainMenu = () => {
	const mobileDropMenuServices = useStore( $mobileDropMenuVisibleServices );
	const mobileDropMenuSales = useStore( $mobileDropMenuVisibleSales );
	const mobileMenu = useStore( $mobileMenuVisible );

	const toShowDropMenuSales = () => {
		showMobileDropMenuSales( !mobileDropMenuSales );
	};

	const toShowDropMenu = () => {
		showMobileDropMenuServices( !mobileDropMenuServices );
	};

	const toHideMenu = () => {
		showMobileMenu( false );
	};

	return (
		<section className={ 'd-flex flex-column jc-between mh-100-vh' }>
			<div className="mobileMainMenu-header">
				<Link href={ '/' } className="header-wrapper-logo" onClick={ toHideMenu }>
					<Image src={ logoImgDark } alt={ 'VillaCarte' }/>
				</Link>

				<div className={ 'mobileMainMenu-header-right' }>
					<LanguageSelect/>
					<CurrencySelect/>

					<BurgerButton menu={ mobileMenu } toShowMenu={ toHideMenu } scrolled={ false }/>
				</div>

			</div>

			<nav>
				<CustomMenuItem
					key={ '9656' }
					text={ lang?.sale || '' }
					className={ 'mobileMainMenu-item' }
					textClass={ cn( mobileDropMenuSales ? 'colorGradient' : '' ) }
					toShowDropMenu={ toShowDropMenuSales }
				/>
				{ mobileDropMenuSales && <MobileNavSales/> }

				<CustomMenuItem
					path={ '/' }
					text={ lang?.rent || '' }
					className={ 'mobileMainMenu-item' }
				/>

				<CustomMenuItem
					path={ '/' }
					text={ lang?.concierge || '' }
					className={ 'mobileMainMenu-item' }
					textClass={ cn( mobileDropMenuServices ? 'colorGradient' : '' ) }
					toShowDropMenu={ toShowDropMenu }
				/>
				{ mobileDropMenuServices && <MobileNavService/> }

				<CustomMenuItem
					path={ '/' }
					text={ lang?.propertyManagement || '' }
					className={ 'mobileMainMenu-item' }
				/>

				<CustomMenuItem
					path={ '/' }
					text={ lang?.aboutTheCompany || '' }
					className={ 'mobileMainMenu-item' }
				/>

				<CustomMenuItem
					path={ '/' }
					text={ lang?.aboutPhuket || '' }
					className={ 'mobileMainMenu-item' }
				/>

				<CustomMenuItem
					path={ '/' }
					text={ lang?.news || '' }
					className={ 'mobileMainMenu-item' }
				/>

			</nav>

			<div className={ 'mb-60 ml-16 d-flex flex-column ai-start' }>
				<div className={ 'mb-16 d-flex flex-column ai-start' }>
					<p className={ 'text300 colorText m-0' }>{lang?.email || ''}</p>
					<a className={ 'text700 t-decor-none' } href='mailto: sales@villacarte.com'>sales@villacarte.com</a>
				</div>
				<div className={ 'mb-16 d-flex flex-column ai-start' }>
					<p className={ 'text300 colorText m-0' }>{lang?.montenegro || ''}</p>
					<a className={ 'text700 t-decor-none' } href='tel: +38268815019'>+382 (68) 815-019</a>
				</div>
				<div className={ 'mb-20 d-flex flex-column ai-start' }>
					<p className={ 'text300 colorText m-0' }>{lang?.phuket || ''}</p>
					<a className={ 'text700 t-decor-none' } href='tel: +66892900110'>+66 (89) 290-01-10</a>
				</div>
				<HoveredButton to={ '/' } text={ 'Заказать звонок' } variant={ 'simpleDark' }/>
			</div>
		</section>
	);
};

export default MobileMainMenu;
