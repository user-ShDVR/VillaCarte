import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import Link from 'next/link';

interface IProps {
	image: any;
	path: string;
}

const YouTubeCard = ( { image, path }: IProps ) => {

	return (
		<Link target={ '_blank' } href={ path }>
			<div className={ 'mediaCard' }>
				<img src={ image } alt={ '' }/>
			</div>
		</Link>
	);
};

export default YouTubeCard;