import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface IProps {
	video: any;
}

const YouTubeCard = ( { video }: IProps ) => {
	const onPlayerReady: YouTubeProps['onReady'] = ( event ) => {
		event.target.pauseVideo();
	};

	const opts: YouTubeProps['opts'] = {
		height: '190',
		width: '100%',
		playerVars: {},
	};

	return (
		<div className={ 'mediaCard' }>
			<YouTube
				videoId={ video }
				opts={ opts }
				onReady={ onPlayerReady }
				className={ 'youTube' }
				iframeClassName={ 'youTubeFrame' }
			/>
		</div>
	);
};

export default YouTubeCard;