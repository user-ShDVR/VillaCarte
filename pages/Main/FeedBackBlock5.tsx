import React from 'react';
import bgPalms from '@/public/bgPalms.png';
import flowerRight from '@/public/flowerRight.png';
import Image from 'next/image';
import FeedBackForm from '@/components/common/FeedBackForm/FeedBackForm';
import OurMessengers from '@/components/common/OurMessengers/OurMessengers';

const FeedBackBlock = () => {

	return (
		<div className={ 'feedBackBlock ' } style={ { backgroundImage: `url(${ bgPalms.src })` } }>
			<Image src={ flowerRight } alt={ '' } className={'flowerRight'}/>

			<div className={ 'container pt-60' }>
				<div>
					<h2 className={ 'h2Subtitle' }>Закажите персональную подборку</h2>
					<p className={ 'text300 colorText pt-8' }>
						Вам позвонит менеджер и подберёт недвижимость под ваши индивидуальные запросы
					</p>
				</div>

				<FeedBackForm/>

				<div className={'ourMessengers-wrapper'}>
					<OurMessengers/>
				</div>

			</div>
		</div>
	);
};

export default FeedBackBlock;