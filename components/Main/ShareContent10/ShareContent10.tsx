import React from 'react';
import YouTubeCard from '@/components/common/Cards/MediaCards/YouTubeCard/YouTubeCard';
import DefaultMediaCard from '@/components/common/Cards/MediaCards/DefaultMediaCard';
import youtubeIcon from '@/public/icons/socials/youtube.svg';
import instagramIcon from '@/public/icons/socials/instagram.svg';
import instaImg from '@/public/instaImg.png';
import videoFrame_1 from '@/public/frameVideo_1.png';
import videoFrame_2 from '@/public/frameVideo_2.png';
import videoFrame_3 from '@/public/frameVideo_3.png';
import ytMedia from '@/public/icons/socials/ytMedia.svg';
import instaMedia from '@/public/icons/socials/instaMedia.svg';
import { useStore } from 'effector-react';
import { IMainPage } from '@/types/mainPage';
import { $mainPageInfo } from '@/store/mainPage';
import InstagramCard from '@/components/common/Cards/MediaCards/InstagramCard/InstagramCard';
import { lang } from '@/pages';
import noise from '@/public/noise.webp';

const videos = [
	{ image: videoFrame_1, path: 'https://youtu.be/ew2AIrxIdhM/', code: 1 },
	{ image: videoFrame_2, path: 'https://youtu.be/Bwn1tmxIHFI/', code: 2 },
	{ image: videoFrame_3, path: 'https://youtu.be/bpKGWdg5hoU/', code: 3 },
	// { link: '9-WKpVg63tA' },
	// { link: 'TR9qHODngPw' },
	// { link: 'HB3a5_ffNGQ' },
	// { link: 'Bwn1tmxIHFI' },
	// { link: 'P69b2dNyVxc' },
	// { link: 'BEAUErwwG74' },
];

const photos = [
	{ image: instaImg, path: 'https://www.instagram.com/p/Cu6uow9s2lk/', code: 1 },
	{ image: instaImg, path: 'https://www.instagram.com/p/Cu6uow9s2lk/', code: 2 },
	{ image: instaImg, path: 'https://www.instagram.com/p/Cu6uow9s2lk/', code: 3 },
	{ image: instaImg, path: 'https://www.instagram.com/p/Cu6uow9s2lk/', code: 4 },
	{ image: instaImg, path: 'https://www.instagram.com/p/Cu6uow9s2lk/', code: 5 },
	{ image: instaImg, path: 'https://www.instagram.com/p/Cu6uow9s2lk/', code: 6 },
];

const ShareContent = () => {
	const media = useStore<IMainPage>( $mainPageInfo );

	return (
		<div className={ 'shareContent' }>
			{/*<div className={ 'bgOpacity' } style={ { backgroundImage: `url(${ palmsTransparent.src })`, opacity: .1 } }/>*/ }
			<img src={ noise.src } alt="" className={ 'noise' }/>

			<div className={ 'container pt-60-80' }>
				<div>
					<h2 className={ 'h1Title ls--216' }>{ lang?.sharingExclusiveContentFromTheIsland || '' }</h2>

					<div className={ 'mediaCards' }>
						<div className={ 'mediaCard-wrapper' }>
							{ videos.slice( 0, 3 ).map( item =>
								<YouTubeCard key={ item.code } image={ item.image.src } path={ item.path }/>
							) }
							<DefaultMediaCard
								icon={ youtubeIcon }
								hoveredIcon={ ytMedia }
								text={ lang?.watchExpertReviews || '' }
								link={ 'https://www.youtube.com/@VillaCartePhuket/videos' }
							/>
						</div>

						<div className={ 'mediaCard-wrapper photoCards' }>
							{ photos.slice( 0, 5 ).map( item =>
								<InstagramCard key={ item.code } image={ item.image.src } path={ item.path }/>
							) }
							<DefaultMediaCard
								icon={ instagramIcon }
								hoveredIcon={ instaMedia }
								text={ lang?.learnAllAboutRealEstateInThailand || '' }
								link={ 'https://www.instagram.com/villacarte.vip/?igshid=NTc4MTIwNjQ2YQ%3D%3D' }
							/>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default ShareContent;