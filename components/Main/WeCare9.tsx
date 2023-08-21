import React from 'react';
import groupPhoto from '@/public/groupPhoto.webp';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
interface IProps {
	inVillaCarteEveryDayWeWork: string;
    weHaveBeenTakingCare: string;
}
const WeCare: React.FC<IProps>  = ({
	inVillaCarteEveryDayWeWork,
	weHaveBeenTakingCare,
}) => {
	return (
		<div className={ 'weCare' }>
			<div className={ 'bgTransparent-white' }/>
			<div style={{padding: '0 3.333vw'}} className={ 'pos' }>
				<Image src={ groupPhoto } alt={ 'VillaCarte' }/>
				<div className={ 'bgGradientBlack' }/>

				<div className={ 'textWrapper' }>
					<h3 className={ 'h2Subtitle colorWhite' }>{ weHaveBeenTakingCare }</h3>
					<p className={ 'text300 colorWhite' }>
						{ inVillaCarteEveryDayWeWork }
					</p>
				</div>
			</div>
			<div className={ 'bgLightGrey' }/>
		</div>
	);
};

export default WeCare;