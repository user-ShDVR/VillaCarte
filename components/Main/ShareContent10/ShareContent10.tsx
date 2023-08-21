import React from 'react';
import YouTubeCard from '@/components/common/Cards/MediaCards/YouTubeCard/YouTubeCard';
import DefaultMediaCard from '@/components/common/Cards/MediaCards/DefaultMediaCard';
import youtubeIcon from '@/public/icons/socials/youtube.svg';
import instagramIcon from '@/public/icons/socials/instagram.svg';
import ytMedia from '@/public/icons/socials/ytMedia.svg';
import instaMedia from '@/public/icons/socials/instaMedia.svg';
import { useStore } from 'effector-react';
import { IMainPage } from '@/types/mainPage';
import { $mainPageInfo } from '@/store/mainPage';
import InstagramCard from '@/components/common/Cards/MediaCards/InstagramCard/InstagramCard';
interface IProps {
	sharingExclusiveContentFromTheIsland: string;
	watchExpertReviews: string;
	learnAllAboutRealEstateInThailand: string;
}
const ShareContent: React.FC<IProps> = ({
	sharingExclusiveContentFromTheIsland,
	watchExpertReviews,
	learnAllAboutRealEstateInThailand,
}) => {
	const media = useStore<IMainPage>( $mainPageInfo );

	return (
		<div className={ 'shareContent' }>

			<div style={{padding: '5.6vw 3.333vw'}} className={ 'pt-60-80' }>
				<div>
					<h2 className={ 'h1Title ls--216' }>
						{ sharingExclusiveContentFromTheIsland }
					</h2>

					<div className={ 'mediaCards' }>
						<div className={ 'mediaCard-wrapper' }>
							{ media.data.youTubeVideos.slice( 0, 3 ).map( ( item, index ) => (
								<YouTubeCard
									key={ index }
									image={ item.image }
									path={ item.publicationId }
								/>
							) ) }
							<DefaultMediaCard
								variant={ 'youTube' }
								icon={ youtubeIcon }
								hoveredIcon={ ytMedia }
								text={ watchExpertReviews }
								link={ 'https://www.youtube.com/@VillaCartePhuket/videos' }
							/>
						</div>

						<div className={ 'mediaCard-wrapper photoCards' }>
							{ media.data.instagramPosts.slice( 0, 5 ).map( ( item, index ) => (
								<InstagramCard
									key={ index }
									image={ item.image }
									path={ item.publicationId }
								/>
							) ) }
							<DefaultMediaCard
								variant={ 'insta' }
								icon={ instagramIcon }
								hoveredIcon={ instaMedia }
								text={ learnAllAboutRealEstateInThailand }
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
