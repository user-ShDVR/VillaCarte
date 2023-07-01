import React from 'react';
import bgImage from '@/public/main_bg.png';
import BgVideo from '@/components/common/Video/BgVideo';

const TopBlock = () => {
	return (
		<div className={ 'topBlock' }>
			<BgVideo/>

			<div className={ 'bgAccentOpacity' } style={ {
				backgroundImage: `url(${ bgImage.src })`,
				opacity: .8,
				zIndex: 0,
				width: '100%',
				height: '100vh',
			} }/>
			<div className={ 'container mainText' }>
				<h1 className={ 'h1Title colorWhite fz-60' }>VillaCarte</h1>
				<p className={ 'text500 colorWhite' }>
					Сервисная компания по продаже и аренде курортной недвижимости в Таиланде
				</p>

			</div>
		</div>
	);
};

export default TopBlock;