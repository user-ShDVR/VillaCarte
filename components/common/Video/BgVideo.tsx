import React from 'react';

const BgVideo = () => {

	const video = { link: require( '@/public/VillaCarte.mp4' ) };

	return (
		<div className={'videoWrapper'}>
			<video className={ 'bgVideo' } autoPlay muted playsInline loop>
				<source src={ video.link } type="video/mp4"/>
			</video>
		</div>
	);
};

export default BgVideo;