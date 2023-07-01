import React, { ReactNode } from 'react';
import { hideMobileMenu, } from '@/store/mobileMenu';
import Link from 'next/link';
import collapseArrow from '@/public/icons/collapseArrow.svg';
import Image from 'next/image';

interface IProps {
	path?: string;
	text: string;
	className: string;
	textClass?: string;
	component?: ReactNode;
	toShowDropMenu?: () => void;
	ref?: any;
}

const CustomMenuItem = ( { path, text, className, textClass, component, toShowDropMenu, ref }: IProps ) => {
	const toCloseMenu = () => {
		hideMobileMenu( true );
	};

	return (
		<>
			{ path
				?
				<Link href={ path } className={ className } onClick={ toCloseMenu }>
					<p>{ text }</p>
				</Link>

				:
				<div ref={ ref } className={ className } onClick={ toShowDropMenu }>
					<p className={ textClass }>{ text }</p>
					<Image src={ collapseArrow } alt={ '' }/>
					{ component }
				</div>
			}
		</>
	);
};

export default CustomMenuItem;
