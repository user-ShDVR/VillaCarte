import React from 'react';
import Slider from 'react-slick';
import OfferCard from '@/components/common/Cards/OfferCard/OfferCard';
import { IMainPageData } from '@/types/mainPage';
import { offersSliderSetting } from '@/components/common/SliderSettings/offersSliderSetting';

interface IProps {
	data: IMainPageData;
}

const OffersSlider = ( { data }: IProps ) => {

	return (
		<div className={ 'offersSlider-wrapper' }>
			<Slider { ...offersSliderSetting } className={ 'offersSlider' }>
				{ data?.ownProjects.map( ( ownProject, index ) =>
					<OfferCard key={ index } ownProject={ ownProject } index={ index } length={ data?.ownProjects.length }/>
				) }
			</Slider>
		</div>
	);
};

export default OffersSlider;