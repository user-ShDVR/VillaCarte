import React from 'react';
import bgPalms from '@/public/bgPalms.png';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import TitleTextArrowCard from '@/components/common/Cards/TitleTextArrowCard/TitleTextArrowCard';

const allServices = [
	{ title: 'Продажа недвижимости', text: 'Виллы и апартаменты для жизни и инвестиций' },
	{ title: 'Аренда недвижимости', text: 'Виллы премиум- и люкс-класса для комфортного отдыха' },
	{ title: 'Консьерж-сервис', text: 'Решение любых вопросов — от аренды транспорта до развлечений и получения визы' },
	{ title: 'Управление недвижимостью', text: 'Пассивный доход из любой точки мира без забот' },
];

const AllServices = () => {
	return (
		<div className={ 'allServices ' } style={ { backgroundImage: `url(${ bgPalms.src })` } }>
			<div className={ 'container pt-60' }>
				<div>
					<h2 className={ 'h2Subtitle' }>Все услуги — <br/> в одной компании</h2>
					<p className={ 'text300 colorText pt-8' }>
						Помогаем купить недвижимость на Пхукете и Самуи, наслаждаться жизнью и отдыхом на островах и получать доход
						от аренды
					</p>
				</div>
			</div>

			<div className={ 'container' }>
				<HoveredButton to={ '/' } text={ 'Узнать больше' } variant={ 'arrow' } className={ 'mt-16' }/>
			</div>

			<div className={ 'mt-20 pb-20 bgLightGrey' }>
				<div className={ 'container' }>
					{ allServices.map( ( item, index ) =>
						<TitleTextArrowCard key={ index } title={ item.title } text={ item.text }/>
					) }
				</div>
			</div>
		</div>
	);
};

export default AllServices;