import React from 'react';
import linkBtn from '@/public/icons/linkBtn.svg';
import hoveredLinkBtn from '@/public/icons/hoveredLinkBtn.svg';
import Image from 'next/image';

interface IProps {
	mouseOver?: boolean;
}

const LinkButton = ( { mouseOver }: IProps ) => {
	return (
		<button className={ 'linkButton' }>
			{ !mouseOver && <Image src={ linkBtn } alt={ '' }/> }
			{ mouseOver && <Image src={ hoveredLinkBtn } alt={ '' }/> }
		</button>
	);
};

export default LinkButton;