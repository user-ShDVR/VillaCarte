import React from 'react';
import bgImage from '@/public/main_bg.png';
import BgVideo from '@/components/common/Video/BgVideo';

const TopBlock = () => {
	return (
		<div className={ 'topBlock' }>
			<BgVideo/>

			<div className={ 'bgAccentOpacity' } />
			<div className={ 'container mainText' }>
				<h1 className={ 'h1Title colorWhite fz-60-200 ls--8' }>VillaCarte</h1>
				<p className={ 'text500 colorWhite' }>
					Сервисная компания по продаже и аренде <br/> курортной недвижимости в Таиланде
				</p>
			</div>
		</div>
	);
};

export default TopBlock;