import React from 'react';
import Image from 'next/image';

interface IProps {
	name: string;
	profession: string;
	avatar: any;
	text: string;
}

const ReviewCard = ( { name, profession, avatar, text }: IProps ) => {
	return (
		<div className={ 'reviewCard' }>

			<div className={ 'reviewCard-top' }>
				<Image src={ avatar } alt={ name }/>
				<div className={ 'pl-20' }>
					<h3 className={ 'h3TitleText colorWhite' }>{ name }</h3>
					<p className={ 'text300 colorWhite70' }>{ profession }</p>
				</div>
			</div>

			<div className={ 'divider' }/>

			<p className={ 'text300 colorWhite70' }>{ text }</p>

		</div>
	);
};

export default ReviewCard;