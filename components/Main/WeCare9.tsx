import React from 'react';
import groupPhoto from '@/public/groupPhoto.png';
import Image from 'next/image';
import { lang } from '@/pages';

const WeCare = () => {
	return (
		<div className={ 'weCare' }>
			<div className={ 'bgTransparent-white' }/>
			<div className={ 'container-xl pos' }>
				<Image src={ groupPhoto } alt={ 'VillaCarte' }/>
				<div className={ 'bgGradientBlack' }/>

				<div className={ 'textWrapper' }>
					<h3 className={ 'h2Subtitle colorWhite' }>{ lang?.weHaveBeenTakingCare || '' }</h3>
					<p className={ 'text300 colorWhite' }>
						{ lang?.inVillaCarteEveryDayWeWork || '' }
					</p>
				</div>
			</div>
			<div className={ 'bgLightGrey' }/>
		</div>
	);
};

export default WeCare;