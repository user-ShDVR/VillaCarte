import React from 'react';
import Slider from 'react-slick';
import { useStore } from 'effector-react';
import { $mainPageInfo } from '@/store/mainPage';
import OfferCard from '@/components/common/Cards/OfferCard/OfferCard';
import { offersSliderSetting } from '@/pages/Main/WeBuildOurselves6/OffersSlider/offersSliderSetting';
import { IMainPage } from '@/types/mainPage';

const OffersSlider = () => {
	const offers = useStore<IMainPage>( $mainPageInfo );
	
	return (
		<div>
			<Slider { ...offersSliderSetting } className={'offersSlider'}>
				{ offers.data?.apartments.map( ( offer, index ) =>
					<OfferCard key={ index } url={ offer.url } image={ offer.image }/>
				) }
			</Slider>
		</div>
	);
};

export default OffersSlider;