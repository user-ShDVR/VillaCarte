import React from 'react';
import { staticResource } from '@/utils/resources';
import Link from 'next/link';

interface IProps {
	image: any;
	path: string;
}

const InstagramCard = ( { image, path }: IProps ) => {
	return (
		<Link target={ '_blank' } href={ `https://www.instagram.com/p/${ path }` }>
			<div className={ 'mediaCard instaCard' }>
				<img src={ staticResource( image ) } alt={ '' }/>
			</div>
		</Link>
	);
};

export default InstagramCard;