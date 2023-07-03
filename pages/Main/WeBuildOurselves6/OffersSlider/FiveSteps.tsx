import React from 'react';
import listPoint from '@/public/icons/listPoint.svg';
import Image from 'next/image';

interface IProps {
	count: string;
	text: string;
}

const FiveSteps = ( { count, text }: IProps ) => {
	return (
		<div className={ 'steps' }>
			<h6 className={ 'text300 fz-80 pl-16' }>{ count }</h6>
			<Image src={ listPoint } alt={ '' }/>
			<section className={ 'stepLine' }/>
			<p className={ 'text500 colorWhite pl-16' }>{ text }</p>
		</div>
	);
};

export default FiveSteps;