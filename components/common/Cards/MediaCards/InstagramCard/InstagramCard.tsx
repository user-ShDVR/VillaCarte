import React from 'react';
import { staticResource } from '@/utils/resources';

interface IProps {
	image: any;
}

const InstagramCard = ( { image }: IProps ) => {
	return (
		<div className={ 'mediaCard' }>
			<img src={ staticResource(`/${ image }`) } alt={ '' } />
		</div>
	);
};

export default InstagramCard;