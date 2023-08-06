import React from 'react';
import { staticResource } from '@/utils/resources';
import Link from 'next/link';

interface IProps {
	image: any;
	path: string;
}

const InstagramCard = ( { image, path }: IProps ) => {
	return (
		<Link target={ '_blank' } href={ path }>
			<div className={ 'mediaCard' }>
				<img src={ staticResource( image ) } alt={ '' }/>
			</div>
		</Link>
	);
};

export default InstagramCard;