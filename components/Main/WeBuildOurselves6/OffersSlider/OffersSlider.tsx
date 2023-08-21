import React from 'react';
import Slider from 'react-slick';
import OfferCard from '@/components/common/Cards/OfferCard/OfferCard';
import { IMainPageData } from '@/types/mainPage';
import { offersSliderSetting } from '@/components/common/SliderSettings/offersSliderSetting';

interface IProps {
	data: IMainPageData| undefined;
}

const OffersSlider = ( { data }: IProps ) => {

	return (
		<div className={ 'offersSlider-wrapper' }>
			<div className={ 'sub-container' }>
				<Slider { ...offersSliderSetting } className={ 'offersSlider' }>
					{ data?.ownProjects.map( ( ownProject, index ) =>
						<OfferCard key={ index } ownProject={ ownProject } index={ index } length={ data?.ownProjects.length }/>
					) }
				</Slider>
			</div>
		</div>
	);
};

export default OffersSlider;