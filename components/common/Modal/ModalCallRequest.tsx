import React from 'react';
import { Modal } from '@/components/common/Modal/Modal';
import { EModal_VisibleStore } from '@/types/modal';
import feedBackBg from '@/public/feedBackBg.png';
import Image from 'next/image';
import flowerRight from '@/public/flowerRight.png';
import FeedBackForm from '@/components/common/Forms/FeedBackForm/FeedBackForm';
import OurMessengers from '@/components/common/OurMessengers/OurMessengers';
import ModalCloseButton from '@/components/common/Buttons/ModalCloseButton';
import { hideModal } from '@/store/modal';

const ModalCallRequest = () => {
	const toCloseModal = () => {
		hideModal( EModal_VisibleStore.CallRequest );
	};

	return (
		<Modal storeKey={ EModal_VisibleStore.CallRequest } wrapperClass={ 'feedBack-modal-wrapper' }>

			<div className={ 'feedBack-modal bgModal p-40' }>
				<div className={ 'feedBack-modal-bg' } style={ { backgroundImage: `url(${ feedBackBg.src })` } }/>

				<div className={ 'element-animation' }>
					<Image src={ flowerRight } alt={ '' } className={ 'flowerRight' }/>
				</div>

				<div className={ 'container pos feedBackBlock-content' }>
					<div>
						<div>
							<h2 className={ 'h2Subtitle' }>Закажите <br/> персональную подборку</h2>
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

			<ModalCloseButton onClick={ toCloseModal }/>
		</Modal>
	);
};

export default ModalCallRequest;