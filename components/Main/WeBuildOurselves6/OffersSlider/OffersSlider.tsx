import React from 'react';
import Slider from 'react-slick';
import { useStore } from 'effector-react';
import { $mainPageInfo } from '@/store/mainPage';
import OfferCard from '@/components/common/Cards/OfferCard/OfferCard';
import { IMainPage } from '@/types/mainPage';
import { offersSliderSetting } from '@/components/common/SliderSettings/offersSliderSetting';

const OffersSlider = () => {
	const offers = useStore<IMainPage>( $mainPageInfo );
	
	return (
		<div className={ 'offersSlider-wrapper' }>
			<Slider { ...offersSliderSetting } className={ 'offersSlider' }>
				{ offers.data?.apartments.map( ( offer, index ) =>
					<OfferCard key={ index } url={ offer.url } image={ offer.image }/>
				) }
			</Slider>
		</div>
	);
};

export default OffersSlider;