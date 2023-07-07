import React from 'react';
import Slider from 'react-slick';
import avatar1 from '@/public/icons/avatar1.png';
import avatar2 from '@/public/icons/avatar2.png';
import ReviewCard from '@/components/common/Cards/ReviewCard/ReviewCard';
import { weAreTrustedSliderSettings } from '@/pages/Main/WeAreTrusted8/weAreTrustedSliderSettings';
import { Fade } from 'react-awesome-reveal';

const reviews = [
	{
		name: 'Йенс Бракебуш',
		profession: 'Генеральный директор PPG Industry',
		avatar: avatar1,
		text: 'Я сотрудничал с многими компаниями по приобретению недвижимости в Таиланде, но только VillaCarte доказали свой профессионализм и ответственность на практике. Они нашли для меня идеальный объект недвижимости и помогли провести все необходимые процедуры, чтобы моя сделка была безопасной и выгодной. Я рекомендую VillaCarte всем, кто ищет недвижимость в Таиланде'
	},
	{
		name: 'Окишима Жуничи',
		profession: 'Генеральный директор ЙОКОХАМА РУС',
		avatar: avatar2,
		text: 'Сотрудничество с VillaCarte стало для меня настоящим открытием — я не ожидал, что сервис и качество работы могут быть настолько высокими. Они помогли мне выбрать и купить недвижимость в Таиланде, а также провели все необходимые проверки и согласования условий. Я рекомендую VillaCarte всем, кто ищет надёжного партнёра для приобретения недвижимости в Таиланде'
	},
	{
		name: 'Йенс Бракебуш',
		profession: 'Генеральный директор PPG Industry',
		avatar: avatar1,
		text: 'Я сотрудничал с многими компаниями по приобретению недвижимости в Таиланде, но только VillaCarte доказали свой профессионализм и ответственность на практике. Они нашли для меня идеальный объект недвижимости и помогли провести все необходимые процедуры, чтобы моя сделка была безопасной и выгодной. Я рекомендую VillaCarte всем, кто ищет недвижимость в Таиланде'
	},
	{
		name: 'Окишима Жуничи',
		profession: 'Генеральный директор ЙОКОХАМА РУС',
		avatar: avatar2,
		text: 'Сотрудничество с VillaCarte стало для меня настоящим открытием — я не ожидал, что сервис и качество работы могут быть настолько высокими. Они помогли мне выбрать и купить недвижимость в Таиланде, а также провели все необходимые проверки и согласования условий. Я рекомендую VillaCarte всем, кто ищет надёжного партнёра для приобретения недвижимости в Таиланде'
	},
];

const WeAreTrusted = () => {
	return (
		<div className={ 'bgGradient weAreTrusted' }>
			<Fade delay={ 1e2 } cascade damping={ 1e-1 }>
				<div className={ 'container pt-60' }>
					<h2 className={ 'h2Subtitle colorWhite' }>Нам доверяют успешные люди</h2>

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
			</Fade>
		</div>
	);
};

export default WeAreTrusted;