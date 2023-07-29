import React from 'react';
import Slider from 'react-slick';
import avatar1 from '@/public/icons/avatar1.png';
import avatar2 from '@/public/icons/avatar2.png';
import ReviewCard from '@/components/common/Cards/ReviewCard/ReviewCard';
import { weAreTrustedSliderSettings } from '@/components/common/SliderSettings/weAreTrustedSliderSettings';
import { lang } from '@/pages';

const WeAreTrusted = () => {
	const reviews = [
		{
			name: lang?.yensBrakerbush || '',
			profession: lang?.cEOofPPGIndustry || '',
			avatar: avatar1,
			text: lang?.review1 || ''
		},
		{
			name: lang?.okishimaJunichi || '',
			profession: lang?.cEOYOKOHAMARUS || '',
			avatar: avatar2,
			text: lang?.review2 || ''
		},
		{
			name: lang?.yensBrakerbush || '',
			profession: lang?.cEOofPPGIndustry || '',
			avatar: avatar1,
			text: lang?.review1 || ''
		},
		{
			name: lang?.okishimaJunichi || '',
			profession: lang?.cEOYOKOHAMARUS || '',
			avatar: avatar2,
			text: lang?.review2 || ''
		},
	];

	return (
		<div className={ 'weAreTrusted pos' }>
			<div className={ 'container pt-60-80' }>
				<h2 className={ 'h1Title colorWhite ls--216' }>{ lang?.weAreTrustedBySuccessfulPeople || '' }</h2>

				<Slider { ...weAreTrustedSliderSettings } className={ 'weAreTrustedSlider' }>
					{ reviews.map( ( review, index ) =>
						<ReviewCard
							key={ index }
							name={ review.name }
							profession={ review.profession }
							avatar={ review.avatar }
							text={ review.text }
						/>
					) }
				</Slider>

			</div>
		</div>
	);
};

export default WeAreTrusted;