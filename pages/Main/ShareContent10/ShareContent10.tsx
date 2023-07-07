import React from 'react';
import palmsTransparent from '@/public/palmsTransparent.png';
import YouTubeCard from '@/components/common/Cards/MediaCards/YouTubeCard/YouTubeCard';
import DefaultMediaCard from '@/components/common/Cards/MediaCards/DefaultMediaCard';
import youtubeIcon from '@/public/icons/socials/youtube.svg';
import instagramIcon from '@/public/icons/socials/instagram.svg';
import { useStore } from 'effector-react';
import { IMainPage } from '@/types/mainPage';
import { $mainPageInfo } from '@/store/mainPage';
import InstagramCard from '@/components/common/Cards/MediaCards/InstagramCard/InstagramCard';

const videos = [
	{ link: '9-WKpVg63tA' },
	{ link: 'TR9qHODngPw' },
	{ link: 'HB3a5_ffNGQ' },
	{ link: 'Bwn1tmxIHFI' },
	{ link: 'P69b2dNyVxc' },
	{ link: 'BEAUErwwG74' },
];

const ShareContent = () => {
	const media = useStore<IMainPage>( $mainPageInfo );

	return (
		<div className={ 'shareContent' }>
			{/*<div className={ 'bgOpacity' } style={ { backgroundImage: `url(${ palmsTransparent.src })`, opacity: .1 } }/>*/}

			<div className={ 'container pt-60' }>
				<div>
					<h2 className={ 'h2Subtitle' }>Делимся эксклюзивным <br/> контентом с острова</h2>

					<div className={ 'mediaCard-wrapper' }>
						{ videos.slice( 0, 3 ).map( ( image, publicationId ) =>
							<YouTubeCard key={ publicationId } video={ image.link }/>
						) }
					</div>

					<DefaultMediaCard
						icon={ youtubeIcon }
						text={ 'Смотреть экспертные обзоры' }
						link={ 'https://www.youtube.com/@VillaCartePhuket/videos' }
					/>

					<div className={ 'mediaCard-wrapper' }>
						{/*TODO: instagramPosts*/ }
						{ media.data?.apartments.slice( 0, 3 ).map( item =>
							<InstagramCard key={ item.image } image={ item.image }/>
						) }
					</div>

					<DefaultMediaCard
						icon={ instagramIcon }
						text={ 'Узнать все о недвижимости в Таиланде' }
						link={ 'https://www.instagram.com/villacarte.vip/?igshid=NTc4MTIwNjQ2YQ%3D%3D' }
					/>

				</div>
			</div>
		</div>
	);
};

export default ShareContent;