import React from 'react';
import Image from 'next/image';
import arrowBtnAccent from '@/public/icons/arrowBtnAccent.svg';
import Link from 'next/link';

interface IProps {
	icon: string;
	text: string;
	link: string;
}

const DefaultMediaCard = ( { icon, text, link }: IProps ) => {
	return (
		<Link target={'_blank'} href={ link } className={'defaultMediaCard-link'}>
			<div className={ 'defaultMediaCard' }>
				<Image src={ icon } alt={ '' } className={ 'icon' }/>
				<div className={ 'd-flex jc-between ai-end' }>
					<p className={ 'text500 w-210' }>{ text }</p>
					<Image src={ arrowBtnAccent } alt={ '' }/>
				</div>
			</div>
		</Link>
	);
};

export default DefaultMediaCard;