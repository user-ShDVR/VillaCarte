import React, { useEffect, useRef, useState } from 'react';
import { useStore } from 'effector-react';
import { $mobileMenuVisible, showMobileMenu } from '@/store/mobileMenu';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/public/logoImg.svg';
import logoDesktop from '@/public/logoDesktop.svg';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import BurgerButton from '@/components/Header/MobileNav/BurgerButton';
import MobileMainMenu from '@/components/Header/MobileNav/MobileMainMenu';
import cn from 'classnames';
import { Fade } from 'react-awesome-reveal';
import MainMenu from '@/components/Header/MainMenu/MainMenu';
import { useWindowSize } from '@/hooks/useWindowSize';

const Header = () => {
	const size = useWindowSize();
	// @ts-ignore
	const isMobile = size.width <= 1439;
	const [ scrolled, setScrolled ] = useState<boolean>( false );
	const mobileMenu = useStore( $mobileMenuVisible );
	const ref = useRef();

	const toShowMenu = () => {
		showMobileMenu( !mobileMenu );
	};

	const transform = {
		background: 'rgba(34, 54, 74, .4)',
		// backdropFilter: 'blur(15px)',
		boxShadow: '5px 5px 10px 0 rgb(68, 68, 68, .15)',
		borderRadius: '30px',
	};

	const dropBgTransform = {
		background: 'rgba(34, 54, 74, .4)',
		// backdropFilter: 'blur(15px)',
		boxShadow: '5px 5px 10px 0 rgb(68, 68, 68, .15)',
		borderRadius: '0 0 15px 15px',
	};

	const dropBg = {
		background: 'transparent',
		borderLeft: '1px solid #fff',
		borderRight: '1px solid #fff',
		borderBottom: '1px solid #fff',
		boxShadow: '5px 5px 10px 0 rgb(68, 68, 68, .15)',
		borderRadius: '0 0 15px 15px',
	};

	const style = scrolled ? transform : {};

	const dropBgStyle = scrolled ? dropBgTransform : dropBg;

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
		<header style={ style } className="container header">
			{/*// @ts-ignore*/ }
			<div ref={ ref } className="header-wrapper">
				<Fade delay={ 1e2 } cascade damping={ 1e-1 }>
					<div className={'header-logo-wrapper'}>
						<Link href={ '/' } style={ scrolled ? { color: 'white' } : {} } className="header-logo">
							{ isMobile
								? <Image src={ logoImg } alt={ 'VillaCarte' }/>
								: <Image src={ logoDesktop } alt={ 'VillaCarte' }/>
							}
						</Link>
					</div>

					<div className={ 'd-flex ai-center' }>

						<MainMenu dropBgStyle={ dropBgStyle }/>

						<HoveredButton to={ '/' } text={ 'Заказать звонок' } variant={ 'only' } className={ 'text-nowrap ml-10' }/>

						<div className={ 'header-wrapper-mobileMenu d-block d-lg-none ml-10' }>
							<BurgerButton menu={ mobileMenu } toShowMenu={ toShowMenu } scrolled={ scrolled }/>

							<div className={ cn( mobileMenu ? 'mobileMainMenu' : 'mobileMainMenu-active' ) }>
								{ mobileMenu && <MobileMainMenu/> }
							</div>
						</div>
					</div>

				</Fade>
			</div>
		</header>
	);
};

export default Header;