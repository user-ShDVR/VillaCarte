import React from 'react';
import Link from 'next/link';
import playBtn from '@/public/icons/playBtn.svg';
import { staticResource } from '@/utils/resources';

interface IProps {
	image: any;
	path: string;
}

const YouTubeCard = ( { image, path }: IProps ) => {

	return (
		<Link target={ '_blank' } href={ `https://www.youtube.com/watch?v=${ path }` }>
			<div className={ 'mediaCard youTubeCard' }>
				<img src={ staticResource( image ) } alt={ '' } className={ 'object-fit-cover' }/>
				<div className={ 'playIcon-wrapper' }>
					<img src={ playBtn.src } alt={ '' } className={ 'playIcon' }/>
				</div>
			</div>
		</Link>
	);
};

export default YouTubeCard;