import React from 'react';
import leavesTransparent from '@/public/leavesTransparent.png';
import leavesLeft from '@/public/leavesLeft.png';
import leavesRight from '@/public/leavesRight.png';
import Image from 'next/image';
import HoveredButton from '@/components/common/Buttons/HoveredButton';

const JoinTheClub = () => {
	return (
		<div className={ 'joinTheClub container-xs' }>
			<div style={ { backgroundImage: `url(${ leavesTransparent.src })` } } className={'joinTheClub-bg'}/>

			<Image src={ leavesLeft } alt={ '' } className={'leavesLeft'}/>

			<div className={ 'container pt-60 mb-60 d-flex flex-column jc-center ai-center' }>
				<h2 className={ 'h2Subtitle ta-center' }>Присоединяйтесь к закрытому клубу VillaCarte</h2>

				<p className={ 'colorGrey ta-center' }>
					Чтобы стать членом клуба, нужно купить или арендовать недвижимость на Пхукете или Самуи. За каждую покупку
					начисляются бонусы — сабаи. Их можно потратить на аренду виллы и авто, посещения SPA (или спа — можно как
					угодно), морские прогулки и другие услуги корсьер-сервиса.
				</p>

				<HoveredButton to={ '/' } text={ 'Подробнее' } variant={ 'arrow' } className={'ta-center'}/>
			</div>

			<Image src={ leavesRight } alt={ '' } className={'leavesRight'}/>
		</div>
	);
};

export default JoinTheClub;