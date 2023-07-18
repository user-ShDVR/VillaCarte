import React from 'react';
import bgPalms from '@/public/bgPalms.png';
import leavesVideo from '@/public/leavesVideo.png';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import TitleTextArrowCard from '@/components/common/Cards/TitleTextArrowCard/TitleTextArrowCard';
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';

const allServices = [
	{ title: 'Продажа недвижимости', text: 'Виллы и апартаменты для жизни и инвестиций' },
	{ title: 'Аренда недвижимости', text: 'Виллы премиум- и люкс-класса', text2: 'для комфортного отдыха' },
	{
		title: 'Консьерж-сервис',
		text: 'Решение любых вопросов —',
		text2: 'от аренды транспорта',
		text3: 'до развлечений и получения визы'
	},
	{ title: 'Управление недвижимостью', text: 'Пассивный доход из любой точки мира без забот' },
];

const AllServices = () => {
	return (

		<div className={ 'allServices' } >
			<div className={ 'allServices-bg' } style={ { backgroundImage: `url(${ bgPalms.src })` } }/>

			<Image src={ leavesVideo } alt={ '' } className={ 'leavesVideo' }/>

			<Slide direction={ 'up' } triggerOnce={ true } delay={ 1000 }>
				<div className={ 'container services' }>
					<div>
						<div className={ 'pt-60-40' }>
							<div>
								<h2 className={ 'h2Subtitle mb-16' }>Все услуги — <br/> в одной компании</h2>
								<p className={ 'text300 colorText pt-10' }>
									Помогаем купить недвижимость на Пхукете и Самуи, наслаждаться жизнью и отдыхом на островах и получать
									доход от аренды
								</p>
							</div>
						</div>

						<div className={ 'mt-40' }>
							<HoveredButton to={ '/' } text={ 'Узнать больше' } variant={ 'arrow' } className={ 'mt-16' }/>
						</div>
					</div>

					<div className={ 'mt-20 pb-16' }>
						<div className={ 'cardsWrapper' }>
							{ allServices.map( ( item, index ) =>
								<TitleTextArrowCard
									key={ index }
									title={ item.title }
									text={ item.text }
									text2={ item.text2 }
									text3={ item.text3 }
								/>
							) }
						</div>
					</div>
				</div>
			</Slide>
		</div>
	);
};

export default AllServices;