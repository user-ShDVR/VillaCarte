import React from 'react';
import Link from 'next/link';
import playBtn from '@/public/icons/playBtn.svg';

interface IProps {
	image: any;
	path: string;
}

const YouTubeCard = ( { image, path }: IProps ) => {

	return (
		<Link target={ '_blank' } href={ path }>
			<div className={ 'mediaCard' }>
				<img src={ image } alt={ '' } className={ 'object-fit-cover' }/>
				<div className={ 'playIcon-wrapper' }>
					<img src={ playBtn.src } alt={ '' } className={ 'playIcon' }/>
				</div>
			</div>
		</Link>
	);
};

export default YouTubeCard;