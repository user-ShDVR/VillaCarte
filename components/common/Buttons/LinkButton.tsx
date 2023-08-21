import React from 'react';
import linkBtn from '@/public/icons/linkBtn.svg';
import hoveredLinkBtn from '@/public/icons/hoveredLinkBtn.svg';
import nextArrow from '@/public/icons/nextArrow.svg';

import Image from 'next/image';

interface IProps {
	mouseOver?: boolean;
}

const LinkButton = ( { mouseOver }: IProps ) => {
	return (
		<button className={ 'linkButton' }>
			<Image src={ nextArrow } alt={ '' }/> 
		</button>
	);
};

export default LinkButton;