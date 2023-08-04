import React, { useEffect, useRef, useState } from 'react';
import { useStore, useStoreMap } from 'effector-react';
import { $mobileMenuVisible, showMobileMenu } from '@/store/mobileMenu';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/public/logoImg.svg';
import logoDesktop from '@/public/logoDesktop.svg';
import BurgerButton from '@/components/Header/MobileNav/BurgerButton';
import MobileMainMenu from '@/components/Header/MobileNav/MobileMainMenu';
import cn from 'classnames';
import MainMenu from '@/components/Header/MainMenu/MainMenu';
import { useWindowSize } from '@/hooks/useWindowSize';
import SimpleButton from '@/components/common/Buttons/SimpleButton';
import { $modalVisible, showModal } from '@/store/modal';
import { EModal_VisibleStore } from '@/types/modal';
import ModalCallRequest from '@/components/common/Modal/ModalCallRequest';
import { lang } from '@/pages';

const Header = () => {
	const size = useWindowSize();
	// @ts-ignore
	const isMobile = size.width <= 474;
	const [ scrolled, setScrolled ] = useState<boolean>( false );
	const mobileMenu = useStore( $mobileMenuVisible );
	const requestCallModal = useStoreMap( $modalVisible, ( s ) => s.callRequest );
	const ref = useRef();

	const toCallModal = () => {
		showModal( EModal_VisibleStore.CallRequest );
	};

	const toShowMenu = () => {
		showMobileMenu( !mobileMenu );
	};

	const transform = {
		background: 'rgba(34, 54, 74, .4)',
		backdropFilter: 'blur(15px)',
		boxShadow: '5px 5px 10px 0 rgb(68, 68, 68, .15)',
		borderRadius: '30px',
	};

	const dropBgTransform = {
		background: 'rgba(34, 54, 74, .4)',
		backdropFilter: 'blur(15px)',
		boxShadow: '5px 5px 10px 0 rgb(68, 68, 68, .15)',
		borderRadius: '0 0 15px 15px',
	};

	const dropBg = {
		background: 'rgba(255, 255, 255, 0.20)',
		backdropFilter: 'blur(15px)',
		boxShadow: '0px 51px 64px 0px rgba(0, 0, 0, 0.10)',
		borderRadius: '15px',
	};

	const style = scrolled ? transform : {};

	const dropBgStyle = scrolled ? dropBgTransform : dropBg;

	const dropBgClass = scrolled ? 'dropBgClass' : '';

	useEffect( () => {
		const onScroll = () => {
			// @ts-ignore
			if ( document.documentElement.scrollTop > 10 ) {
				setScrolled( true );
			} else {
				setScrolled( false );
			}
		};

		window.addEventListener( 'scroll', onScroll );

		return () => {
			window.removeEventListener( 'scroll', onScroll );
		};
	}, [] );

	return (
		<>
			<header className="container header">
				<div
					style={ style }
					className={ scrolled ? 'header__bg _blur' : 'header__bg' }
				/>
				{/*// @ts-ignore*/ }
				<div ref={ ref } className="header-wrapper">
					<div className={ 'header-logo-wrapper' }>
						<Link
							href={ '/' }
							style={ scrolled ? { color: 'white' } : {} }
							className="header-logo">
							{ isMobile ? (
								<Image src={ logoImg } alt={ 'VillaCarte' }/>
							) : (
								<Image src={ logoDesktop } alt={ 'VillaCarte' }/>
							) }
						</Link>
					</div>

					<div className={ 'd-flex ai-center' }>
						<MainMenu
							dropBgStyle={ dropBgStyle }
							dropBgClass={ dropBgClass }
							scrolled={ scrolled }
						/>

						<SimpleButton
							text={ lang?.requestACall || '' }
							variant={ 'only' }
							className={ 'text-nowrap ml-10' }
							onClick={ toCallModal }
						/>

						<div
							className={
								'header-wrapper-mobileMenu d-block d-lg-none ml-10'
							}>
							<BurgerButton
								menu={ mobileMenu }
								toShowMenu={ toShowMenu }
								scrolled={ scrolled }
							/>

							<div
								className={ cn(
									mobileMenu
										? 'mobileMainMenu'
										: 'mobileMainMenu-active'
								) }>
								{ mobileMenu && <MobileMainMenu/> }
							</div>
						</div>
					</div>
				</div>
			</header>
			{ requestCallModal && <ModalCallRequest/> }
		</>
	);
};

export default Header;
