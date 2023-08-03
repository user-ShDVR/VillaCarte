import React from 'react';
import BgVideo from '@/components/common/Video/BgVideo';
import { lang } from '@/pages';
import noise from '@/public/noise.webp';

const TopBlock = () => {
	return (
		<div className={ 'topBlock' }>
			<img src={ noise.src } alt="" className={ 'noise' }/>

			<BgVideo/>

			<div className={ 'bgAccentOpacity' }/>
			<div className={ 'container mainText' }>
				<h1 className={ 'h1Title colorWhite fz-60-200' }>VillaCarte</h1>
				<p className={ 'text500 colorWhite' }>
					{ lang?.resortReal || '' }
				</p>
			</div>
		</div>
	);
};

export default TopBlock;