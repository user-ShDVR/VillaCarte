import React from 'react';
import leavesTransparent from '@/public/leavesTransparent.png';
import leavesLeft from '@/public/leavesLeft.png';
import leavesRight from '@/public/leavesRight.png';
import Image from 'next/image';
import HoveredButton from '@/components/common/Buttons/HoveredButton';

const JoinTheClub = () => {
	return (
		<div className={ 'joinTheClub container-xs pos z-5' }>
			<div style={ { backgroundImage: `url(${ leavesTransparent.src })` } } className={ 'joinTheClub-bg' }/>

			<Image src={ leavesLeft } alt={ '' } className={ 'leavesLeft' }/>

			<div className={ 'container pt-60 mb-60 d-flex flex-column jc-center ai-center' }>
				<h2 className={ 'h2Subtitle ta-center' }>Присоединяйтесь к закрытому клубу VillaCarte</h2>

				<p className={ 'colorGrey ta-center' }>
					Вы становитесь членом клуба после покупки или аренды недвижимости на Пхукете или Самуи. За каждую покупку
					начисляются бонусы — Сабаи. Их можно потратить на аренду виллы и авто, посещение SPA, морские прогулки и
					другие услуги консьерж-сервиса.
				</p>

				<HoveredButton to={ '/' } text={ 'Подробнее' } variant={ 'arrow' } className={ 'ta-center' }/>
			</div>

			<Image src={ leavesRight } alt={ '' } className={ 'leavesRight' }/>
		</div>
	);
};

export default JoinTheClub;