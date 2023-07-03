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

const steps = [
	{ count: '01', text: 'Персонально подбираем недвижимость под ваши цели и бюджет' },
	{ count: '02', text: 'Рассчитываем доходность, знакомим с объектами и инфраструктурой' },
	{ count: '03', text: 'Договариваемся с застройщиком о выгодных для вас условиях и помогаем заключить сделку' },
	{ count: '04', text: 'Юридически сопровождаем сделку: проверяем объект и помогаем с документами' },
	{ count: '05', text: 'Берём на себя управление недвижимостью на Пхукете и предоставляем услуги консьерж-сервиса' },
];

const WeBuildOurselves = () => {
	return (
		<div className={ 'bgGradient weBuildOurselves' }>
			<div className={ 'container pt-60' }>
				<h2 className={ 'h2Subtitle colorWhite' }>Строим сами – <br/> а значит вы:</h2>

				<ul>
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

				<div className={ 'fiveStepsSlider-wrapper' } style={ { backgroundImage: `url(${ palmsTransparent.src })` } }>
					<div className={ 'container' }>
						<h2 className={ 'h2Subtitle colorWhite' }>5 шагов – и недвижимость ваша</h2>
					</div>
					<div className={ 'stepsWrapper' }>
						{ steps.map( step =>
							<FiveSteps key={ step.count } count={ step.count } text={ step.text }/>
						) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeBuildOurselves;