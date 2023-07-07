import React, { useState } from 'react';
import Image from 'next/image';
import arrowBtnAccent from '@/public/icons/arrowBtnAccent.svg';
import arrowBtnGradient from '@/public/icons/arrowBtnGradient.svg';
import Link from 'next/link';

interface IProps {
	icon: string;
	hoveredIcon: string;
	text: string;
	link: string;
}

const DefaultMediaCard = ( { icon, hoveredIcon, text, link }: IProps ) => {
	const [ mouseOver, setMouseOver ] = useState<boolean>( false );

	const onMouseOver = () => {
		setMouseOver( true );
	};
	const onMouseLeave = () => {
		setMouseOver( false );
	};

	return (
		<Link
			target={ '_blank' }
			href={ link }
			className={ 'defaultMediaCard-link' }
			onMouseOver={ onMouseOver }
			onMouseLeave={ onMouseLeave }
		>
			<div className={ 'defaultMediaCard' }>
				{ mouseOver
					? <Image src={ hoveredIcon } alt={ '' } className={ 'icon' }/>
					: <Image src={ icon } alt={ '' } className={ 'icon' }/>
				}
				<div className={ 'd-flex jc-between ai-end' }>
					<p className={ 'text300' }>{ text }</p>
					{ mouseOver
						? <Image src={ arrowBtnGradient } alt={ '' }/>
						: <Image src={ arrowBtnAccent } alt={ '' }/>
					}
				</div>
			</div>
		</Link>
	);
};

export default DefaultMediaCard;