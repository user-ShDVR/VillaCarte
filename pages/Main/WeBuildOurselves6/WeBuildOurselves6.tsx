import React from 'react';
import listPoint from '@/public/icons/listPoint.svg';
import Image from 'next/image';
import OffersSlider from '@/pages/Main/WeBuildOurselves6/OffersSlider/OffersSlider';
import palmsTransparent from '@/public/palmsTransparent.png';
import FiveSteps from '@/pages/Main/WeBuildOurselves6/OffersSlider/FiveSteps';

const list = [
	'Покупаете недвижимость только у проверенных подрядчиков',
	'Получаете расчёт доходности, чтобы точно знать, сколько заработаете',
	'Узнаёте первыми о прогнозах рынка недвижимости',
	'Остаётесь уверены и спокойны: мы выполняем обязательства перед вами и инвесторами',
];

const WeBuildOurselves = () => {
	return (
		<div className={ 'bgGradient weBuildOurselves' }>
			<div className={ 'container pt-60 d-md-flex' }>
				<h2 className={ 'h2Subtitle colorWhite col-md-6' }>Строим сами – <br/> а значит вы:</h2>

				<ul className={'col-md-6'}>
					{ list.map( item =>
						<div key={ item }>
							<Image src={ listPoint } alt={ '' }/>
							<li className={ 'text500 colorWhite' }>{ item }</li>
						</div>
					) }
				</ul>
			</div>

			<div className={ 'weBuildDownBlock' }>
				<div className={ 'container' }>
					<OffersSlider/>
				</div>

				<div className={ 'fiveStepsSlider-wrapper' } >

					<div className={ 'container' }>
						<h2 className={ 'h2Subtitle colorWhite pos' }>5 шагов – и недвижимость ваша</h2>
					</div>

					<FiveSteps/>

				</div>
			</div>
		</div>
	);
};

export default WeBuildOurselves;