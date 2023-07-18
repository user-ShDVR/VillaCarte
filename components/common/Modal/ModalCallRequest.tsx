import React from 'react';
import { Modal } from '@/components/common/Modal/Modal';
import { EModal_VisibleStore } from '@/types/modal';
import palmsTransparent from '@/public/palmsTransparent.png';
import Image from 'next/image';
import flowerRight from '@/public/flowerRight.png';
import FeedBackForm from '@/components/common/Forms/FeedBackForm/FeedBackForm';
import OurMessengers from '@/components/common/OurMessengers/OurMessengers';

const ModalCallRequest = () => {
	return (
		<Modal storeKey={ EModal_VisibleStore.CallRequest }>

			<div className={ 'feedBackBlock bgLightGrey p-40 brad-15' }>
				<div className={ 'feedBackBlock-bg' } style={ { backgroundImage: `url(${ palmsTransparent.src })` } }/>

				<div className={ 'element-animation' }>
					<Image src={ flowerRight } alt={ '' } className={ 'flowerRight' }/>
				</div>

				<div className={ 'container pt-60 pos feedBackBlock-content' }>
					<div>
						<div>
							<h2 className={ 'h2Subtitle' }>Закажите персональную подборку</h2>
							<h6 className={ 'text300 colorText pt-8' }>
								Вам позвонит менеджер и подберёт недвижимость под ваши индивидуальные запросы
							</h6>
						</div>

						<FeedBackForm/>
					</div>

					<div className={ 'ourMessengers-wrapper' }>
						<OurMessengers/>
					</div>

				</div>
			</div>

		</Modal>
	);
};

export default ModalCallRequest;