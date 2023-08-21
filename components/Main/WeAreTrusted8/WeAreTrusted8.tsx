import React from 'react';
import Slider from 'react-slick';
import avatar1 from '@/public/icons/avatar1.png';
import avatar2 from '@/public/icons/avatar2.png';
import ReviewCard from '@/components/common/Cards/ReviewCard/ReviewCard';
import { weAreTrustedSliderSettings } from '@/components/common/SliderSettings/weAreTrustedSliderSettings';
interface IProps {
	weAreTrustedBySuccessfulPeople: string;
	yensBrakerbush: string;
	cEOofPPGIndustry: string;
	review1: string;
	okishimaJunichi: string;
	cEOYOKOHAMARUS: string;
	review2: string;
}
const WeAreTrusted: React.FC<IProps> = ({
	weAreTrustedBySuccessfulPeople,
	yensBrakerbush,
	cEOofPPGIndustry,
	review1,
	okishimaJunichi,
	cEOYOKOHAMARUS,
	review2,
}) => {
	const reviews = [
		{
			name: yensBrakerbush,
			profession: cEOofPPGIndustry,
			avatar: avatar1,
			text: review1
		},
		{
			name: okishimaJunichi,
			profession: cEOYOKOHAMARUS,
			avatar: avatar2,
			text: review2
		},
		{
			name: yensBrakerbush,
			profession: cEOofPPGIndustry,
			avatar: avatar1,
			text: review1
		},
		{
			name: okishimaJunichi,
			profession: cEOYOKOHAMARUS,
			avatar: avatar2,
			text: review2
		},
	];

	return (
		<div className={ 'weAreTrusted pos' }>
			<div style={{padding: '7vw 3.333vw 0'}} className={ 'pt-60-80' }>
				<h2 className={ 'h1Title colorWhite ls--216' }>{ weAreTrustedBySuccessfulPeople }</h2>

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